'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Projects & Experience
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Wellness Wizard',
							description: 'AI-powered health and symptom analysis app with real-time health analysis and suggestions',
							details: [
								'Integrated Gemini API for real-time health analysis and suggestions',
								'Implemented secure login flow with JWT authentication and OAuth',
								'Built with React Native, Node.js, MongoDB, and GCP',
								'Designed user-friendly interface for health monitoring',
							],
							tech: ['React Native', 'Node.js', 'MongoDB', 'GCP', 'JWT', 'Gemini API'],
						},
						{
							title: 'Bits\'nBites',
							description: 'Mess and canteen reservation app with real-time availability tracking',
							details: [
								'Implemented real-time availability tracking using React hooks',
								'Built reservation system for mess and canteen services',
								'Developed with React Native, Node.js, MongoDB, and GCP',
								'Integrated JWT authentication for secure user access',
							],
							tech: ['React Native', 'Node.js', 'MongoDB', 'GCP', 'JWT', 'React Hooks'],
						},
						{
							title: 'Syllabai',
							description: 'AI-powered educator SaaS for lesson planning and educational content generation',
							details: [
								'Auto-generates quizzes, flashcards, and lesson plans',
								'Built with React, ExpressJS, NodeJS, and Gemini API',
								'Deployed on GCP for scalable educational solutions',
								'Designed for educators to streamline lesson planning',
							],
							tech: ['React', 'ExpressJS', 'NodeJS', 'Gemini API', 'GCP'],
						},
						{
							title: 'Self-hosted AI Chatbot',
							description: 'Private LLM assistant with containerized deployment and custom chat UI',
							details: [
								'Deployed local AI using containerized stack',
								'Designed custom chat UI with HTML and CSS',
								'Built with Python, FastAPI, NodeJS, HTML, and CSS',
								'Implemented private AI solution for secure conversations',
							],
							tech: ['Python', 'FastAPI', 'NodeJS', 'HTML', 'CSS', 'Docker'],
						},
						{
							title: 'nuffScrollin',
							description: 'Chrome extension to reduce digital overuse and promote healthy browsing habits',
							details: [
								'Applied content-script injections for browser integration',
								'Implemented storage APIs for persistence across sessions',
								'Built with HTML, CSS, and JavaScript',
								'Designed to help users manage screen time effectively',
							],
							tech: ['HTML', 'CSS', 'JavaScript', 'Chrome Extension API'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Features:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
