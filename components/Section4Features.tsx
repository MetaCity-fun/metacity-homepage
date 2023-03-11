import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import feature1png from "../public/images/feature1.png";
import feature2png from "../public/images/feature2.png";
import feature3png from "../public/images/feature3.png";
import feature4png from "../public/images/feature4.png";
import { useTranslation } from "next-export-i18n";

const DATA = [
  {
    id: 1,
    title: "PLAY AND EARN",
    desc: 'Meta City values the entertainment objective but also fulfill the demand of players to earn crypto currency and other rewards by playing.',
    img: feature1png,
  },
  {
    id: 2,
    title: "TRADING MARKET",
    desc: "The NFT Marketplace offers attractive deals for players like Bundle Boxes and allows “bosses” to exchange Buildings and Hunters with each other.",
    img: feature2png,
  },
  {
    id: 3,
    title: "COLLECT AND CRAFT",
    desc: "Once Players collects enough Shards through the exciting activities in the MetaCity world, they may have chance to get a random talented NFT-Hunter.",
    img: feature3png,
  },
  {
    id: 4,
    title: "BUILD YOUR CITY",
    desc: "Each player - “Boss” will own a separate city in the world of MetaCity. Feel free to unleash your creativity with magnificent NFT-Buildings and houses.",
    img: feature4png,
  },
];

const Section4Features = () => {
  const { t } = useTranslation();

  const renderCard = (item: typeof DATA[0], index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center text-white"
      >
        <div className="nc_add_anim_float max-w-[200px] sm:max-w-none">
          <Image unoptimized src={item.img} alt={item.title} />
        </div>
        <h4 className="font-mulish font-extrabold text-xl mt-2 sm:mt-5 uppercase">
          {item.title}
        </h4>
        <p className="max-w-[230px] mt-5 text-lg  2xl:text-xl text-left">{item.desc}</p>
      </div>
    );
  };

  return (
    <div id="features" className="relative z-10 container">
      <Heading>{t("section4-title")}</Heading>
      <div className="max-w-[1110px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14">
        {DATA.map(renderCard)}
      </div>
    </div>
  );
};

export default Section4Features;
