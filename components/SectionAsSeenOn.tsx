import Image from "next/image";
import React from "react";
import asseen1png from "../public/images/as-seen1.png";
import Heading from "./Heading";
import handshakemobilebgPng from "../public/images/handshake-mobile-bg.png";
import handshakePng from "../public/images/handshake.png";
import { useTranslation } from "next-export-i18n";

const SectionAsSeenOn = () => {
  const { t } = useTranslation();

  const renderItem = (_: any, index: number) => {
    return (
      <div key={index} className="relative min-h-[70px] md:min-h-max">
        <div className="inline-flex md:hidden">
          <Image unoptimized
            src={handshakemobilebgPng}
            alt="handshakemobilebgPng"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="absolute inset-3 md:inset-2 lg:inset-3 2xl:inset-4">
          <Image unoptimized
            src={handshakePng}
            alt="handshakePng"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="SectionAsSeenOn mt-24 px-2.5 relative z-10">
      <div className=" md:flex items-center justify-center">
        <div className="relative text-center">
          <div className="hidden md:inline-flex ">
            <Image unoptimized src={asseen1png} alt="investor-and-partner1" />
          </div>
          <div className="md:absolute md:inset-x-0 top-[8%]">
            <Heading>{t("AS-SEEN-ON")}</Heading>
          </div>
          <div className="mb-20 md:mb-0 -- md:absolute top-[19%] h-[71%] inset-x-[5%] ">
            <div className="h-full w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-y-10 ">
              {Array.from("11111111111111111111").map(renderItem)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAsSeenOn;
