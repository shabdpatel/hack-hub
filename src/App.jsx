import React, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import Registration from './Components/Registration';
import Resources from './Components/Resources';
import Landing from './Components/Landing'; // Import the Landing component

const App = () => {
	const [isLandingVisible, setIsLandingVisible] = useState(true);
	const [activeTab, setActiveTab] = useState('Home'); // Default active tab is Home

	// Function to hide landing and show navbar + home
	const handleGetStarted = () => {
		setIsLandingVisible(false); // Hide the landing page
	};

	// Scroll to top when activeTab changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [activeTab]);

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
						{/* Introduction */}
						<section className="text-center py-12">
							<h1 className="text-4xl sm:text-5xl font-bold mb-4">
								Welcome to Hack-Hub
							</h1>
							<p className="text-lg sm:text-xl max-w-3xl mx-auto">
								Hack-Hub is an open community of coding
								enthusiasts from NIT-Hamirpur. Our mission is to
								learn together and help each other grow in the
								field of coding and problem-solving.
							</p>
						</section>

						{/* Purpose of the Hackathon */}
						<section className="py-12">
							<h2 className="text-3xl font-bold mb-4 text-center">
								Purpose of the Hackathon
							</h2>
							<p className="text-lg text-center max-w-4xl mx-auto">
								We are organizing this hackathon to motivate
								students to master five fundamental computer
								science subjects: OOPs, OS, CN, System Design,
								and DBMS. These subjects are crucial in the
								Software Development Life Cycle (SDLC) and
								technical interviews for tech companies. Despite
								their importance, students often overlook them
								due to lack of motivation. By gamifying the
								learning process, we aim to provide a fun and
								engaging way to master these essential topics.
							</p>
						</section>

						{/* Hackathon Details */}
						<section className="py-12 bg-gray-900 bg-opacity-50 rounded-lg">
							<h2 className="text-3xl font-bold mb-6 text-center">
								Hackathon Details
							</h2>
							<div className="max-w-4xl mx-auto">
								<p className="text-lg text-center mb-8">
									The hackathon is an offline exam that will
									take place on <strong>4th November</strong>{' '}
									at NIT Hamirpur. The question paper will be
									set by our alumni working at top tech
									companies like Google, Microsoft, and
									Salesforce. We will also provide
									high-quality resources on our website to
									help you prepare for the subjects.
								</p>
								<p className="text-lg text-center mb-8">
									The exam consists of{' '}
									<strong>200 MCQ questions</strong> to be
									answered in <strong>180 minutes</strong>,
									covering the five subjects mentioned above.
									The answer sheets will be checked on the
									spot, and results will be declared
									immediately. All participants will receive
									digital certificates of participation.
								</p>
								{/* Fairness Assurance */}
								<p className="text-lg text-center mb-8">
									<strong>Registration Fees:</strong>
									&#x20B9;150 per participant, which will be
									redistributed among the winners as prizes.
									This is a non-profit community, and the only
									purpose of the registration fees is to
									ensure the commitment of the participants.
								</p>
								{/* Fairness Assurance */}
								<p className="text-lg text-center mb-8">
									<strong>Fairness Assurance:</strong> To
									ensure the exam is 100% fair, the question
									paper will be received from our alumni right
									at the time of the examination. This means
									no one, including the organizers, will have
									prior access to the questions.
								</p>
							</div>
						</section>

						{/* Timeline and Registration */}
						<section className="py-12 text-center">
							<h2 className="text-3xl font-bold mb-4">
								Rules, Regulations & Timeline
							</h2>
							<ul className="text-lg sm:text-xl list-none space-y-4">
								<li>
									<strong>Registration Deadline:</strong> 31st
									October
								</li>
								<li>
									<strong>Hackathon Date:</strong> 4th
									November, 2 PM
								</li>
								<li>
									<strong>Results Announcement:</strong> On
									the spot
								</li>
								<li>
									<strong>Pattern:</strong> Objective MCQ (200
									questions, 180 minutes, 5 subjects, 25%
									negative marking)
								</li>
								<li>
									<strong>Venue:</strong> NIT Hamirpur Campus
									(exact location to be announced)
								</li>
								<li>
									<strong>Eligibility:</strong> Open to all
									students from any year
								</li>
								<li>
									<strong>Registration Fee:</strong>
									&#x20B9;150
								</li>
							</ul>
						</section>

						{/* Call-to-Action Buttons */}
						<section className="py-12 text-center">
							<h2 className="text-3xl font-bold mb-6">
								Get Started
							</h2>
							<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
								<button
									onClick={() => setActiveTab('Registration')}
									className="bg-[#39FF14] text-black px-6 py-3 rounded-full font-bold text-lg sm:text-xl transition-transform transform hover:scale-105">
									Register Now
								</button>
								<button
									onClick={() => setActiveTab('Dashboard')}
									className="bg-[#39FF14] text-black px-6 py-3 rounded-full font-bold text-lg sm:text-xl transition-transform transform hover:scale-105">
									Go to Dashboard
								</button>
								<button
									onClick={() => setActiveTab('Resources')}
									className="bg-[#39FF14] text-black px-6 py-3 rounded-full font-bold text-lg sm:text-xl transition-transform transform hover:scale-105">
									View Resources
								</button>
							</div>
						</section>

						{/* FAQs */}
						<section className="py-12">
							<h2 className="text-3xl font-bold mb-4 text-center">
								FAQs
							</h2>
							<div className="max-w-4xl mx-auto">
								<ul className="text-lg sm:text-xl list-none space-y-8">
									<li>
										<strong>
											Why is there a registration fee?
										</strong>
										<p>
											The fee helps ensure participants
											are committed. All collected funds
											will be redistributed among the
											winners.
										</p>
									</li>
									<li>
										<strong>How can I prepare?</strong>
										<p>
											Utilize the resources provided on
											our website to efficiently master
											OOPs, OS, DBMS, CN, and System
											Design.
										</p>
									</li>
									<li>
										<strong>
											Who sets the question paper?
										</strong>
										<p>
											Our alumni working at Google,
											Microsoft, and Salesforce have
											prepared the question paper for the
											hackathon.
										</p>
									</li>
									<li>
										<strong>Is the exam fair?</strong>
										<p>
											Yes, the exam is 100% fair. The
											question paper will be received from
											our alumni right at the time of the
											examination to ensure no prior
											access by anyone, including the
											organizers.
										</p>
									</li>
									<li>
										<strong>
											Will I receive a certificate?
										</strong>
										<p>
											Yes, all participants will receive
											digital certificates of
											participation.
										</p>
									</li>
									<li>
										<strong>Can anyone participate?</strong>
										<p>
											Yes, students from any year can
											participate in the hackathon.
										</p>
									</li>
									<li>
										<strong>
											In case you have any queries please
											contact:
										</strong>
										<p>+91 87574 89128, +91 80917 48041</p>
									</li>
								</ul>
							</div>
						</section>
					</div>
				);
			case 'Resources':
				return <Resources />;
			default:
				return null;
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
