import React from "react";
import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import ProgramSection from "./containers/ProgramSection";
import BenefitSection from "./containers/BenefitSection";

const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<ProgramSection />
				<BenefitSection />
			</main>
		</>
	);
};

export default App;
