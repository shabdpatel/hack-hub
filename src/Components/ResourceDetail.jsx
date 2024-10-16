import React from 'react';
import { FaTimes, FaArrowLeft } from 'react-icons/fa'; // Add icons for cut button and back button

const ResourceDetail = ({ resourceTitle, handleBack }) => {
	// Mock data for resource details (you can replace this with actual data)
	const resourceDetails = {
		videos: [
			{
				title: 'OOPs Concepts Tutorial',
				link: 'https://youtu.be/6soT3DMBJGQ?si=bjEnamufedgjBSGN',
			},
			{
				title: 'OOPs in JavaScript',
				link: 'https://www.youtube.com/watch?v=zPHerhks2Vg',
			},
		],
		playlists: [
			{
				title: 'OOPs Playlist',
				link: 'https://www.youtube.com/playlist?list=PLillGF-RfqbaP_71rOyChhjeK1swokUIS',
			},
		],
		articles: [
			{
				title: 'Introduction to OOPs',
				link: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept/',
			},
		],
		websites: [
			{
				title: 'MDN Web Docs - OOPs',
				link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects',
			},
		],
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

				{/* Videos Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-4">YouTube Videos</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{resourceDetails.videos.map((video, index) => (
							<div
								key={index}
								className="bg-[#222222] p-6 rounded-lg shadow-lg">
								<a
									href={video.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block mb-4">
									<img
										src={getYouTubeThumbnail(video.link)}
										alt={video.title}
										className="w-full h-48 object-cover rounded-md"
									/>
									<p className="text-lg mt-2 hover:underline">
										{video.title}
									</p>
								</a>
							</div>
						))}
					</div>
				</div>

				{/* Playlists Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-4">
						YouTube Playlists
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{resourceDetails.playlists.map((playlist, index) => (
							<div
								key={index}
								className="bg-[#222222] p-6 rounded-lg shadow-lg">
								<a
									href={playlist.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block mb-4">
									<img
										src={getYouTubePlaylistThumbnail(
											playlist.link
										)}
										alt={playlist.title}
										className="w-full h-48 object-cover rounded-md"
									/>
									<p className="text-lg mt-2 hover:underline">
										{playlist.title}
									</p>
								</a>
							</div>
						))}
					</div>
				</div>

				{/* Articles Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Articles</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{resourceDetails.articles.map((article, index) => (
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
						))}
					</div>
				</div>

				{/* Websites Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Websites</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{resourceDetails.websites.map((website, index) => (
							<div
								key={index}
								className="bg-[#222222] p-6 rounded-lg shadow-lg">
								<a
									href={website.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-lg hover:underline">
									{website.title}
								</a>
							</div>
						))}
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
