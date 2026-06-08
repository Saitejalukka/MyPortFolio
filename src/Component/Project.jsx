import React from "react";
import Projects from "./projects";
import { Link } from "react-router-dom";

function Project(){
    return (
			<div>
				<div className="min-h-screen bg-white text-black text-bold">
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

					<Projects />
				</div>
			</div>
		);
}

export default Project;