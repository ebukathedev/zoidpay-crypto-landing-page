import React from "react";
import SubHeading from "../components/SubHeading";
import swag from "../assets/images/png/swag.png";

const BenefitSection = () => {
	return (
		<section className="px-4">
			<div className="container mx-auto px-2">
				<div className="flex flex-col space-y-5 my-20 py-10 lg:py-20 xl:py-24 lg:my-32 bg-year-banner bg-contain md:bg-no-repeat md:bg-center lg:max-w-5xl lg:mx-auto">
					{/* 2022 */}
					<div className="flex flex-col space-y-5 font-medium text-txt-secondary-600 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-left sm:text-center md:text-lg md:space-y-8 lg:text-xl lg:leading-[40px] xl:max-w-5xl">
						<p>
							2022 is the year of HyperScaling at ZoidPay, and our
							roadmap is packed with milestones across different
							avenues of the business, including, Partnerships,
							Tech, Product, Services & more. To make the best of
							this, we need the support and power of our
							community.
						</p>
						<p>
							Help contribute to this journey by{" "}
							<span className="text-txt-primary">
								joining the ZoidPay Ambassador Program.
							</span>
						</p>
					</div>
				</div>
				{/* Benefits */}
				<div className="flex flex-col items-center text-center space-y-4">
					<SubHeading title="Ambassador">
						<span className="txt-gradient-200">Benefits</span>
					</SubHeading>
					<div className="flex">
						<div className="flex flex-col">
							<div>
								<img src={swag} alt="emoji with sunglasses" />
							</div>
							<h3 className="font-bold text-xl text-txt-secondary-800">Swag</h3>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BenefitSection;
