import React from "react";
import { Link } from "react-router-dom";

function Skills() {
	return (
		<div className="min-h-screen bg-gray-900 text-white">
			{/* Navbar */}
			<nav className="flex justify-end p-6">
				<ul className="flex gap-8">
					<li className="hover:text-blue-400">
						<Link to="/">Home</Link>
					</li>

					<li className="hover:text-blue-400">
						<Link to="/about">About</Link>
					</li>

					<li className="hover:text-blue-400">
						<Link to="/skills">Skills</Link>
					</li>

					<li className="hover:text-blue-400">
						<Link to="/projects">Projects</Link>
					</li>

					<li className="hover:text-blue-400">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>

			{/* Skills Section */}
			<div className="max-w-4xl mx-auto p-10">
				<h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>

				<ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<li className="flex items-center gap-3">
						<img
							src="/images/python-svgrepo-com.svg"
							alt="Python"
							className="w-8 h-8"
						/>
						Python
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/java-svgrepo-com.svg"
							alt="Java"
							className="w-8 h-8"
						/>
						Java
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/icons8-c-programming.svg"
							alt="C Programming"
							className="w-8 h-8"
						/>
						C Programming
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/django-svgrepo-com.svg"
							alt="Django"
							className="w-8 h-8"
						/>
						Django
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/html-5-svgrepo-com.svg"
							alt="HTML"
							className="w-8 h-8"
						/>
						HTML
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/css-3-svgrepo-com.svg"
							alt="CSS"
							className="w-8 h-8"
						/>
						CSS
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/javascript-svgrepo-com.svg"
							alt="JavaScript"
							className="w-8 h-8"
						/>
						JavaScript
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/react-svgrepo-com.svg"
							alt="React"
							className="w-8 h-8"
						/>
						React.js
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/angular-svgrepo-com.svg"
							alt="Angular"
							className="w-8 h-8"
						/>
						Angular
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/mysql-logo-svgrepo-com.svg"
							alt="MySQL"
							className="w-8 h-8"
						/>
						MySQL
					</li>

					<li className="flex items-center gap-3">
						<img
							src="/images/mongodb-svgrepo-com.svg"
							alt="MongoDB"
							className="w-8 h-8"
						/>
						MongoDB
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;
