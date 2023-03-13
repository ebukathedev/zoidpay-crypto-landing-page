import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg";
import FIrstDesktopMenu from "../components/FirstDesktopMenu";
import SecondDesktopMenu from "../components/SecondDesktopMenu";
import HamburgerButton from "../components/HamburgerButton";
import oval from "../assets/images/svg/oval.svg";
import MobileMenu from "../components/MobileMenu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => setIsOpen(!isOpen);

	return (
		<header className="sticky py-5 px-4 text-txt-secondary-800 lg:py-7 xl:px-8">
			<div className="relative container mx-auto flex items-center justify-between font-semibold">
				<FIrstDesktopMenu />
				<HamburgerButton isOpen={isOpen} onClick={handleClick} />
				<SecondDesktopMenu />
				<MobileMenu isOpen={isOpen} />
			</div>
			<div className="absolute top-0 left-0 -z-10">
				<img src={oval} alt="oval" />
			</div>
		</header>
	);
};

export default Navbar;
