import React from "react";
import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import ProgramSection from "./containers/ProgramSection";

const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<ProgramSection />
			</main>
		</>
	);
};

export default App;
