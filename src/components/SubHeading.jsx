import React from "react";

const SubHeading = ({ children, title }) => {
	return (
		<h2 className="font-bold text-2xl lg:text-4xl xl:text-5xl">
			{title} {children}
		</h2>
	);
};

export default SubHeading;
