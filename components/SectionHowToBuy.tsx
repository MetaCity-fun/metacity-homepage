import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import React from "react";
import how2buy1png from "../public/images/how-2-buy1.png";
import how2buyMobilepng from "../public/images/how-2-buy1-mobile.png";
import Heading from "./Heading";

const DATA = [
  {
    title: "Create A Metamask Wallet",
    desc: `On your browser, visit metamask.io to download the extension and set up a wallet (Metamask supports Google Chrome, Mozilla Firefox, Brave, and Edge). See full instruction <a href="https://docs.metacity.fun/get-started/metamask-wallet" target="_blank" rel="noopener noreferrer">here</a>.`,
  },
  {
    title: "Setup Arbitrum, Import MTC Token",
    desc: `Arbitrum is a leading Layer 2 blockchain designed to scale Ethereum. <br />
    See full instruction <a href="https://docs.metacity.fun/get-started/import-mtc-token" target="_blank" rel="noopener noreferrer">here</a>.`,
  },
  {
    title: "Use $USDC to exchange $MTC",
    desc: `MTC will be available for trading on SushiSwap. Details will be updated after the token is listed.`,
  },
];

const SectionHowToBuy = () => {
  const { t } = useTranslation();

  return (
    <div className="SectionHowToBuy relative z-10  py-24 sm:pt-28 sm:pb-56">
      <div className="hidden sm:inline-flex">
        <Image unoptimized src={how2buy1png} alt="bg" layout="fill" objectFit="contain" />
      </div>
      <div className="inline-flex sm:hidden">
        <Image unoptimized
          src={how2buyMobilepng}
          alt="bg"
          layout="fill"
          objectFit="contain"
          objectPosition={"center bottom"}
        />
      </div>

      <div className="container relative">
        <Heading>{t("HOW-TO-BUY")}</Heading>

        <div className="space-y-5 text-white max-w-4xl">
          {DATA.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1.5 text-sm w-7 h-7 rounded-full bg-[#15D5FF] flex items-center justify-center">
                <span>{index + 1}</span>
              </div>
              <div className="ml-5">
                <h4 className="font-mulish font-bold text-xl xl:text-2xl 2xl:text-3xl text-[#15D5FF]">
                  {item.title}
                </h4>
                <div
                  className="mt-2.5 xl:text-xl xl:leading-6"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionHowToBuy;
