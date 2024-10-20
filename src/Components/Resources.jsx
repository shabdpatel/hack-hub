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
				<div className="w-full flex justify-center">
					<h2 className="text-3xl font-bold mb-6 text-[#39FF14]">
						How to Prepare
					</h2>
				</div>
				<p className="text-lg text-gray-300 mb-6 leading-relaxed">
					Prioritizing subjects for placements is crucial. Here's a
					priority order that will help you focus on the most
					important topics for technical interviews:
				</p>
				<ol className="list-decimal text-left text-gray-300 pl-6 mb-6 space-y-4">
					<li>
						<span className="font-bold text-[#39FF14]">
							Data Structures & Algorithms
						</span>{' '}
						- The foundation for placements. Start with basics, then
						move to advanced topics.
					</li>
					<li>
						<span className="font-bold text-[#39FF14]">
							Object-Oriented Programming (OOPs)
						</span>{' '}
						- Essential for design and development roles.
					</li>
					<li>
						<span className="font-bold text-[#39FF14]">
							Operating Systems (OS)
						</span>{' '}
						- System-level knowledge, important for understanding
						how software interacts with hardware.
					</li>
					<li>
						<span className="font-bold text-[#39FF14]">
							Database Management Systems (DBMS)
						</span>{' '}
						- Key for managing and retrieving data efficiently.
					</li>
					<li>
						<span className="font-bold text-[#39FF14]">
							System Design & Networks
						</span>{' '}
						- Critical for scaling and building reliable systems,
						especially in senior roles.
					</li>
				</ol>
				<p className="text-lg text-gray-300 mb-4 leading-relaxed">
					<strong className="text-[#39FF14]">
						Why GeeksforGeeks (GFG)?
					</strong>{' '}
					GFG provides a comprehensive collection of articles,
					problems, and explanations across all these subjects. It is
					widely recognized as the best platform to practice and
					prepare for placements.
				</p>
				<p className="text-lg text-gray-300 leading-relaxed">
					Focus on consistency and practice with real problems to
					improve your chances of success!
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
