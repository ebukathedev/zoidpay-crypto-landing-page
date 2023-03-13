import React from "react";
import FirstMenuLink from "./FirstMenuLink";
import SecondMenuLink from "./SecondMenuLink";
import CTAButton from "./CTAButton";
import SubCTAButton from "./SubCTAButton";

const styles =
	"absolute bg-white top-14 right-0 w-3/4 p-5 shadow-lg rounded-lg max-w-xs duration-700 ease-in-out origin-top-right lg:hidden";

const MobileMenu = ({ isOpen }) => {
	return (
		<div
			className={`${styles} ${
				isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
			}`}
		>
			<div>
				<nav className="flex flex-col space-y-1 pb-3 border-b border-line-secondary md:hidden">
					<FirstMenuLink title="Personal" />
					<FirstMenuLink title="Business" />
				</nav>
				<nav className="flex flex-col py-3 space-y-1 border-b border-line-secondary md:pt-0">
					<SecondMenuLink title="Ecosystem" />
					<SecondMenuLink title="Token" />
					<SecondMenuLink title="Roadmap" />
					<SecondMenuLink title="Get to know us" />
				</nav>
				<nav className="pt-4 flex flex-col space-y-4">
					<CTAButton title="Migrate to ESDT" styles="px-4" />
					<SubCTAButton title="Connect" />
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;
