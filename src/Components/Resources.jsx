import React, { useState } from 'react';
import {
	FaBook,
	FaCode,
	FaNetworkWired,
	FaDatabase,
	FaCogs,
} from 'react-icons/fa';
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
