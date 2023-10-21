import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Asif from "./Asif";
import Mahin from "./Mahin";
import Zubaer from "./Zubaer";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/asif" element={<Asif />} />
				<Route path="/mahin" element={<Mahin />} />
				<Route path="/zubaer" element={<Zubaer />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
