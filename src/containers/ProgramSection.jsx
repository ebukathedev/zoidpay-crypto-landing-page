import React from "react";
import mapIllustration from "../assets/images/png/map-illustration.png";

const ProgramSection = () => {
	return (
		<section className="relative py-20 px-4 bg-gradient-bg">
			<div className="container mx-auto text-white text-center flex flex-col space-y-4 px-4">
				<h3 className="uppercase font-extrabold text-sm lg:text-lg">About the</h3>
				<h2 className="font-bold text-2xl lg:text-4xl xl:text-5xl">Ambassador Program</h2>
				<p className="font-medium py-3 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-left sm:text-center md:text-xl">
					ZoidPay is fast becoming one of the most sought after
					projects when it comes to offering crypto liquidity
					solutions. We are striving to be the go-to Open Architecture
					for Building the Next Generation of Web 3.0 Financial
					Services. And, we need your support in this path.
				</p>
			</div>
			{/* <div className="absolute inset-0 bg-gradient-bg">
				<img src={mapIllustration} alt="map illustration" />
			</div> */}
		</section>
	);
};

export default ProgramSection;
