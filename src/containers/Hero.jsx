import React from "react";
import heroImage from "../assets/images/png/hero-image.png";
import CTAButton from "../components/CTAButton";

const Hero = () => {
	return (
		<section className="px-4 pb-20 md:pt-10 lg:pt-0 lg:pb-0 xl:px-8">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row-reverse items-center md:pl-10 lg:pl-20">
					{/* hero image */}
					<div className="max-w-sm md:w-1/2 md:max-w-none">
						<img src={heroImage} alt="Zoidpay 3d illustration" loading="lazy"/>
					</div>

					{/* heading */}
					<div className="flex flex-col space-y-5 md:w-1/2 md:space-y-8 lg:space-y-10 lg:-translate-y-10">
						<h1 className="font-bold text-3xl text-center md:text-left md:leading-[40px] lg:leading-[60px] lg:text-5xl xl:text-6xl xl:leading-[80px]">
							Become a
							<span className="txt-gradient-100">
								{" "}
								Zoidpay Ambassador
							</span>
						</h1>
						<CTAButton
							title="Get Started"
							styles="self-center px-5 md:self-start lg:px-7"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
