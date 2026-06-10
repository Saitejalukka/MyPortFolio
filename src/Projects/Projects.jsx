import React from "react";
import image4 from "@/assets/image-4.jpg";
import image5 from "@/assets/image-5.jpg";

function Projects() {
	return (
		<div className="bg-blue-50 flex flex-col gap-y-3.5 py-10 mt-5">
			<h1 className="text-center w-full text-3xl font-bold py-1 font-sans leading-1">
				Latest Projects
			</h1>
			<p className="font-light text-center mt-1">
				A Showcase of my recent work
			</p>
			<div className="w-full grid grid-cols-2 space-x-32 px-9 mt-4">
				<div className="bg-white w-[80%] py-8 shadow-sm rounded-xl  flex flex-col justify-center items-center gap-y-3">
					<img
						src={image4}
						alt="image-4"
						className=" rounded-xl"
						width={160}
						height={50}
					/>
					<p className="font-bold text-center">Cinematic Travel Film</p>
				</div>
				<div className="bg-white w-[80%] py-8 shadow-sm rounded-xl p-1 flex flex-col justify-center items-center gap-y-3">
					<img
						src={image5}
						alt="image-5"
						className=" rounded-xl"
						width={160}
						height={50}
					/>
					<p className="font-bold text-center">Music Video Cult</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;
