// app/hello/page.tsx

"use client";

import { motion } from "framer-motion";

export default function HelloWorldPage() {
	return (
		<div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white">
			<motion.h1
				initial={{ opacity: 0, y: -100 }}
				animate={{
					opacity: 1,
					y: 0,
					scale: [1, 1.2, 1],
					textShadow: "0px 0px 10px rgba(255, 255, 255, 1)",
				}}
				transition={{
					delay: 0.5,
					duration: 1,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "mirror",
				}}
				className="text-7xl font-extrabold tracking-wide mb-8 text-center">
				Hello Wolrd
			</motion.h1>

			<div className="absolute inset-0">
				{[...Array(50)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute bg-white rounded-full opacity-30"
						style={{
							width: `${Math.random() * 10 + 5}px`,
							height: `${Math.random() * 10 + 5}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -50, 0],
							x: [0, 50, 0],
							scale: [1, 1.5, 1],
						}}
						transition={{
							duration: Math.random() * 4 + 2,
							repeat: Infinity,
							ease: "easeInOut",
							delay: Math.random(),
						}}
					/>
				))}
			</div>

			<div className="absolute inset-0">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute bg-yellow-300 rounded-full"
						style={{
							width: `${Math.random() * 8 + 3}px`,
							height: `${Math.random() * 8 + 3}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -70, 0],
							x: [0, -70, 0],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: Math.random() * 3 + 1.5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: Math.random(),
						}}
					/>
				))}
			</div>
		</div>
	);
}
