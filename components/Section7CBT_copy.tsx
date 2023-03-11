import React, { useEffect } from "react";
import cbtTeacherPng from "../public/images/cbtTeacher.png";
import cbt1Png from "../public/images/cbt1.png";
import stakingpng from "../public/images/staking.png";
import p2e2png from "../public/images/p2e2.png";
import market2png from "../public/images/market-2.png";
import nftofferpng from "../public/images/nft-offer.png";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const Section7CBT = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // @ts-ignore
    new spine.SpinePlayer("Section7CBT-coin-json-container", {
      alpha: true, // Enable player translucency
      backgroundColor: "#00000000",
      showControls: false, // Hide the player controls,
      jsonUrl: "/json/cbt/Coin-1.json",
      atlasUrl: "/json/cbt/Coin-1.atlas",
    });
  }, []);

  return (
    <div className="relative text-center z-10 ">
      <div
        id="CBT"
        className="absolute 2xl:top-14 w-full z-[-1] opacity-0"
      ></div>
      <div className="mx-auto inline-flex flex-col items-center justify-center lg:flex-row relative">
        <div className="sm:absolute mb-10 sm:mb-0 text-center text-white max-w-lg px-2 mx-auto sm:left-1/2 sm:-translate-x-1/2 top-8 md:top-14 z-10">
          <h4 className="font-mulish text-3xl xl:text-[42px] font-extrabold">
            {t("section7-title")}
          </h4>
          <p className="mt-2 lg:text-lg leading-6">{t("section7-subtitle")}</p>
        </div>

        <div className="relative overflow-hidden -- text-white text-xs md:text-base lg:text-lg 2xl:text-xl font-mulish font-extrabold ">
          <div className="absolute top-[16%] bottom-[22%] -inset-x-1 z-10 sm:inset-x-[12.7%] sm:top-[30%] sm:bottom-[14.6%] flex justify-between">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-center space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={p2e2png} alt="PLAY-TO-EARN" />
                </div>
                <span> {t("section7-PLAY-TO-EARN")}</span>
              </div>
              {/* --- */}
              <div className="flex flex-col items-center justify-center space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={market2png} alt="MARKETPLACE" />
                </div>
                <span> {t("section7-MARKETPLACE")}</span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-center space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={stakingpng} alt="STAKING" />
                </div>
                <span>{t("section7-STAKING")}</span>
              </div>
              {/* --- */}
              <div className="flex flex-col items-center justify-center space-y-1">
                <div className="max-w-[50%] md:max-w-[80%] lg:max-w-none">
                  <Image unoptimized src={nftofferpng} alt="NFT OFFERING" />
                </div>
                <span>{t("section7-NFT-OFFERING")}</span>
              </div>
            </div>
          </div>

          <div className="scale-[1.3] sm:scale-100 mb-14 sm:mb-0 max-w-[956px]">
            <Image unoptimized src={cbt1Png} alt="cbt" />
          </div>
          <div className="absolute inset-0 nc_add_anim_float">
            <div
              id="Section7CBT-coin-json-container"
              className="w-[50%] h-[200px] md:w-[340px] md:h-[340px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:mt-10 z-20 "
            ></div>
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
