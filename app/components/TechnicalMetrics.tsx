'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Experience & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Education */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Education</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Chitkara University, Rajpura</h4>
								<p className="text-gray-400 mt-2">Bachelor of Engineering in Computer Science and Engineering</p>
								<p className="text-sm text-gray-500 mt-1">July 2022 – July 2026</p>
								<ul className="mt-3 space-y-1 text-sm text-gray-400">
									<li>• Data Structures and Algorithms Analysis</li>
									<li>• Machine Learning</li>
									<li>• Information and Data Security</li>
									<li>• Network Security</li>
									<li>• Software Methodology</li>
									<li>• Database Management</li>
									<li>• Computer Architecture</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Vivek High School, Chandigarh</h4>
								<p className="text-gray-400 mt-2">High School Certificate</p>
							</motion.div>
						</div>
					</div>

					{/* Experience */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Experience</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">webMobi (Remote)</h4>
								<p className="text-gray-400 mt-1">React Native Intern</p>
								<p className="text-sm text-gray-500 mt-1">April 2021 – April 2022</p>
								<ul className="mt-3 space-y-1 text-sm text-gray-400">
									<li>• Developed and optimized Android app features using RESTful APIs and GCP</li>
									<li>• Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Marpu Foundation (Remote)</h4>
								<p className="text-gray-400 mt-1">Content Writing Intern</p>
								<p className="text-sm text-gray-500 mt-1">Feb 2024 – Mar 2024</p>
								<ul className="mt-3 space-y-1 text-sm text-gray-400">
									<li>• Authored SEO-optimized articles, promoting the organization's social initiatives on Medium and Quora</li>
									<li>• Enhanced online visibility via targeted keyword content strategies</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Technical Skills */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Technical Skills</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Development Stack</h4>
								<ul className="mt-3 space-y-1 text-sm text-gray-400">
									<li>• Languages: Java, C/C++, JavaScript</li>
									<li>• Web Development: MERN Stack, HTML/CSS, Tailwind CSS</li>
									<li>• Mobile: React Native, Expo</li>
									<li>• Scripting: Linux, Bash, PowerShell</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Tools & Technologies</h4>
								<ul className="mt-3 space-y-1 text-sm text-gray-400">
									<li>• Cloud/DevOps: AWS, GCP, Vercel, Render</li>
									<li>• Tools: VS Code, Figma, Git, GitHub, Postman</li>
									<li>• Project Management: Pivotal Tracker</li>
									<li>• AI Tools: OpenAI, Google AI Studio, HuggingFace, Kaggle</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Achievements */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Achievements</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Innovation & Recognition</h4>
								<ul className="mt-3 space-y-1 text-sm text-gray-400">
									<li>• Patent Pending: Ergonomic Compost Maker</li>
									<li>• Finalist: Anveshan 2023–24 (National Hackathon)</li>
									<li>• Finalist: LSDC, LBSIM's Debating Competition</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
