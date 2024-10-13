import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
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

const Registration = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		username: '',
		rollNo: '',
		whatsapp: '',
	});

	const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
	const [paymentStatus, setPaymentStatus] = useState(null); // Tracks payment success or failure

	// Handle form input changes
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Load Razorpay script dynamically
	const loadRazorpayScript = () => {
		return new Promise(resolve => {
			const script = document.createElement('script');
			script.src = 'https://checkout.razorpay.com/v1/checkout.js';
			script.onload = () => resolve(true);
			script.onerror = () => resolve(false);
			document.body.appendChild(script);
		});
	};

	// Handle form submission and payment
	const handleSubmit = async e => {
		e.preventDefault();

		// Load Razorpay script
		const res = await loadRazorpayScript();

		if (!res) {
			alert(
				'Razorpay SDK failed to load. Check your internet connection.'
			);
			return;
		}

		// Proceed with payment
		setIsPaymentProcessing(true);

		// Razorpay payment options
		const options = {
			key: 'rzp_test_N0IOyRlbrFhbuA', // Replace with your Razorpay Key ID
			amount: 15000, // Amount in paise (50000 paise = 500 INR)
			currency: 'INR',
			name: 'Hackathon Registration',
			description: 'Hackathon Registration Fee',
			image: 'https://your-logo-url.com', // Optional: Add your logo
			handler: async function (response) {
				// Payment successful, show success message
				try {
					// Add registration data to Firebase
					await addDoc(collection(db, 'registrations'), formData);
					setPaymentStatus('success'); // Set status to success
				} catch (error) {
					console.error('Error adding document: ', error);
				}
				setIsPaymentProcessing(false);
			},
			prefill: {
				name: formData.name,
				email: formData.email,
			},
			theme: {
				color: '#39FF14',
			},
		};

		// Open Razorpay payment popup
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();

		paymentObject.on('payment.failed', function (response) {
			// Payment failed, show failure message
			setPaymentStatus('failure'); // Set status to failure
			setIsPaymentProcessing(false);
		});
	};

	// Full-screen message display based on payment status
	const FullScreenMessage = () => {
		return (
			<div className="fixed inset-0 bg-black flex items-center justify-center text-center text-[#39FF14]">
				{paymentStatus === 'success' ? (
					<div>
						<h1 className="text-4xl font-bold mb-4">
							Congratulations!
						</h1>
						<p className="text-2xl mb-4">
							Thank you, {formData.name} ({formData.username}),
							for registering!
						</p>
						<p className="text-xl mb-8">
							You have successfully registered for Hack Hub
							Hackathon.
						</p>
						<a
							href="https://chat.whatsapp.com/your-whatsapp-group-link"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl bg-[#39FF14] text-black px-6 py-3 rounded-md hover:bg-[#32CD32]">
							Join WhatsApp Group
						</a>
					</div>
				) : paymentStatus === 'failure' ? (
					<div>
						<h1 className="text-4xl font-bold mb-4">
							Payment Failed
						</h1>
						<p className="text-2xl mb-4">
							Unfortunately, the payment could not be processed.
						</p>
						<p>
							Please try again or contact support if the issue
							persists.
						</p>
					</div>
				) : null}
			</div>
		);
	};

	return (
		<section className="bg-black text-[#39FF14] py-16 px-8 min-h-screen flex items-center justify-center">
			<div className="max-w-lg w-full bg-[#222222] p-8 rounded-lg shadow-lg">
				<h1 className="text-4xl font-bold text-center mb-8">
					Register for the Hackathon
				</h1>

				{/* Registration Form */}
				<form onSubmit={handleSubmit}>
					{/* Name */}
					<div className="mb-6">
						<label
							htmlFor="name"
							className="block text-lg mb-2">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full px-4 py-2 bg-[#333333] text-white rounded-md"
							placeholder="Enter your full name"
							required
						/>
					</div>

					{/* Email */}
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-lg mb-2">
							Email Address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-4 py-2 bg-[#333333] text-white rounded-md"
							placeholder="Enter your email address"
							required
						/>
					</div>

					{/* Username */}
					<div className="mb-6">
						<label
							htmlFor="username"
							className="block text-lg mb-2">
							Username
						</label>
						<input
							type="text"
							name="username"
							id="username"
							value={formData.username}
							onChange={handleChange}
							className="w-full px-4 py-2 bg-[#333333] text-white rounded-md"
							placeholder="Enter your preferred username"
							required
						/>
					</div>

					{/* Roll No */}
					<div className="mb-6">
						<label
							htmlFor="rollNo"
							className="block text-lg mb-2">
							Roll No.
						</label>
						<input
							type="text"
							name="rollNo"
							id="rollNo"
							value={formData.rollNo}
							onChange={handleChange}
							className="w-full px-4 py-2 bg-[#333333] text-white rounded-md"
							placeholder="Enter your roll number"
							required
						/>
					</div>

					{/* WhatsApp Number */}
					<div className="mb-6">
						<label
							htmlFor="whatsapp"
							className="block text-lg mb-2">
							WhatsApp Number
						</label>
						<input
							type="tel"
							name="whatsapp"
							id="whatsapp"
							value={formData.whatsapp}
							onChange={handleChange}
							className="w-full px-4 py-2 bg-[#333333] text-white rounded-md"
							placeholder="Enter your WhatsApp number"
							required
						/>
					</div>

					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className={`w-full px-6 py-3 bg-[#39FF14] hover:bg-[#32CD32] text-black font-bold rounded-lg transition-colors ${
								isPaymentProcessing
									? 'opacity-50 cursor-not-allowed'
									: ''
							}`}
							disabled={isPaymentProcessing}>
							{isPaymentProcessing
								? 'Processing...'
								: 'Submit and Pay ₹150'}
						</button>
					</div>
				</form>
			</div>

			{/* Full-Screen Message after Payment */}
			{paymentStatus && <FullScreenMessage />}
		</section>
	);
};

export default Registration;
