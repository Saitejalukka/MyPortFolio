import React, { useState } from "react";
import bgImage from "../assets/gettyimages-161737540-640x640.jpg";
import Service from "./Service";
import Projects from "../Projects/Projects";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./Contactinfo";

function Main() {
	const [getaquote, setGetaquote] = useState(false);
	const navigate = useNavigate();
	return (
		<div
			className="bg-cover bg-center h-screen w-full bg-no-repeat pb-10"
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
		>
			<div>
				<nav className=" w-full grid grid-cols-5 p-4 px-6">
					<h1 className=" text-white text-2xl col-span-2">Sai Teja</h1>
					<div className="col-span-2 w-full space-x-1 flex flex-row gap-x-10">
						<ul className="flex gap-8 text-white mt-1 w-full justify-end">
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
							<li
								role="button"
								onClick={() => navigate("/contact")}
								className="cursor-pointer pl-10"
							>
								<button className="px-3 py-1 rounded-2  rounded-1g text-white bg-white/5 hover:bg-white/10 transition outline-2 w-fit">
									Get a Quote
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<div className="flex flex-col justify-center items-center text-center h-full  text-white">
				<h1 className="text-6xl font-bold">
					Professional<br></br> Video Editing Services
				</h1>

				<p className="text-xl mt-4">
					Transforming Your Vision into Stunning Videos
				</p>

				<button
					className="mt-6 px-6 py-3 bg-blue-600 rounded-lg"
					onClick={() => navigate("/projects")}
				>
					View My Work
				</button>
			</div>
			<div className="text-center">
				<Service />
			</div>
			<div className="w-full flex justify-center mt-12">
				<div className="h-px w-3/4 bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
			</div>
			<div className="text-center">
				<Projects />
			</div>
			<div className="flex justify-center pb-6!">
				<button className="px-4 py-3 bg-black text-white rounded-md border border-black transition-all duration-300 hover:bg-transparent hover:text-black hover:border-black hover:scale-105 cursor-pointer">
					See More Projects
				</button>
			</div>
		</div>
	);
}

export default Main;
