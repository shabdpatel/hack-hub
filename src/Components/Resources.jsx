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
						- Here’s an improved version of your paragraph: After
						extensive research, we found that no single resource
						covers all these subjects comprehensively and to the
						right depth for placements. Some YouTube channels delve
						too deeply into topics, while others barely scratch the
						surface. With guidance from our alumni and careful
						observation, we have created a preparation guide for
						each subject, tailored to the level of depth required.
						We've also considered the weightage these subjects hold
						in coding interviews and software development. As a
						result, we identified GeeksforGeeks, InterviewBit, and
						some selected YouTube channels as the gold standard for
						mastering these subjects.
					</li>

					<li>
						<span className="font-bold text-[#39FF14]">
							Preparation guide:
						</span>{' '}
						<ol>
							<li>
								<span className="font-bold text-[#39FF14]">
									Object-Oriented Programming (OOPs) :
								</span>{' '}
								OOPs is a favorite topic for interviewers due to
								its crucial role in software development. In
								addition to asking direct questions on OOP
								concepts, interviewers often present
								object-oriented design problems, making it one
								of the most important subjects to master. To
								prepare for this subject, start with the
								language-independent introduction video in the
								resources section, then read the article for
								your preferred language. After that, watch the
								video specific to your chosen language, and
								finally, go through all the provided practice
								questions.
							</li>
							<li>
								<span className="font-bold text-[#39FF14]">
									DBMS + SQL :
								</span>{' '}
								No software interview is complete without
								questions on DBMS, as it is fundamental to any
								system. A particularly important aspect of DBMS
								is SQL, where you may be asked to implement
								various queries. It's crucial to practice SQL
								problems on platforms like LeetCode to
								strengthen your skills. For non-CS students,
								DBMS might not be part of the regular
								curriculum, so we recommend watching an in-depth
								video by CodeHelp on YouTube and a comprehensive
								SQL one-shot video by Apna College. After
								watching these two resources, be sure to go
								through the provided question sets and articles
								to fully solidify your understanding of the
								subject.
							</li>
							<li>
								<span className="font-bold text-[#39FF14]">
									Operating Systems (OS) :
								</span>{' '}
								Similar to DBMS, this subject is not typically
								part of the standard curriculum for non-CS
								students. For them, we recommend watching the
								in-depth video by CodeHelp on YouTube. However,
								if you find it too long, there’s also a shorter
								video by Anuj Bhaiya. It’s up to you which one
								you prefer to follow, but the most important
								part is to go through the questions and articles
								we’ve provided to strengthen your understanding.
							</li>
							<li>
								<span className="font-bold text-[#39FF14]">
									Computer Networks :
								</span>{' '}
								At the fresher level, interviewers typically
								don't ask very in-depth questions on this
								subject, but it’s essential to have a basic
								understanding to avoid disappointing the
								interviewer. Therefore, we’ve provided a short
								video and a few basic articles to help you grasp
								the fundamentals.
							</li>
							<li>
								<span className="font-bold text-[#39FF14]">
									System Design :
								</span>{' '}
								System design is generally an advanced topic
								typically asked in senior-level interviews.
								However, in recent years, some companies have
								started including questions on this subject in
								fresher-level interviews as well, particularly
								low-level design questions, such as
								object-oriented design, which I mentioned
								earlier. To help you master this subject, we’ve
								included some of the best resources available.
								For object-oriented design, best way is building
								mini projects that follow object-oriented design
								principles.
							</li>
						</ol>
					</li>
				</ol>
				<p className="text-lg text-gray-300 mb-4 leading-relaxed">
					<strong className="text-[#39FF14]">Additional Tips:</strong>{' '}
				</p>
				<p className="text-lg text-gray-300 leading-relaxed">
					-Please make notes as it will make revision easier in the
					future.
				</p>
				<p className="text-lg text-gray-300 leading-relaxed">
					-The provided articles and questions are much more important
					than the videos.
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
