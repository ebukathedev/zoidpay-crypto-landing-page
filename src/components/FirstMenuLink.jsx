import React from "react";

const FirstMenuLink = ({ title }) => {
	return (
		<a
			href="#"
			className="relative group hover:text-link-primary duration-500 ease-in-out"
		>
			{title}
			<span className="hidden md:block absolute h-[2px] bg-link-primary inset-x-0 inset-y-8 opacity-0 group-hover:inset-y-7 scale-0 group-hover:opacity-100 group-hover:scale-100 origin-center duration-200 ease-in"></span>
		</a>
	);
};

export default FirstMenuLink;
