import React from "react";
import logo from "../assets/images/svg/logo.svg";
import FirstMenuLink from "./FirstMenuLink";

const FIrstDesktopMenu = () => {
	return (
		<nav className="flex items-center space-x-5">
			{/* logo */}
			<a href="#" className="block w-36 md:w-auto mr-2">
				<img src={logo} alt="Zoidpay" />
			</a>

			{/* bar */}
			<span className="hidden h-[35px] w-[2px] bg-black opacity-10 md:block"></span>

			<nav className="hidden md:flex md:items-center md:space-x-9">
				<FirstMenuLink title="Personal" />
				<FirstMenuLink title="Business" />
			</nav>
		</nav>
	);
};

export default FIrstDesktopMenu;
