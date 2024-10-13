import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaArrowRight } from 'react-icons/fa'; // React Icons for the button

const Landing = ({ onGetStarted }) => {
	return (
		<div className="h-screen w-screen bg-black flex items-center justify-center p-4 md:p-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-[#39FF14] mx-auto leading-snug">
					Programming without knowing
					<br />
					<motion.span
						animate={{
							textShadow: [
								'0 0 10px #39FF14',
								'0 0 20px #32CD32',
								'0 0 10px #39FF14',
							],
							opacity: [1, 0.8, 1],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: 'loop',
						}}
						className="block bg-gradient-to-r from-[#39FF14] to-[#32CD32] bg-clip-text text-transparent">
						Computer fundamentals
					</motion.span>
					is like driving blindfolded—you’ll be fine until the first
					turn, then it’s
					<br />
					<motion.span
						initial={{ scale: 1 }}
						animate={{
							scale: [1, 1.1, 1],
							textShadow: '0 0 10px #FF0000',
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: 'mirror',
						}}
						className="block bg-gradient-to-r from-[#FF0000] to-[#FF4500] bg-clip-text text-transparent">
						game over
					</motion.span>
					.
				</h1>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="mt-8 px-6 py-3 bg-[#39FF14] hover:bg-[#32CD32] text-black font-bold rounded-lg flex items-center mx-auto shadow-lg shadow-[#39FF14]"
					onClick={onGetStarted}>
					Get Started <FaArrowRight className="ml-2" />
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Landing;
