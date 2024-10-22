import React, { useState } from 'react';
import { FaCode, FaNetworkWired, FaDatabase, FaCogs } from 'react-icons/fa';
import ResourceDetail from './ResourceDetail';

const Resources = () => {
	const resourcesList = [
		{
			title: 'Object-Oriented Programming (OOPs)',
			description: 'Learn the principles of OOPs.',
			icon: (
				<FaCode
					size={40}
					className="mx-auto mb-4 text-[#39FF14]"
				/>
			),
		},
		{
			title: 'Operating Systems (OS)',
			description: 'Understand operating systems.',
			icon: (
				<FaCogs
					size={40}
					className="mx-auto mb-4 text-[#39FF14]"
				/>
			),
		},
		{
			title: 'Database Management Systems (DBMS)',
			description: 'Master databases.',
			icon: (
				<FaDatabase
					size={40}
					className="mx-auto mb-4 text-[#39FF14]"
				/>
			),
		},
		{
			title: 'Computer Networks',
			description: 'Learn about networking.',
			icon: (
				<FaNetworkWired
					size={40}
					className="mx-auto mb-4 text-[#39FF14]"
				/>
			),
		},
		{
			title: 'System Design',
			description: 'Architect complex systems.',
			icon: (
				<FaCogs
					size={40}
					className="mx-auto mb-4 text-[#39FF14]"
				/>
			),
		},
	];

	const [selectedResource, setSelectedResource] = useState(null);

	const handleAccessResource = resourceTitle =>
		setSelectedResource(resourceTitle);

	const handleBack = () => setSelectedResource(null);

	if (selectedResource) {
		return (
			<ResourceDetail
				resourceTitle={selectedResource}
				handleBack={handleBack}
			/>
		);
	}

	return (
		<section className="bg-black text-[#39FF14] py-16 px-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold">Hackathon Resources</h1>
			</div>

			{/* How to Prepare Section */}
			<div className="max-w-4xl mx-auto mb-12 p-6 border-4 border-[#39FF14] rounded-lg shadow-lg bg-[#222222]">
				<div className="flex justify-center w-full">
					<h2 className="text-3xl font-bold mb-6 text-[#39FF14]">
						How to Prepare
					</h2>
				</div>
				<p className="text-lg text-[#FF0000] mb-6 leading-relaxed bg-gray-800 p-4 rounded-md text-center">
					Read this guide completely before starting your preparation.
				</p>
				<ol className="list-decimal text-left text-gray-300 pl-6 mb-6 space-y-4">
					<li>
						<span className="font-bold text-[#39FF14]">
							Why are Computer Science fundamental subjects
							important?
						</span>{' '}
						- While preparing for placements in tech companies,
						students (especially non-CS background students) make a
						huge mistake by focusing only on Data Structures &
						Algorithms and completely skipping the CS fundamental
						subjects. But instead, these subjects are actually very
						easy to complete in a short period of time and also very
						important at the same time, as they make the foundation
						for the software development journey to make you a good
						software devloper.
					</li>
					<li>
						<span className="font-bold text-[#39FF14]">
							Priority order of these subjects for placements:
						</span>{' '}
						[OOPs &gt;&gt; (DBMS + SQL) &gt; OS &gt;&gt; CN &gt;
						System Design.]
					</li>
					<li>
						<span className="font-bold text-[#39FF14]">
							Best resource to prepare for these subjects:
						</span>{' '}
						- After carefully searching across the internet, we
						found that there is no single resource that covers all
						of these subjects comprehensively and to the right depth
						for placements. Some YouTube channels teach in
						unnecessary depth, while others don't go deep enough.
						After careful observation and receiving guidance from
						our alumni, we have come to the conclusion that
						GeeksforGeeks (GFG) is the golden standard for these
						subjects.
					</li>
					<li>
						<span className="font-bold text-[#39FF14]">
							Preparation guide:
						</span>{' '}
						- Focus on mastering OOPs, OS, CN, DBMS & SQL, and
						System Design to be fully prepared for placements.
					</li>
				</ol>
				<p className="text-lg text-gray-300 mb-4 leading-relaxed">
					<strong className="text-[#39FF14]">
						Recommended videos before you start:
					</strong>{' '}
					Watch these videos to get a solid introduction before diving
					deep into GFG and other materials. These are essential to
					build your base and guide you through the key concepts.
				</p>
				<p className="text-lg text-gray-300 leading-relaxed">
					Remember, focus on consistency and practice solving real
					problems to improve your chances of success in technical
					interviews!
				</p>
			</div>

			{/* Resources Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{resourcesList.map((resource, index) => (
					<div
						key={index}
						className="bg-[#222222] p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
						{resource.icon}
						<h3 className="text-2xl font-bold">{resource.title}</h3>
						<p className="text-sm text-gray-400 mb-4">
							{resource.description}
						</p>
						<button
							onClick={() => handleAccessResource(resource.title)}
							className="px-4 py-2 bg-[#39FF14] hover:bg-[#32CD32] text-black font-bold rounded-lg transition-colors duration-300">
							Access Resource
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Resources;
