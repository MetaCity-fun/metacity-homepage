import React from "react";
import Heading from "./Heading";
import { Disclosure, Transition } from "@headlessui/react";
import { useTranslation } from "next-export-i18n";

const DATA = [
  {
    question: "WHAT ARE METACITY'S OFFICIAL CHANNELS?",
    answer: `Website: <a href="https://metacity.fun/" target="_blank" rel="noopener noreferrer"> https://metacity.fun/</a> <br />
    Whitepaper:  <a href="https://docs.metacity.fun/" target="_blank" rel="noopener noreferrer"> https://docs.metacity.fun/</a>  <br />
    MetaCity Social Media: <br />
    Telegram Global Channel: <a href="http://t.me/MetaCityAnnouncement/" target="_blank" rel="noopener noreferrer"> http://t.me/MetaCityAnnouncement/</a><br />
    Telegram Global Group: <a href="http://t.me/MetaCityCommunity/" target="_blank" rel="noopener noreferrer"> http://t.me/MetaCityCommunity/</a><br />
    Twitter : <a href="https://twitter.com/mtc_metacity" target="_blank" rel="noopener noreferrer"> https://twitter.com/mtc_metacity/</a><br />
    `,
  },
  {
    question: "HOW DO I BUY $MTC?",
    answer: `$MTC is a ERC-20 Token based on arbitrum. You could get $MTC on DEX such as SushiSwap (more Decentralized Exchange are coming). When trading on SushiSwap, make sure that you have USDC in your wallet. Contract address will be announced soon.`,
  },
  {
    question: "DO YOU HAVE ANY PLAN IN MARKETING AND LISTING?",
    answer: `First, we will add liquidity on SushiSwap and work with more Decentralized Exchanges, communities, media to increase visibility. All achievements come from and belong to the community.`,
  },
  {
    question:
      "DOES METACITY ISSUE NFT? ARE THERE ANY BENEFITS FOR HOLDING NFT?",
    answer: `Yes, we issue an initial amount of NFTs, which will be Buildings and Hunters for players like you - Bosses to experience, discover and create your own MetaCity World. Premium NFTs - Powerful Hunters will be earned and upgraded during gameplay.`,
  },
  {
    question: "HOW TO BECOME A PARTNER OF METACITY?",
    answer: `We are recruiting community ambassadors around the world. There will be many incentives, especially many benefits when you are chosen to be our media ambassador. Please contact us via Email: <a href="mailto:marketing@metacity.fun">marketing@metacity.fun</a> .`,
  },
];

const SectionFAQ = () => {
  const { t } = useTranslation();

  const renderItem = (item: typeof DATA[number], index: number) => {
    return (
      <Disclosure
        key={index}
        as="div"
        className="SectionFAQ__item w-full text-left text-white bg-[#100B22] "
      >
        {({ open }) => (
          <div>
            <Disclosure.Button className="p-5 flex items-center justify-between w-full text-left text-sm sm:text-base xl:text-xl font-extrabold uppercase font-mulish ">
              <span>{item.question}</span>
              <svg
                className={`flex-shrink-0 ml-2 ${
                  open ? "transform rotate-90" : ""
                } transition-transform`}
                width="12"
                height="19"
                viewBox="0 0 12 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1328 10.1641C11.4844 9.8125 11.4844 9.22656 11.1328 8.875L3.55469 1.25781C3.16406 0.90625 2.57812 0.90625 2.22656 1.25781L1.32812 2.15625C0.976562 2.50781 0.976562 3.09375 1.32812 3.48438L7.34375 9.5L1.32812 15.5547C0.976562 15.9453 0.976562 16.5312 1.32812 16.8828L2.22656 17.7812C2.57812 18.1328 3.16406 18.1328 3.55469 17.7812L11.1328 10.1641Z"
                  fill="white"
                />
              </svg>
            </Disclosure.Button>
            <Transition
              as="div"
              enter="transition will-change-transform duration-150 ease-out"
              enterFrom="transform  -translate-y-4"
              enterTo="transform opacity-100 translate-y-0"
              leave="transition will-change-transform duration-150 ease-out"
              leaveFrom="transform opacity-100  translate-y-0"
              leaveTo="transform opacity-0 -translate-y-4"
            >
              <Disclosure.Panel className="p-5 pt-0 lg:text-lg text-white ">
                <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="SectionFAQ relative z-10 container">
      <div>
        <Heading>{t("FAQ")}</Heading>
        <div className="w-full max-w-5xl mx-auto space-y-5">
          {DATA.map(renderItem)}
        </div>
      </div>
    </div>
  );
};

export default SectionFAQ;
