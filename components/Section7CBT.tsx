import React, { useEffect } from "react";
import cbtTeacherPng from "../public/images/cbtTeacher.png";
import stakingpng from "../public/images/staking.png";
import p2e2png from "../public/images/p2e2.png";
import market2png from "../public/images/market-2.png";
import nftofferpng from "../public/images/nft-offer.png";
import arrowsPng from "../public/images/arrows.png";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import Heading from "./Heading";
import Video from "./Video";

const Section7CBT = () => {
  const { t } = useTranslation();

  return (
    <div className="relative text-center z-10 ">
      <div
        id="MTC"
        className="absolute 2xl:top-14 w-full z-[-1] opacity-0"
      ></div>

      <div className="mx-auto inline-flex flex-col items-center justify-center lg:flex-row relative">
        <div className="sm:absolute mb-10 sm:mb-0 text-center text-white max-w-lg px-2 mx-auto sm:left-1/2 sm:-translate-x-1/2 top-8 md:top-14 z-10">
          <Heading className="text-center">{t("section7-title")}</Heading>
          <p className="mt-2 lg:text-lg leading-6">{t("section7-subtitle")}</p>
        </div>

        <div className="relative overflow-hidden -- text-white text-[11px] sm:text-xs md:text-base lg:text-lg 2xl:text-xl font-mulish font-extrabold ">
          <div className="absolute inset-y-[10%] max-h-[250px] max-w-[420px]  sm:max-w-none sm:max-h-full my-auto mx-auto  inset-x-2.5 z-10 sm:inset-x-[12.7%] sm:top-[30%] sm:bottom-[14.6%] flex justify-between ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-center sm:space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={p2e2png} alt="PLAY-TO-EARN" />
                </div>
                <span> {t("section7-PLAY-TO-EARN")}</span>
              </div>
              {/* --- */}
              <div className="flex flex-col items-center justify-center sm:space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={market2png} alt="MARKETPLACE" />
                </div>
                <span> {t("section7-MARKETPLACE")}</span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-center sm:space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={stakingpng} alt="STAKING" />
                </div>
                <span>{t("section7-STAKING")}</span>
              </div>
              {/* --- */}
              <div className="flex flex-col items-center justify-center sm:space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={nftofferpng} alt="NFT OFFERING" />
                </div>
                <span>{t("section7-NFT-OFFERING")}</span>
              </div>
            </div>
          </div>

          <div className="max-w-[956px]">
            <Video
              className="w-full text-center hidden sm:flex items-center justify-center"
              src="/video/token.mp4"
              videoId="token"
            />
            <Video
              className="w-full text-center flex sm:hidden items-center justify-center"
              src="/video/mobile/token-mobile.mp4"
              videoId="token"
            />
          </div>

          <div className="absolute bottom-[33%] sm:bottom-[23.7%] inset-x-[31.4%]">
            <Image unoptimized src={arrowsPng} alt="arrows" />
          </div>
        </div>

        <div className="hidden md:inline-flex absolute left-0 -bottom-11 -translate-x-[20%] xl:-translate-x-[40%] 2xl:-translate-x-[70%] max-w-[160px] lg:max-w-[200px] 2xl:max-w-none">
          <Image unoptimized src={cbtTeacherPng} alt="teacher" />
        </div>
      </div>
    </div>
  );
};

export default Section7CBT;
