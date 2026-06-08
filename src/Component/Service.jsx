import React from "react";

function Service() {
	return (
		<div className=" bg-blue-50 flex flex-col gap-y-3.5 py-10">
			<h1 className="text-center w-full text-3xl font-bold py-5 font-sans">
				Services I Offer
			</h1>
			<div className="w-full grid grid-cols-3 space-x-32 px-9">
				<div className="bg-white w-[80%] py-8 shadow-sm rounded-xl  flex flex-col justify-center items-center gap-y-3">
					<img
						src="../src/assets/image-1.jpg"
						alt="image-1"
						className=" rounded-xl"
						width={160}
						height={50}
					/>
					<p className="font-bold text-xl">Video Editing</p>
					<p className="font-normal w-[80%] text-center text-sm text-gray-600">
						Cutting, trimming and editing to create polished videos
					</p>
				</div>
				<div className="bg-white w-[80%] py-8 shadow-sm rounded-xl p-1 flex flex-col justify-center items-center gap-y-3">
					<img
						src="../src/assets/image-2.jpg"
						alt="image-1"
						className=" rounded-xl"
						width={160}
						height={50}
					/>
					<p className="font-bold text-xl">Color Correction</p>
					<p className="font-normal w-[80%] text-center text-sm text-gray-600">
						Enhancing colours and adjusting the visuals.
					</p>
				</div>
				<div className="bg-white w-[80%] py-8 shadow-sm rounded-xl p-1 flex flex-col justify-center items-center gap-y-3">
					<img
						src="../src/assets/image-3.jpg"
						alt="image-1"
						className=" rounded-xl"
						width={160}
						height={50}
					/>
					<p className="font-bold text-xl">Motion Graphics</p>
					<p className="font-normal w-[80%] text-center text-sm text-gray-600">
						Custom animations,titles and Effects
					</p>
				</div>
			</div>
		</div>
	);
}

export default Service;
