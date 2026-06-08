import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profileImage.jpg";

function About() {
	const skills = [
		"Python",
		"Java",
		"C Programming",
		"Django",
		"HTML",
		"CSS",
		"JavaScript",
		"React.js",
		"Angular",
		"MySQL",
		"MongoDB",
	];

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			<nav className="flex justify-end p-6">
				<ul className="flex gap-8">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/skills">Skills</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>

			{/* About Section */}
			<div className="flex flex-col lg:flex-row justify-between items-center px-10 py-20 gap-12">
				<div>
					<h2 className="text-4xl font-bold mb-6">My Skills</h2>

					<ul className="space-y-4">
						{skills.map((skill) => (
							<li key={skill} className="text-lg">
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div>
					<img
						src={profileImage}
						alt="Sai Teja"
						className="w-[350px] lg:w-[500px] rounded-xl shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
