import React from "react";

const YearBannerSection = () => {
	return (
		<div className="flex flex-col space-y-5 font-medium text-txt-secondary-600 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-left sm:text-center md:text-lg md:space-y-8 lg:text-xl lg:leading-[40px] xl:max-w-5xl">
			<p>
				2022 is the year of HyperScaling at ZoidPay, and our roadmap is
				packed with milestones across different avenues of the business,
				including, Partnerships, Tech, Product, Services & more. To make
				the best of this, we need the support and power of our
				community.
			</p>
			<p>
				Help contribute to this journey by{" "}
				<span className="text-txt-primary">
					joining the ZoidPay Ambassador Program.
				</span>
			</p>
		</div>
	);
};

export default YearBannerSection;
