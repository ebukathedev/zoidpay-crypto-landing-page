import React from "react";
import BenefitCard from "../components/BenefitCard";
import SubHeading from "../components/SubHeading";
import YearBannerSection from "../components/YearBannerSection";
import data from "../data";

const BenefitSection = () => {
	const { benefitCards } = data;

	return (
		<section className="px-4 pb-20">
			<div className="container mx-auto px-2">
				<div className="flex flex-col space-y-5 my-20 py-10 lg:py-20 xl:py-24 lg:my-32 md:bg-year-banner bg-contain md:bg-no-repeat md:bg-center lg:max-w-5xl lg:mx-auto">
					<YearBannerSection />
				</div>
				<div className="flex flex-col items-center text-center text-txt-secondary-800 space-y-20">
					<SubHeading title="Ambassador">
						<span className="txt-gradient-200">Benefits</span>
					</SubHeading>
					<div className="flex flex-wrap justify-center gap-10">
						{benefitCards.map((obj) => (
							<BenefitCard
								key={obj.id}
								img={obj.img}
								title={obj.title}
								description={obj.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BenefitSection;
