import React from 'react';
import { FaTimes, FaArrowLeft } from 'react-icons/fa'; // Add icons for cut button and back button

const ResourceDetail = ({ resourceTitle, handleBack }) => {
	const resourceDetails = {
		'Object-Oriented Programming (OOPs)': {
			videos: [
				{
					title: 'Introduction to Object-Oriented Programming (OOPs)',

					link: 'https://www.youtube.com/watch?v=SiBw7os-_zI',
				},
				{
					title: 'OOPs in Java',
					link: 'https://www.youtube.com/watch?v=bSrm9RXwBaI',
				},
				{
					title: 'OOPs in Python',
					link: 'https://www.youtube.com/watch?v=Ej_02ICOIgs',
				},
				{
					title: 'OOPs in C++',
					link: 'https://www.youtube.com/watch?v=wN0x9eZLix4',
				},
			],

			articles: [
				{
					title: 'Python OOPs Concepts',
					link: 'https://www.geeksforgeeks.org/python-oops-concepts/',
				},
				{
					title: 'Java OOPs Concepts',
					link: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',
				},
				{
					title: 'C++ OOPs Concepts',
					link: 'https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/',
				},
				{
					title: '30 OOPs questinos from GFG',
					link: 'https://www.geeksforgeeks.org/oops-interview-questions/',
				},
				{
					title: '40 OOPs questinos from InterviewBit',
					link: 'https://www.interviewbit.com/oops-interview-questions/',
				},
			],
		},
		'Operating Systems (OS)': {
			videos: [
				{
					title: 'Operating System In One Shot',
					link: 'https://www.youtube.com/watch?v=8XBtAjKwCm4',
				},
				{
					title: 'Complete Operating Systems',
					link: 'https://www.youtube.com/watch?v=3obEP8eLsCw',
				},
			],

			articles: [
				{
					title: 'Notes on Operating Systems',
					link: 'https://www.geeksforgeeks.org/last-minute-notes-operating-systems/',
				},
				{
					title: 'Interview Questinos on Operating Systems',
					link: 'https://www.geeksforgeeks.org/operating-systems-interview-questions/',
				},
			],
		},
		'Database Management Systems (DBMS)': {
			videos: [
				{
					title: 'Complete DBMS',
					link: 'https://www.youtube.com/watch?v=dl00fOOYLOM',
				},
				{
					title: 'SQL in one shot',
					link: 'https://www.youtube.com/watch?v=hlGoQC332VM',
				},
			],

			articles: [
				{
					title: 'Leetcode questinos on SQL',
					link: 'https://leetcode.com/studyplan/top-sql-50/',
				},
				{
					title: 'SQL Interview Questions GFG',
					link: 'https://www.geeksforgeeks.org/sql-interview-questions/',
				},
				{
					title: 'DBMS Interview Questions InterviewBit',
					link: 'https://www.interviewbit.com/dbms-interview-questions/',
				},
				{
					title: 'DBMS conceptes GFG',
					link: 'https://www.geeksforgeeks.org/last-minute-notes-dbms/',
				},
				{
					title: 'DBMS questinos GFG set-1',
					link: 'https://www.geeksforgeeks.org/commonly-asked-dbms-interview-questions/',
				},
				{
					title: 'DBMS questinos GFG set-2',
					link: 'https://www.geeksforgeeks.org/commonly-asked-dbms-interview-questions-set-2/',
				},
			],
		},
		'Computer Networks': {
			videos: [
				{
					title: 'Computer Networks in 1 Video for Placement',
					link: 'https://www.youtube.com/watch?v=qUBHLZEtS0M',
				},
			],

			articles: [
				{
					title: 'Computer Networks Notes from GFG',
					link: 'https://www.geeksforgeeks.org/last-minute-notes-computer-network/',
				},
				{
					title: 'Interview Questinos from InterviewBit',
					link: 'https://www.interviewbit.com/networking-interview-questions/',
				},
			],
		},
		'System Design': {
			videos: [
				{
					title: 'System Design for Beginners Course',
					link: 'https://www.youtube.com/watch?v=m8Icp_Cid5o',
				},
			],

			articles: [
				{
					title: '10 System Design Questinos from GFG',
					link: 'https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/',
				},
				{
					title: 'Complete System Design from InterviewBit',
					link: 'https://www.interviewbit.com/courses/system-design/',
				},
			],
		},
	};

	// Extract YouTube video ID from the URL to generate the thumbnail
	const getYouTubeThumbnail = url => {
		const videoId = url.split('v=')[1]?.split('&')[0];
		return `https://img.youtube.com/vi/${videoId}/0.jpg`; // Standard YouTube thumbnail URL
	};

	// Extract YouTube playlist ID from the URL to generate the thumbnail
	const getYouTubePlaylistThumbnail = url => {
		const playlistId = url.split('list=')[1]?.split('&')[0];
		return `https://img.youtube.com/vi/${playlistId}/0.jpg`; // Thumbnail for the first video in the playlist
	};

	return (
		<section className="bg-black text-[#39FF14] py-16 px-8 relative">
			{/* Cut Button (close button) */}
			<button
				onClick={handleBack}
				className="absolute top-8 right-8 text-[#39FF14] text-3xl hover:text-[#32CD32] transition-colors">
				<FaTimes />
			</button>

			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-8">
					{resourceTitle} Resources
				</h1>

				{/* Back Button (top) */}
				<button
					onClick={handleBack}
					className="mb-8 px-6 py-3 bg-[#39FF14] hover:bg-[#32CD32] text-black font-bold rounded-lg flex items-center">
					<FaArrowLeft className="mr-2" /> Back to Resources
				</button>

				{/* Articles Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Articles</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{resourceDetails[resourceTitle].articles.map(
							(article, index) => (
								<div
									key={index}
									className="bg-[#222222] p-6 rounded-lg shadow-lg">
									<a
										href={article.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-lg hover:underline">
										{article.title}
									</a>
								</div>
							)
						)}
					</div>
				</div>
				{/* Videos Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-4">YouTube Videos</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{resourceDetails[resourceTitle].videos.map(
							(video, index) => (
								<div
									key={index}
									className="bg-[#222222] p-6 rounded-lg shadow-lg">
									<a
										href={video.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block mb-4">
										<img
											src={getYouTubeThumbnail(
												video.link
											)}
											alt={video.title}
											className="w-full h-48 object-cover rounded-md"
										/>
										<p className="text-lg mt-2 hover:underline">
											{video.title}
										</p>
									</a>
								</div>
							)
						)}
					</div>
				</div>

				{/* Back Button (bottom) */}
				<button
					onClick={handleBack}
					className="mt-8 px-6 py-3 bg-[#39FF14] hover:bg-[#32CD32] text-black font-bold rounded-lg flex items-center">
					<FaArrowLeft className="mr-2" /> Back to Resources
				</button>
			</div>
		</section>
	);
};

export default ResourceDetail;
