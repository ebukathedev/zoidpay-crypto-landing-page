import React from "react";

const SubCTAButton = ({ title }) => {
	return (
		<a
			href="#"
			className="relative block text-btn-txt-primary py-2 px-4 rounded-lg text-center md:py-3"
		>
			{title}
			<span className="absolute inset-0 bg-btn-gradient opacity-10 rounded-lg shadow-[0px_4px_10px] shadow-shadow-accent-100"></span>
		</a>
	);
};

export default SubCTAButton;
