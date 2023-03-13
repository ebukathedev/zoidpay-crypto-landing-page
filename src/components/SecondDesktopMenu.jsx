import React from "react";
import CTAButton from "./CTAButton";
import SecondMenuLink from "./SecondMenuLink";
import SubCTAButton from "./SubCTAButton";

const SecondDesktopMenu = () => {
	return (
		<nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-10">
			<SecondMenuLink title="Ecosystem" />
			<SecondMenuLink title="Token" />
			<SecondMenuLink title="Roadmap" />
			<SecondMenuLink title="Get to know us" />

			<nav className="flex items-center space-x-5 font-bold">
				<CTAButton title="Migrate to ESDT" styles="px-4 py-3" />
				<SubCTAButton title="Connect" />
			</nav>
		</nav>
	);
};

export default SecondDesktopMenu;
