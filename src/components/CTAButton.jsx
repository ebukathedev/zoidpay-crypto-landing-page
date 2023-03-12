import React from "react";

const CTAButton = ({ title, styles }) => {
	return (
		<a
			href="#"
			className={`block bg-btn-gradient text-white rounded-lg font-bold text-center shadow-[0px_4px_10px] shadow-shadow-accent-100 ${styles}`}
		>
			{title}
		</a>
	);
};

export default CTAButton;
