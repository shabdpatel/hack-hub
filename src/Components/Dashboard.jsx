import React, { useState, useEffect } from 'react';
import { FaUsers, FaTrophy, FaUserCircle } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
	type: 'service_account',
	projectId: 'sr-data-comparision',
	private_key_id: '5af68d1de931dc19d142217af0196e5108227076',
	private_key:
		'-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCiAlUiPyFTjRIo\nAU41abx3K1pPM5Dn6ydiP6k5Ra1CggvZUPO3kLVBYLS7S/DrYGdLqPp6FB5aiHqH\n/AygZ4Dr5ahMDBPwwLbjLzzfjMMY5o1lKn1FbPWPHnqAZMsCUldqjypJO7sVyW+M\nLrpdb398V5T/clx5B4Toha977KCPFCVsm6LGFCgZj/qsWWMrNTH5hFmi2GNkh4MY\ncGxROs2qwyHcdZeq2PJJNuJQ1bgNK5/iJxzAgzGKcMYOyS1U/1S38MDHLubDPLdk\nnH22MCKNIpWiJ6UT8yZW8dG+8tO5X1jhO9pMv8Ykk+TB2RdZ0KKD3kMP3U0cBiGm\nnh2LxP6nAgMBAAECggEAGRMyWRAbWOKzRjTZhYPdkzZHDo4lJfgsCtVenEowBGS7\nb8HLTwSbQUi2AG1DFzM/GaNITV/SyOFp0aVN0P/kIN7VWxvddDxnsicMDW+sfKym\ngtt+MyInqaSmgjvXff7/n7MT8OzJSph4ZuKOnsqUmUq2+YiaTnM++3xBinU37p0J\nC5B8tvSZtGnjeB7XbRuAtgx2itfXO10pSQUEUdluAEnrHpZkGBwb7tLyuDhl+bbM\nJVWU1gAoa6/lKnfkYQDHVoG+Kyu7oSckatX3humNrYMAVnb3L9kdurkZFj7YUYlV\ngbQnv/E63XKlUDpWKrsWxf78/JTKRVA0ocDTkkDetQKBgQDUL7YjSVSkuyf2duku\nqi4Gj00aOCl0WEipHFjaXqq1EazEwrrZh/Z1EL5ZSbIRNumVkoYK/p7bnJEcZwHc\n1Zc8DASqo/BkWVGHU8J5Oa7nBLfLxTrbQefgBqDVK+e2Iqen57J84mOje7r1pg4V\nK8FXuV6YsF6wXrKVTJKv+7XNQwKBgQDDdjkxNq4OoXxzDZewQlBTd09Sg5iVcsbk\nbbr9OWynP9X1gvvNIKVjI5OwqN96t+cPuKNZXiB99ddDIU9WbmRw3uAYFUpGeg0r\nMgrUug7Qhdae+N5CmdGxTQ1qx4O8+zX0gp/aXZPT2ZTV8xsXQHbbAq8jaXTfyzum\nPy4VfkfgzQKBgDiP11+kppmbAlYi8Jnt54L8JDN/ER3ggs4BrnXXkm3eHk39Es31\n/m7KXdNzX7JTDwU+H9lCcppcLBqEIuz5Su1Izt2mAejeHmuSml6yT7tpeI0rMDtO\nYD9JxQnOQGA+8K5Dh0LfHmxwCTB+aXafSVTXJy5QpY0iUTyXQusCkD39AoGAU2ng\nfmAXZ6cCtRbX5SBnpzcDYvNF6oFQ36r0YZxgAf/8DwoW6zNDYUuNe5aVyIky0kK5\ncyn4M8j2VG+iq//wXTq/54cua2UquYRhmubL67EyJiWOtF1wX3nCgA8k6UFLhU05\narcEnyP7oFJe/U1Fa7F5jGM0vUy95/SOdh2uDwECgYBpXVVkFi/09haFXH554jzQ\nAsss1o9bmJXIGZejUlPqvn5+TsDLu0uu6i4YUZhf24H9rxXRkQ4vw9zqUvjpJst9\nT1AuwRr2NtVtElWKz2GFIYJQmS3WHaCs+Lde8Wm1coZECVXo5VtbQwkDRtRjj+3o\nYX65lfSQTvCeW3c221jV+A==\n-----END PRIVATE KEY-----\n',
	client_email:
		'firebase-adminsdk-hvic2@sr-data-comparision.iam.gserviceaccount.com',
	client_id: '109515505632058577608',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hvic2%40sr-data-comparision.iam.gserviceaccount.com',
	universe_domain: 'googleapis.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Dashboard = () => {
	const [registrations, setRegistrations] = useState([]);
	const [loading, setLoading] = useState(true);
	const participantsTarget = registrations.length; // Actual number of registrations
	const prizePoolTarget = 150 * participantsTarget; // Calculate prize pool dynamically

	const targetDate = new Date('November 4, 2024 14:00:00').getTime();
	const [countdown, setCountdown] = useState({ days: 0, hours: 0 });

	// Fetch participants data from Firebase
	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(
				collection(db, 'registrations')
			);
			const data = querySnapshot.docs.map(doc => doc.data());
			setRegistrations(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	const [participants, setParticipants] = useState(0);
	const [prizePool, setPrizePool] = useState(0);

	// Animate numbers to their final value
	useEffect(() => {
		const incrementParticipants = () => {
			setParticipants(prev =>
				prev < participantsTarget ? prev + 1 : participantsTarget
			);
		};

		const incrementPrizePool = () => {
			setPrizePool(prev =>
				prev < prizePoolTarget ? prev + 150 : prizePoolTarget
			);
		};

		const participantsInterval = setInterval(incrementParticipants, 100);
		const prizePoolInterval = setInterval(incrementPrizePool, 100);

		return () => {
			clearInterval(participantsInterval);
			clearInterval(prizePoolInterval);
		};
	}, [participantsTarget, prizePoolTarget]);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			const now = new Date().getTime();
			const timeLeft = targetDate - now;

			const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);

			setCountdown({ days, hours });

			if (timeLeft < 0) {
				clearInterval(countdownInterval);
				setCountdown({ days: 0, hours: 0 });
			}
		}, 1000);

		return () => clearInterval(countdownInterval);
	}, [targetDate]);

	// Skeleton loader component
	const SkeletonLoader = () => (
		<div className="bg-[#222222] p-8 rounded-lg shadow-lg text-center animate-pulse">
			<div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4"></div>
			<div className="h-6 bg-gray-700 rounded-md w-32 mx-auto mb-4"></div>
			<div className="h-4 bg-gray-600 rounded-md w-24 mx-auto"></div>
		</div>
	);

	// Calculate prize distribution
	const firstPrize = (prizePool * 0.5).toLocaleString('en-IN');
	const secondPrize = (prizePool * 0.3).toLocaleString('en-IN');
	const thirdPrize = (prizePool * 0.2).toLocaleString('en-IN');

	return (
		<section className="bg-black text-[#39FF14] py-16 px-8">
			{/* Section Title */}
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold">Hackathon Dashboard</h1>
			</div>

			{/* Countdown Timer */}
			<div className="text-center mb-8">
				<h2 className="text-2xl md:text-3xl font-bold">
					Hackathon Date: 4th November 2024, 2 PM
				</h2>
				<div className="text-4xl md:text-5xl font-bold mt-4">
					{countdown.days} days {countdown.hours} hours left
				</div>
			</div>

			{/* Dashboard Metrics */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				{loading ? (
					<>
						<SkeletonLoader />
						<SkeletonLoader />
					</>
				) : (
					<>
						{/* Registered Participants */}
						<div className="bg-[#222222] p-8 rounded-lg shadow-lg text-center">
							<FaUsers
								size={50}
								className="mx-auto mb-4"
							/>
							<h2 className="text-3xl font-bold">
								{participants}
							</h2>
							<p className="text-xl">Registered Participants</p>
						</div>

						{/* Prize Pool */}
						<div className="bg-[#222222] p-8 rounded-lg shadow-lg text-center">
							<FaTrophy
								size={50}
								className="mx-auto mb-4"
							/>
							<h2 className="text-3xl font-bold">
								₹{prizePool.toLocaleString('en-IN')}
							</h2>
							<p className="text-xl">Prize Pool</p>
							<p className="text-lg mt-2">
								{participants} participants = ₹
								{prizePool.toLocaleString('en-IN')}
							</p>
						</div>
					</>
				)}
			</div>

			{/* Prize Breakdown */}
			<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
				{loading ? (
					<SkeletonLoader />
				) : (
					<>
						{/* First Prize */}
						<div className="bg-[#222222] p-8 rounded-lg shadow-lg text-center">
							<h3 className="text-2xl font-bold">1st Prize</h3>
							<p className="text-xl">₹{firstPrize} (50%)</p>
						</div>

						{/* Second Prize */}
						<div className="bg-[#222222] p-8 rounded-lg shadow-lg text-center">
							<h3 className="text-2xl font-bold">2nd Prize</h3>
							<p className="text-xl">₹{secondPrize} (30%)</p>
						</div>

						{/* Third Prize */}
						<div className="bg-[#222222] p-8 rounded-lg shadow-lg text-center">
							<h3 className="text-2xl font-bold">3rd Prize</h3>
							<p className="text-xl">₹{thirdPrize} (20%)</p>
						</div>
					</>
				)}
			</div>

			{/* Participants List */}
			<div className="mt-12 bg-[#222222] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold mb-4 text-center">
					Participants List
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{loading
						? Array(6)
							.fill()
							.map((_, index) => (
								<SkeletonLoader key={index} />
							))
						: registrations.map((registration, index) => (
							<div
								key={index}
								className="bg-[#333333] p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
								<FaUserCircle
									size={40}
									className="mx-auto mb-4 text-[#39FF14]"
								/>
								<h3 className="text-xl font-bold">
									{registration.username.length > 12
										? registration.username.substring(
											0,
											12
										) + '...'
										: registration.username}
								</h3>
								<p className="text-sm text-gray-400">
									Participant #{index + 1}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
