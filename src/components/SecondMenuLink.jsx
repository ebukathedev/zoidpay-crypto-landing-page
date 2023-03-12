import React from "react";

const SecondMenuLink = ({ title }) => {
	return (
		<a
			href="#"
			className="hover:text-link-secondary duration-500 ease-in-out"
		>
			{title}
		</a>
	);
};

export default SecondMenuLink;
