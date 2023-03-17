import React from "react";
import ThirdLevelHeading from "./ThirdLevelHeading";

const BenefitCard = ({ img, title, description }) => {
	return (
		<div className="flex flex-col shadow-[0px_20px_80px] shadow-shadow-accent-200 rounded-3xl py-10 px-5 space-y-5 w-full max-w-[327px] justify-center">
			<div className="w-3/5 mx-auto">
				<img src={img} alt="emoji with sunglasses" />
			</div>
			<ThirdLevelHeading title={title} />
			<p className="text-txt-secondary-100 font-medium leading-8">
				{description}
			</p>
		</div>
	);
};

export default BenefitCard;
