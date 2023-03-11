import Image from "next/image";
import cashPng from "../public/images/cash.png";
import React from "react";

const MoneyDropAnimation = () => {
  return (
    <section className="MoneyDropAnimation absolute overflow-hidden inset-0 z-[1]">
      <div className="set opacity-90">
        {Array.from("2222222222222222222222222228").map((_, index) => (
          <div
            key={index}
            className={`set__item max-w-[50px] sm:max-w-[70px]  ${
              Math.random() < 0.15
                ? "xl:max-w-[150px]"
                : Math.random() < 0.2
                ? "xl:max-w-[130px]"
                : "xl:max-w-[90px]"
            } `}
            style={{
              animationDelay: `${index * 4}s`,
              left: Math.floor(Math.random() * 85) + "%",
            }}
          >
            <Image unoptimized src={cashPng} alt="cash" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoneyDropAnimation;
