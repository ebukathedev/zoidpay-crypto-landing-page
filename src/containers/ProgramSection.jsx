import React from "react";
import mapIllustration from "../assets/images/png/map-illustration.png";

const ProgramSection = () => {
	return (
		<section className="py-20 px-4 bg-gradient-bg lg:pt-28 md:pb-0 overflow-hidden md:space-y-12 lg:space-y-16">
			<div className="container mx-auto text-white text-center flex flex-col space-y-4 px-2 lg:space-y-7">
				<h3 className="uppercase font-extrabold text-sm lg:text-lg">
					About the
				</h3>
				<h2 className="font-bold text-2xl lg:text-4xl xl:text-5xl">
					Ambassador Program
				</h2>
				<p className="font-medium py-3 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-left sm:text-center md:text-lg lg:text-xl lg:leading-[40px] xl:max-w-5xl">
					ZoidPay is fast becoming one of the most sought after
					projects when it comes to offering crypto liquidity
					solutions. We are striving to be the go-to Open Architecture
					for Building the Next Generation of Web 3.0 Financial
					Services. And, we need your support in this path.
				</p>
			</div>
			<div className="hidden md:block md:translate-y-5 lg:translate-y-10">
				<img src={mapIllustration} alt="map illustration" />
			</div>
		</section>
	);
};

export default ProgramSection;
