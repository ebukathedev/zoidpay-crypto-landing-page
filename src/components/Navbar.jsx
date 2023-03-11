import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => setIsOpen(!isOpen);

	return (
		<header className="py-5 px-4 text-txt-secondary-800">
			<div className="container mx-auto flex items-center justify-between font-semibold font-montserrat">
				<nav className="flex items-center space-x-5">
					{/* logo */}
					<a href="#" className="block w-36 md:w-auto mr-2">
						<img src={logo} alt="Zoidpay" />
					</a>

					{/* bar */}
					<span className="hidden h-[35px] w-[2px] bg-black opacity-5 md:block"></span>

					{/* first menu */}
					<nav className="hidden md:flex md:items-center md:space-x-8">
						<a
							href="#"
							className="relative hover:text-link-primary duration-500 ease-in-out"
						>
							Personal
							<span className="absolute h-[2px] bg-link-primary inset-x-0 inset-y-7"></span>
						</a>
						<a href="#">Business</a>
					</nav>
				</nav>

				{/* hamburger button */}
				<div
					className="flex flex-col space-y-1 md:hidden"
					onClick={handleClick}
				>
					<span
						className={`w-4 h-1 bg-link-primary rounded duration-200 ${
							isOpen &&
							"rotate-45 translate-x-[2px] translate-y-[2px]"
						}`}
					></span>
					<span
						className={`w-8 h-1 bg-black rounded duration-200 ${
							isOpen && "-rotate-45"
						}`}
					></span>
					<span
						className={`w-4 h-1 bg-link-primary rounded self-end duration-200 ${
							isOpen &&
							"rotate-45 -translate-x-[2px] -translate-y-[2px]"
						}`}
					></span>
				</div>

				{/* second menu */}
				<nav className="hidden md:flex md:items-center md:space-x-8">
					<a
						href="#"
						className="hover:text-link-secondary duration-500 ease-in-out"
					>
						Ecosystem
					</a>
					<a
						href="#"
						className="hover:text-link-secondary duration-500 ease-in-out"
					>
						Token
					</a>
					<a
						href="#"
						className="hover:text-link-secondary duration-500 ease-in-out"
					>
						Roadmap
					</a>
					<a
						href="#"
						className="hover:text-link-secondary duration-500 ease-in-out"
					>
						Get to know us
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
