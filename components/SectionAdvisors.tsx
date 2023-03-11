import Image from "next/image";
import React from "react";
import advisor1Png from "../public/images/advisor1.png";
import Heading from "./Heading";

const SectionAdvisors = () => {
  const renderItem = () => {
    return (
      <div className="flex flex-col items-center">
        <Image unoptimized src={advisor1Png} alt="advisor" />
        <span className="uppercase xl:text-xl mt-2.5">TO BE ANNOUNCED</span>
      </div>
    );
  };

  return (
    <div className="relative z-10 container">
      <Heading>ADVISORS</Heading>
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        {renderItem()}
        {renderItem()}
        {renderItem()}
        {renderItem()}
      </div>
    </div>
  );
};

export default SectionAdvisors;
