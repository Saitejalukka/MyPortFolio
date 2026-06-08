import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Component/Main";
import "./index.css";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Contact from "./Component/Contactinfo";

function App() {
	return (
		<div className="w-full max-w-full overflow-x-hidden bg-blue-50 ">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="About/" element={<About />} />
					<Route path="Skills/" element={<Skills />} />
					<Route path="Projects/" element={<Project />} />
					<Route path="Contact/" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
