import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import React from "react";
import bankvaultPng from "../public/images/bank-vault.png";
import videoFramePng from "../public/images/video-frame.png";
import Video from "./Video";
import Device from "./Device";

const Section2Video = () => {
  const { t } = useTranslation();

  return (
    <div className=" max-w-screen-2xl px-4 mx-auto">
      <div className="relative z-10">
        <div className="absolute right-0 xl:right-20 -left-5 top-0 bottom-0 md:-top-28 xl:-bottom-24">
          <Image unoptimized src={bankvaultPng} alt="Bank Vault" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="relative z-10 md:max-w-xs xl:max-w-[365px] text-white text-center md:text-left">
            <h2 className="font-mulish font-extrabold text-3xl">
              {t("section2-title")}
            </h2>
            <p className="mt-5 xl:text-lg">{t("section2-subtitle")}</p>
          </div>
          <div className="mt-5 md:mt-0 md:pl-10 lg:pl-14 2xl:pl-24 3xl:pl-32 flex-grow-0">
            <div className="relative">
              <div className="relative z-10">
                <Image unoptimized src={videoFramePng} alt="Bank Vault" />
              </div>
              {/* video bg */}
              <div className="absolute top-0 right-0 pt-[9.8%] pr-[9%] left-2 sm:left-3 xl:left-5 bottom-5">
                <Device>
                  {({ isMobile }) => {
                    if (isMobile) {
                      return (
                        <Video
                          className="relative w-full text-center flex items-center justify-center"
                          src="/video/mobile/city-1.mp4"
                          videoId="city-2"
                        />
                      );
                    }
                    return (
                      <Video
                        className="w-full h-full text-center flex items-center justify-center"
                        src="/video/desktop/bg.mp4"
                        videoId="city-2"
                      />
                    );
                  }}
                </Device>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Video;
