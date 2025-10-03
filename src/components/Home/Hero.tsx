import React from "react";
import CardSwap, { Card } from "@/components/UI/CardSwap";
import Image from "next/image";
import CustomButton from "../UI/Button";
import CustomLink from "../UI/Link";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col gap-5 w-full md:w-2/3 h-[45vh] mb-5 md:h-screen items-center justify-center px-5 md:px-0">
        <h1 className="text-4xl md:text-5xl md:-mt-[50px]">
          Study Duck: Focus Together, Achieve More
        </h1>
        <p>
          Join real-time video study sessions, stay accountable, earn points,
          and unlock new study partners along the way.
        </p>
        <CustomLink href="/auth?signup=true" text="Join for free" />
      </div>

      <div className="relative w-full h-[300px] md:h-screen bg-amber-300 md:bg-transparent mt-14 md:mt-0">
        <div className="hidden md:block absolute -top-20 -right-80 -z-10 bg-amber-300 rounded-full w-[150%] h-[120%]"></div>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <Image
              src="/images/Session.png"
              alt="Study Duck Session screen"
              fill
              className="w-full h-full object-fill rounded-2xl"
            />
          </Card>
          <Card>
            <Image
              src="/images/studying-girl.png"
              alt="studing girl"
              fill
              className="w-full h-full object-fill  rounded-2xl"
            />
          </Card>
          <Card>
            <Image
              src="/images/Video-chat.png"
              alt="Study Duck Video chat screen"
              fill
              className="w-full h-full object-fill  rounded-2xl"
            />
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default Hero;
