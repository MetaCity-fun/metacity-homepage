import React, { Fragment, useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import loadingGif from "../public/images/loading.gif";
import getstartedPng from "../public/images/getstarted.png";
import whitepaperPng from "../public/images/whitepaper.png";
import { useCopyToClipboard, useTimeoutFn } from "react-use";
import { Transition } from "@headlessui/react";
import { useTranslation } from "next-export-i18n";
import ComingSoon from "./ComingSoon";
import { useIntersection } from "react-use";
import Video from "./Video";
import Device from "./Device";

const Header = () => {
  const { t } = useTranslation();

  const CONTRACT_ADDRESS = "0x8c72686143b6e706416c6bb814d9a18579fa5d2f";
  const [, copyToClipboard] = useCopyToClipboard();
  let [isShowingTooltip, setIsShowingTooltip] = useState(false);
  let [, , resetIsShowingTooltip] = useTimeoutFn(
    () => setIsShowingTooltip(false),
    1500
  );

  //
  let [isShowingLoading, setIsShowingLoading] = useState(true);

  // ref1
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const refVideo = useRef<HTMLVideoElement>(null);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "1000px",
    threshold: 0.1,
  });

  useEffect(() => {
    if (!intersection || !intersection.isIntersecting) return;
    // console.log(123, "---------- spine for play button ----------");

    const p = document.getElementById("Header-play-json-container");
    if (p) {
      p.innerHTML = "";
    }
    // @ts-ignore
    new spine.SpinePlayer("Header-play-json-container", {
      alpha: true, // Enable player translucency
      backgroundColor: "#00000000",
      showControls: false, // Hide the player controls,
      jsonUrl: "/json/play/play.json",
      atlasUrl: "/json/play/play.atlas",
      showLoading: false,
    });
  }, [intersection]);

  //

  useEffect(() => {
    setTimeout(() => {
      setIsShowingLoading(false);
    }, 3500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!ref1.current || !ref2.current || !ref3.current) return;

      if (ref1.current.getBoundingClientRect().bottom < 0) {
        if (!ref2.current.classList.contains("header-not-on-top")) {
          ref2.current.classList.add("header-not-on-top");
        }
        if (!ref3.current.classList.contains("contract-not-on-top")) {
          ref3.current.classList.add("contract-not-on-top");
        }
      } else {
        ref2.current.classList.remove("header-not-on-top");
        ref3.current.classList.remove("contract-not-on-top");
      }
    });
  }, []);

  return (
    <>
      {/* LOADING VIDEO */}
      <Transition
        show={isShowingLoading}
        className="fixed inset-0 z-[500] flex items-center justify-center bg-[#120B23] p-5"
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="max-w-[50px] sm:max-w-[80px] 2xl:max-w-[120px]">
          <Image unoptimized src={loadingGif} alt="loading" />
        </div>
      </Transition>
      {/* nav bar */}
      <div ref={ref1}></div>

      <div className="fixed inset-x-0 top-0 z-50">
        <div
          ref={ref3}
          className=" -- -- relative z-10 flex !hidden items-center justify-center bg-[#150E2C] p-2.5 text-white"
        >
          <div className="flex items-center truncate text-sm md:text-base xl:text-lg 3xl:text-xl">
            <span className="hidden sm:block">{t("Contract-Address")}:</span>
            <span className="mx-1 text-[#E558FF]">BEP20</span>
            <a
              href="https://bscscan.com/address/0x8c72686143b6e706416c6bb814d9a18579fa5d2f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="max-w-[150px] truncate sm:max-w-none">
                {CONTRACT_ADDRESS}
              </span>
            </a>
            <input defaultValue={CONTRACT_ADDRESS} hidden className="hidden" />
          </div>
          <div
            className="relative ml-2.5 flex-shrink-0 cursor-pointer"
            onClick={() => {
              copyToClipboard(CONTRACT_ADDRESS);
              setIsShowingTooltip(true);
              resetIsShowingTooltip();
            }}
          >
            <Transition
              as={Fragment}
              show={isShowingTooltip}
              enter="transition ease-out duration-200"
              enterFrom="opacity-90 translate-y-0.5"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-90 translate-y-0.5"
            >
              <span className="absolute top-full -left-2.5 mt-1 flex rounded-sm bg-primary px-1 text-xs font-medium text-black">
                COPIED!
              </span>
            </Transition>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path
                d="M17.4436 2.57812L15.4514 0.585938C15.0999 0.234375 14.6311 0 14.1233 0H7.40454C6.34985 0 5.52954 0.859375 5.52954 1.875V3.75H2.40454C1.34985 3.75 0.529541 4.60938 0.529541 5.625V18.125C0.529541 19.1797 1.34985 20 2.40454 20H11.1545C12.1702 20 13.0295 19.1797 13.0295 18.125V16.25H16.1545C17.1702 16.25 18.0295 15.4297 18.0295 14.375V3.90625C18.0295 3.39844 17.7952 2.92969 17.4436 2.57812ZM10.9202 18.125H2.63892C2.48267 18.125 2.40454 18.0469 2.40454 17.8906V5.85938C2.40454 5.74219 2.48267 5.625 2.63892 5.625H5.52954V14.375C5.52954 15.4297 6.34985 16.25 7.40454 16.25H11.1545V17.8906C11.1545 18.0469 11.0374 18.125 10.9202 18.125ZM15.9202 14.375H7.63892C7.48267 14.375 7.40454 14.2969 7.40454 14.1406V2.10938C7.40454 1.99219 7.48267 1.875 7.63892 1.875H11.7795V5.3125C11.7795 5.85938 12.1702 6.25 12.717 6.25H16.1545V14.1406C16.1545 14.2969 16.0374 14.375 15.9202 14.375ZM16.1545 4.375H13.6545V1.875H14.0061C14.0842 1.875 14.1233 1.91406 14.1624 1.95312L16.0764 3.86719C16.1155 3.90625 16.1545 3.94531 16.1545 4.02344V4.375Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div ref={ref2} className="py-2 px-2.5 sm:px-4 2xl:px-16 ">
          <NavBar />
        </div>
      </div>

      <div className="relative ">
        <div className="relative">
          {/* BG COLOR TRANSPARENT */}
          <div className="absolute inset-x-0 top-0 z-[1] h-1/2 bg-gradient-to-b from-bgColor via-bgColor/70 to-transparent sm:h-1/3"></div>

          {/* LOADING VIDEO */}
          <div className="absolute left-1/2 top-1/2 mt-6 max-w-[40px] -translate-x-1/2 -translate-y-1/2 sm:mt-0 sm:max-w-[100px] 2xl:max-w-[120px] ">
            <Image unoptimized src={loadingGif} alt="loading" />
          </div>

          <Device>
            {({ isMobileOnly }) => {
              if (isMobileOnly && window.innerWidth < 768) {
                return (
                  <Video
                    className="relative flex aspect-square w-full justify-center overflow-hidden text-center sm:aspect-auto"
                    videoClassName="w-full scale-[1.8]"
                    src="/video/mobile/firstpage.mp4"
                    videoId="firstpage"
                  />
                );
              }
              return (
                <Video
                  className="relative flex w-full items-center justify-center text-center"
                  src="/video/desktop/firstpage2_0.mp4"
                  videoId="firstpage"
                />
              );
            }}
          </Device>

          {/* BG COLOR TRANSPARENT */}
          <div className="absolute inset-x-0 -bottom-0.5 z-[1] h-1/3 bg-gradient-to-t from-bgColor to-transparent sm:from-bgColor"></div>
        </div>

        <div
          ref={intersectionRef}
          className="header-bandPng-container relative z-[1] -mt-20 w-full lg:absolute lg:mt-auto"
        >
          <div className="relative w-full">
            {/* bandPng IMAGE */}
            <div className="inset-x-0 inset-y-1 hidden items-center justify-center  sm:absolute sm:flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 max-h-full min-h-full min-w-full max-w-full bg-contain object-contain"
                src={"/images/band.png"}
                alt="band"
              />
            </div>

            {/* PLAY BUTTON */}
            <div className="container bottom-auto top-full  flex max-w-4xl items-center justify-center px-2 md:inset-x-10 lg:top-auto lg:bottom-32">
              <a
                className="inline-flex"
                href="https://docs.metacity.fun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image unoptimized src={getstartedPng} alt="getstarted" />
              </a>

              <div className="flow-root w-[40%] flex-shrink-0">
                <div className="relative -mx-5 flex items-center justify-center md:-mx-10">
                  <div
                    id="Header-play-json-container"
                    className="inline-flex w-full "
                  ></div>
                  <ComingSoon className="absolute inset-0 cursor-pointer">
                    <div className=""></div>
                  </ComingSoon>
                </div>
              </div>

              <a
                className="inline-flex"
                href="https://docs.metacity.fun/whitepaper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image unoptimized src={whitepaperPng} alt="whitepaper" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
