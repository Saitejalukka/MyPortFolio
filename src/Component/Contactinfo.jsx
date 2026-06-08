import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


function Contact(){
	const form=useRef();
	const sendemail=(e)=>{
		e.preventDefault();
		emailjs
			.sendForm(
				"service_m61046g",
				"__ejs-test-mail-service__",
				form.current,
				"TxHQ16MsozDE9nM0B",
			)
			.then(
				(result) => {
					alert("Message Sent Successfully!");
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
  };
    return (
			<div className="flex flex-col items-center min-h-screen py-12 bg-gray-100">
				<h2 className="text-4xl font-bold mb-8">Contact Details</h2>

				<form className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
					<div className="mb-4">
						<label htmlFor="na" className="block text-lg font-medium mb-2">
							Enter Name:
						</label>

						<input
							type="text"
							id="na"
							placeholder="Enter Name"
							className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="em" className="block text-lg font-medium mb-2">
							Enter Email ID:
						</label>

						<input
							type="email"
							id="em"
							placeholder="Enter Email ID"
							className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="msg" className="block text-lg font-medium mb-2">
							Enter Message:
						</label>

						<textarea
							id="msg"
							rows={5}
							placeholder="Enter Message"
							className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
						/>
					</div>

					<div className="flex justify-center">
						<button
							type="submit"
							className="px-6 py-3 bg-black text-white rounded-md border-2 border-black hover:bg-white hover:text-black transition duration-300"
						>
							Get In Touch
						</button>
					</div>
				</form>

				{/* Social Links */}
				<div className="mt-8 flex gap-8">
					<div className="flex flex-col items-center">
						<a
							href="https://www.linkedin.com/in/lukka-sai-teja-28076b277"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="src/assets/Linkedin.png"
								alt="LinkedIn"
								className="w-10 h-10 hover:scale-110 transition duration-300"
							/>
						</a>
						<p className="mt-2 font-medium">LinkedIn</p>
					</div>
				</div>
			</div>
		);
}

export default Contact;