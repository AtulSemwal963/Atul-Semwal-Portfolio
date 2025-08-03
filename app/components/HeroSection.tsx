'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Atul Semwal</h1>
						<p className="text-gray-400 mb-2">Computer Science Engineering Student</p>
						<p className="text-green-500">$ skills</p>
						
						{/* Languages */}
						<div className="mt-4 mb-2">
							<p className="text-blue-400 text-sm mb-2">Languages:</p>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Java</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">C/C++</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">JavaScript</span>
							</div>
						</div>

						{/* Web Development */}
						<div className="mt-4 mb-2">
							<p className="text-blue-400 text-sm mb-2">Web Development:</p>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">MERN Stack</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">HTML/CSS</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Tailwind CSS</span>
							</div>
						</div>

						{/* Mobile Development */}
						<div className="mt-4 mb-2">
							<p className="text-blue-400 text-sm mb-2">Mobile:</p>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">React Native</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Expo</span>
							</div>
						</div>

						{/* Cloud & DevOps */}
						<div className="mt-4 mb-2">
							<p className="text-blue-400 text-sm mb-2">Cloud/DevOps:</p>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">AWS</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">GCP</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Vercel</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Render</span>
							</div>
						</div>

						{/* Tools & Technologies */}
						<div className="mt-4 mb-2">
							<p className="text-blue-400 text-sm mb-2">Tools:</p>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">VS Code</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Figma</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Git</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">GitHub</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Postman</span>
							</div>
						</div>

						{/* AI Tools */}
						<div className="mt-4 mb-2">
							<p className="text-blue-400 text-sm mb-2">AI Tools:</p>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">OpenAI</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Google AI Studio</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">HuggingFace</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Kaggle</span>
							</div>
						</div>

						{/* Scripting & Others */}
						<div className="mt-4 mb-2">
							<p className="text-blue-400 text-sm mb-2">Others:</p>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Linux</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Bash</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">PowerShell</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Pivotal Tracker</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
