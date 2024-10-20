import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { FaDownload } from "react-icons/fa";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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

// QR Code Popup Component
const QRCodePopup = ({ closePopup, onRegister, transactionId, setTransactionId }) => {
	const handleDownloadQRCode = () => {
		const qrCodeLink = document.createElement('a');
		qrCodeLink.href = '/qr.png'; // Path to your QR code image
		qrCodeLink.download = 'GooglePay_QR_Code.jpeg';
		qrCodeLink.click();
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
			<div className="bg-gray-800 p-6 rounded-lg text-center">
				<h2 className="text-2xl font-semibold mb-2 text-[#39FF14]">Complete Payment via Google Pay</h2>
				<img
					src="/qr.png"
					alt="Google Pay QR Code"
					className="w-60 h-72 mx-auto mb-2"
				/>
				<button
					onClick={handleDownloadQRCode}
					className="mt-2 bg-[#39FF14] text-black px-4 py-2 mr-2 rounded-md"
				>
					<FaDownload className="inline mr-2" />QR Code
				</button>
				<p className="text-lg mb-2 text-[#39FF14]"><span className="font-semibold">Enter your transaction ID to verify your payment</span></p>
				<input
					type="text"
					placeholder="Enter Transaction ID"
					value={transactionId}
					onChange={(e) => setTransactionId(e.target.value)}
					className="w-full p-3 bg-[#333333] text-[#39FF14] border-none rounded-md mb-4"
					required
				/>
				<button
					onClick={onRegister}
					className="mt-2 bg-[#39FF14] text-black px-4 py-2 mr-2 rounded-md"
				>
					Register
				</button>
				<button
					onClick={closePopup}
					className="mt-2 bg-gray-500 text-white px-4 py-2 ml-2 rounded-md"
				>
					Close
				</button>
			</div>
		</div>
	);
};

// Success Popup Component
const SuccessPopup = ({ closePopup }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
			<div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg text-center max-w-lg w-full mx-4">
				<p className="text-lg sm:text-xl md:text-2xl mb-4 text-[#39FF14]">
					Congratulations! Your registration has been successfully received.<br />We will verify your details, and once confirmed, your participation will be proudly displayed on the dashboard.
				</p>
				<button
					onClick={closePopup}
					className="mt-2 bg-[#39FF14] text-black px-6 py-2 rounded-md hover:bg-[#32e012] transition-colors duration-200"
				>
					Close
				</button>
			</div>
		</div>
	);
};
const Registration = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		username: '',
		rollNo: '',
		whatsapp: '',
		transactionId: '',
	});

	const [showPopup, setShowPopup] = useState(false);
	const [transactionId, setTransactionId] = useState('');
	const [showSuccessPopup, setShowSuccessPopup] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handlePayClick = () => {
		const { name, email, username, rollNo, whatsapp } = formData;
		if (!name || !email || !username || !rollNo || !whatsapp) {
			alert('Please fill in all the required fields.');
			return;
		}

		setShowPopup(true);
	};

	const handleRegister = async () => {
		if (!transactionId) {
			alert('Please enter your Transaction ID');
			return;
		}

		try {
			await addDoc(collection(db, 'registrations'), {
				...formData,
				transactionId,
			});
			setShowPopup(false);
			setShowSuccessPopup(true);
			resetForm();
		} catch (error) {
			console.error('Error adding document: ', error);
			alert('Failed to register, please try again.');
		}
	};

	const resetForm = () => {
		setFormData({
			name: '',
			email: '',
			username: '',
			rollNo: '',
			whatsapp: '',
			transactionId: '',
		});
		setTransactionId('');
	};

	return (
		<section className="bg-black text-[#39FF14] py-16 px-8 min-h-screen flex items-center justify-center">
			<div className="max-w-lg w-full bg-[#222222] p-8 rounded-lg shadow-lg">
				<h1 className="text-4xl font-bold text-center mb-8">
					Register for the Hackathon
				</h1>

				<form onSubmit={(e) => e.preventDefault()}>
					<div className="mb-6">
						<label htmlFor="name" className="block text-lg mb-2">
							Full Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-3 bg-[#333333] text-[#39FF14] border-none rounded-md"
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="email" className="block text-lg mb-2">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-3 bg-[#333333] text-[#39FF14] border-none rounded-md"
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="username" className="block text-lg mb-2">
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={formData.username}
							onChange={handleChange}
							className="w-full p-3 bg-[#333333] text-[#39FF14] border-none rounded-md"
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="rollNo" className="block text-lg mb-2">
							Roll Number
						</label>
						<input
							type="text"
							id="rollNo"
							name="rollNo"
							value={formData.rollNo}
							onChange={handleChange}
							className="w-full p-3 bg-[#333333] text-[#39FF14] border-none rounded-md"
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="whatsapp" className="block text-lg mb-2">
							WhatsApp Number
						</label>
						<input
							type="text"
							id="whatsapp"
							name="whatsapp"
							value={formData.whatsapp}
							onChange={handleChange}
							className="w-full p-3 bg-[#333333] text-[#39FF14] border-none rounded-md"
							required
						/>
					</div>

					<button
						type="button"
						onClick={handlePayClick}
						className="w-full p-3 bg-[#39FF14] text-black font-semibold rounded-md"
					>
						Pay ₹150 to Register
					</button>
				</form>
			</div>

			{showPopup && (
				<QRCodePopup
					closePopup={() => setShowPopup(false)}
					onRegister={handleRegister}
					transactionId={transactionId}
					setTransactionId={setTransactionId}
				/>
			)}

			{showSuccessPopup && (
				<SuccessPopup
					closePopup={() => setShowSuccessPopup(false)}
				/>
			)}
		</section>
	);
};

export default Registration;
