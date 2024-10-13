import React, { useState, useEffect } from 'react';
import Landing from './Components/Landing'; // Your landing component
import Dashboard from './Components/Dashboard';
import Registration from './Components/Registration';
import Resources from './Components/Resources';

const App = () => {
	const [isLandingVisible, setIsLandingVisible] = useState(true);
	const [activeTab, setActiveTab] = useState('Home'); // Default active tab is Home

	// Function to hide landing and show navbar + home
	const handleGetStarted = () => {
		setIsLandingVisible(false); // Hide the landing page
	};

	// Function to render the selected tab component
	const renderActiveTab = () => {
		switch (activeTab) {
			case 'Dashboard':
				return <Dashboard />;
			case 'Registration':
				return <Registration />;
			case 'Home':
				return (
					<div className="min-h-screen bg-black text-[#39FF14] py-12 px-4 sm:px-8">
						{/* Hero Section */}
						<section className="text-center py-16">
							<h1 className="text-4xl sm:text-6xl font-bold mb-4">
								Welcome to Hack-Hub!
							</h1>
							<p className="text-lg sm:text-2xl mb-8">
								Unlock your coding potential and compete for
								amazing prizes.
							</p>
							<a
								href="#registration"
								className="bg-[#39FF14] text-black px-6 py-3 rounded-full font-bold text-lg sm:text-xl transition-transform transform hover:scale-105">
								Get Started
							</a>
						</section>

						{/* Key Features Section */}
						<section className="py-16">
							<h2 className="text-3xl font-bold text-center mb-12">
								Why Join Hack-Hub?
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								<div className="text-center">
									<div className="bg-[#222222] p-8 rounded-lg shadow-lg hover:shadow-xl transition">
										<h3 className="text-2xl font-bold mb-4">
											Exciting Challenges
										</h3>
										<p className="text-lg">
											Test your skills with a variety of
											coding challenges designed to push
											you to your limits.
										</p>
									</div>
								</div>

								<div className="text-center">
									<div className="bg-[#222222] p-8 rounded-lg shadow-lg hover:shadow-xl transition">
										<h3 className="text-2xl font-bold mb-4">
											Amazing Prizes
										</h3>
										<p className="text-lg">
											Compete for awesome rewards and earn
											bragging rights as the top coder.
										</p>
									</div>
								</div>

								<div className="text-center">
									<div className="bg-[#222222] p-8 rounded-lg shadow-lg hover:shadow-xl transition">
										<h3 className="text-2xl font-bold mb-4">
											Learn and Grow
										</h3>
										<p className="text-lg">
											Develop your coding knowledge and
											meet like-minded individuals.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Timeline Section */}
						<section className="py-16">
							<h2 className="text-3xl font-bold text-center mb-12">
								Hackathon Timeline
							</h2>
							<div className="max-w-4xl mx-auto bg-[#222222] p-8 rounded-lg shadow-lg">
								<ul className="text-lg sm:text-xl list-disc list-inside">
									<li className="mb-4">
										<strong>Registration Opens:</strong>{' '}
										20th October
									</li>
									<li className="mb-4">
										<strong>Hackathon Start:</strong> 4th
										November, 2 PM
									</li>
									<li className="mb-4">
										<strong>Submission Deadline:</strong>{' '}
										6th November, 5 PM
									</li>
									<li className="mb-4">
										<strong>Winners Announced:</strong> 8th
										November
									</li>
								</ul>
							</div>
						</section>

						{/* Call to Action Section */}
						<section className="text-center py-16">
							<a
								href="#registration"
								className="bg-[#39FF14] text-black px-8 py-4 rounded-full font-bold text-lg sm:text-xl transition-transform transform hover:scale-105">
								Register Now
							</a>
						</section>
					</div>
				);
			case 'Resources':
				return <Resources />;
			default:
				return <Home />;
		}
	};

	return (
		<div className="min-h-screen bg-black text-[#39FF14]">
			{/* Conditionally Render the Landing Page */}
			{isLandingVisible ? (
				<Landing onGetStarted={handleGetStarted} />
			) : (
				<>
					{/* "Hack-Hub" Text for Mobile View, Fixed at the Top */}
					<div className="md:hidden fixed top-0 left-0 right-0 flex justify-center py-4 bg-black z-20">
						<h1 className="text-3xl font-bold text-[#39FF14]">
							Hack-Hub
						</h1>
					</div>

					{/* Navbar */}
					<nav
						className={`fixed z-10 bg-black w-full bottom-0 md:top-0 md:bottom-auto left-0 right-0`}>
						<div className="flex justify-center items-center bg-black py-4 md:justify-between md:px-8">
							{/* Hack-Hub Text for Desktop */}
							<div className="hidden md:block">
								<h1 className="text-3xl font-bold text-[#39FF14]">
									Hack-Hub
								</h1>
							</div>

							{/* Navbar Links */}
							<ul className="flex justify-around items-center w-full md:w-auto px-4 py-3 bg-black bg-opacity-80 backdrop-blur-lg rounded-t-lg md:rounded-none border-t border-[#39FF14] md:border-none md:flex-row md:space-x-8">
								{[
									'Home',
									'Dashboard',
									'Registration',
									'Resources',
								].map(tab => (
									<li
										key={tab}
										className="relative group">
										<button
											className={`px-4 py-2 text-sm md:text-lg font-bold rounded-full transition-colors duration-300 ${
												activeTab === tab
													? 'bg-[#39FF14] text-black'
													: 'text-white hover:text-[#39FF14]'
											}`}
											onClick={() => setActiveTab(tab)}>
											{tab}
										</button>
									</li>
								))}
							</ul>
						</div>
					</nav>

					{/* Main Content */}
					<div className="pt-24 p-4 md:pt-20">
						{renderActiveTab()}
					</div>
				</>
			)}
		</div>
	);
};

export default App;
