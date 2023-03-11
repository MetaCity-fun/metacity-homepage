import React from "react";
import Heading from "./Heading";
import roadmapPng from "../public/images/roadmap.png";
import roadmapMobilePng from "../public/images/roadmapBG-mobile.png";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const DATA: any[] = [];

const Section9Roadmap = () => {
  const { t } = useTranslation();

  const getTitleClas = (title: string) => {
    let CLASSES = "";
    if (title === "Q4 2023") {
      CLASSES = "md:top-[5.3%] md:right-[12%]";
    }
    if (title === "Q3 2023") {
      CLASSES = "md:top-[60.3%] md:right-[27%]";
    }
    if (title === "Q2 2023") {
      CLASSES = "md:top-[9.3%] md:right-[42%]";
    }
    if (title === "Q4 2023") {
      CLASSES = "md:top-[12.6%] md:right-[68%]";
    }
    if (title === "Q1 2023") {
      CLASSES = "md:top-[64.6%] md:right-[56.5%]";
    }
    if (title === "Q3 2023") {
      CLASSES = "md:top-[69%] md:right-[85.5%]";
    }
    return CLASSES;
  };

  const getListContentClas = (title: string) => {
    let CLASSES = "";
    if (title === "Q4 2023") {
      CLASSES = "md:top-[10%] md:right-[10.3%] ";
    }
    if (title === "Q3 2023") {
      CLASSES = "md:top-[65%] md:right-[25%]";
    }
    if (title === "Q2 2023") {
      CLASSES = "md:top-[13.5%] md:right-[40%]";
    }
    if (title === "Q4 2023") {
      CLASSES = "md:top-[16.7%] md:right-[66.5%]";
    }
    if (title === "Q1 2023") {
      CLASSES = "md:top-[69.6%] md:right-[55%]";
    }
    if (title === "Q3 2023") {
      CLASSES = "md:top-[73.5%] md:right-[84.5%]";
    }
    return CLASSES;
  };

  const renderItem = (item: (typeof DATA)[number], index: number) => {
    const titleClass = getTitleClas(item.title);
    const listClass = getListContentClas(item.title);

    return (
      <div key={index}>
        <h4
          className={`-- -- --  relative mb-2  font-mulish font-bold md:absolute md:mb-0 md:-mr-2 md:flex md:h-[4.3%]  md:items-center lg:text-lg xl:mr-0 xl:text-xl 2xl:text-2xl ${titleClass}`}
        >
          <span> {item.title}</span>
        </h4>
        {/* lists */}
        <div
          className={`-- -- -- text-sm md:absolute  md:flex md:h-[24%] md:w-[15%] md:flex-col md:items-center md:justify-center md:text-xs lg:text-[15px] 2xl:text-xl ${listClass}`}
        >
          <ul className=" -- flex flex-col md:flex-col-reverse md:px-2 ">
            {item.list.map((listItem: any, index: number) => {
              return (
                <li key={index} className="-- relative md:flex ">
                  <CheckIcon
                    className={listItem.done ? "xl:mt-1" : "opacity-0"}
                  />
                  <span className="inline-block align-middle">
                    {listItem.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="Section9Roadmap relative z-10 px-2.5 ">
      <Heading className="mb-24 text-center md:mb-10">
        {t("section9-title")}
      </Heading>

      <div className="flex flex-col items-center">
        <span className="mt-2.5 uppercase text-white xl:text-xl">
          TO BE ANNOUNCED
        </span>
      </div>

      <div className="flex items-center justify-center ">
        <div
          id="roadmap"
          className="absolute top-0 z-[-1] opacity-0 2xl:top-[150px]"
        />
        <div className="relative   px-3">
          {/* <div className="mb-2 hidden md:inline-flex">
            <Image unoptimized src={roadmapPng} alt="roadmapPng" />
          </div>

          <div className="w-full max-w-xs sm:max-w-md md:hidden ">
            <Image unoptimized src={roadmapMobilePng} alt="roadmapMobile" />
          </div> */}

          <div className="grid grid-cols-1 gap-9 text-white md:block">
            {DATA.map(renderItem)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`right-full top-0 mr-1 inline-flex flex-shrink-0 scale-90 md:mr-0.5 lg:mr-1 lg:scale-100 ${
        className || ""
      }`}
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.06787 11.7656C6.36084 12.0586 6.85889 12.0586 7.15186 11.7656L15.7651 3.15234C16.0581 2.85938 16.0581 2.36133 15.7651 2.06836L14.7104 1.01367C14.4175 0.720703 13.9487 0.720703 13.6558 1.01367L6.62451 8.04492L3.31396 4.76367C3.021 4.4707 2.55225 4.4707 2.25928 4.76367L1.20459 5.81836C0.911621 6.11133 0.911621 6.60938 1.20459 6.90234L6.06787 11.7656Z"
        fill="#85FF60"
      />
    </svg>
  );
};

export default Section9Roadmap;
