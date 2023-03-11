import Image from "next/image";
import React from "react";
import investorAndPartner1png from "../public/images/investor-and-partner1.png";
import handshakePng from "../public/images/handshake.png";
import handshakemobilebgPng from "../public/images/handshake-mobile-bg.png";
import verichainsLogoPng from "../public/images/verichains-logo.png";
import Heading from "./Heading";
import { useTranslation } from "next-export-i18n";

const Section10Partner = () => {
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
    <div className="Section10Investors relative z-10 px-4">
      <div className="relative items-center justify-center md:flex">
        <div className="relative text-center ">
          <div className="hidden md:inline-flex ">
            <Image unoptimized src={investorAndPartner1png} alt="investor-and-partner1" />
          </div>
          {/* HEADING 1 */}
          <div className="top-[10%] md:absolute md:inset-x-0 lg:top-[11%]">
            <Heading>{t("section10-title")}</Heading>
          </div>

          {/* LIST 1 */}
          <div
            id="investors"
            className="absolute top-0 z-[-1] w-full opacity-0 sm:top-20 2xl:top-[200px]"
          />
          <div className="-- top-[18%] left-[6%] right-[6.5%] mb-20 h-[21.5%] md:absolute md:mb-0 ">
            <div className="grid h-full w-full grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-5 lg:gap-y-10 ">
              {Array.from("1111111111").map(renderItem)}
            </div>
          </div>

          {/* HEADING 2 */}
          <div className="relative top-[43%] md:absolute md:inset-x-0 lg:top-[44%]">
            <Heading>{t("section11-title")}</Heading>
            <div
              id="partners"
              className="absolute top-0 z-[-1] w-full opacity-0 sm:top-5 2xl:top-[100px]"
            />
          </div>
          {/* LIST 2 */}

          <div className="-- top-[51%] left-[6%] right-[7%] mb-20 h-[21%] md:absolute md:mb-0 ">
            <div className="grid h-full w-full  grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-5 lg:gap-y-10 ">
              {Array.from("1111111111").map(renderItem)}
            </div>
          </div>

          {/* HEADING 3 */}
          <div className="top-[76%] md:absolute md:inset-x-0 lg:top-[77%]">
            <Heading>{t("SECURED-BY")}</Heading>
          </div>
          <div className="inset-x-0 top-[85.6%] flex items-center justify-center md:absolute">
            <div className="relative max-w-xs p-2.5 md:max-w-[23%] md:p-0">
              {/* <div className="inline-flex md:hidden">
                <Image unoptimized
                  src={handshakemobilebgPng}
                  alt="handshakemobilebgPng"
                  layout="fill"
                  objectFit="fill"
                />
              </div>
              <Image unoptimized src={verichainsLogoPng} alt="verichains Logo" /> */}
              <div className="flex flex-col items-center">
                <span className="mt-2.5 uppercase xl:text-xl text-white">
                  TO BE ANNOUNCED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10Partner;
