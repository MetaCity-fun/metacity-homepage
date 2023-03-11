import Image from "next/image";
import React, { useEffect } from "react";
import news1Img from "../public/images/latest-news1.png";
import news2Img from "../public/images/latest-news2.png";
import news3Img from "../public/images/latest-news3.png";
import news4Img from "../public/images/latest-news4.png";
import news5Img from "../public/images/latest-news5.png";
import newsBorderImg from "../public/images/news-border.png";
import Glide from "@glidejs/glide";
import Heading from "./Heading";
import Prev from "./Prev";
import Next from "./Next";
import { useTranslation } from "next-export-i18n";

const DATA = [
  {
    id: 1,
    desc: "Welcome to MetaCity - the metaverse game which allows players to form their city, run their business and build their empires.",
    img: news1Img,
    href: "https://metacity.substack.com/p/metacity-the-first-idle-game-genre?s=r",
  },
  {
    id: 2,
    desc: "As the mayor of MetaCity, you need to dedicate yourself to building and managing your own city.",
    img: news2Img,
    href: "https://metacity.substack.com/p/how-to-play-be-an-excellent-boss?s=r",
  },
  {
    id: 3,
    desc: "Women are half of the world. They are like flowers full of a fragrance that God has bestowed on Earth.",
    img: news3Img,
    href: "https://metacity.substack.com/p/game-guide-for-newbie?s=r",
  },
  {
    id: 4,
    desc: "MTC is the main currency in MetaCity, use BEP-20 Token technology standard on arbitrum (you may be more familiar with Ethereum ecosystem).",
    img: news4Img,
    href: "https://metacity.substack.com/p/monetary-system-in-metacity?s=r",
  },
  {
    id: 5,
    desc: "As the mayor of the city, your mission is to gather the Hunters and rebuild the world.",
    img: news5Img,
    href: "https://metacity.substack.com/p/what-you-need-to-know-before-investing?s=r",
  },
];

const Section3News = () => {
  const UNIQUE_CLASS = "Section3News_glide_";

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      new Glide(`.${UNIQUE_CLASS}`, {
        perView: 3,
        gap: 60,
        bound: true,
        throttle: 100,
        breakpoints: {
          1280: {
            gap: 30,
            perView: 3,
          },
          1024: {
            gap: 30,
            perView: 2,
          },
          768: {
            gap: 30,
            perView: 2,
          },
          640: {
            gap: 30,
            perView: 2,
          },
          500: {
            gap: 30,
            perView: 1,
          },
        },
      }).mount();
    }, 100);
  }, []);

  const renderCard = (item: typeof DATA[number], index?: number) => {
    return (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="glide__slide flex flex-col items-center text-center text-white"
      >
        <div className=" nc_add_anim_float pt-5">
          <div className="relative flex">
            <div className="flex absolute inset-2">
              <Image unoptimized
                src={item.img}
                alt={item.desc}
                objectFit="contain"
                layout="fill"
              />
            </div>
            <Image unoptimized src={newsBorderImg} alt="border" />
          </div>
        </div>
        <p className="max-w-[342px] mt-5 text-lg 2xl:text-xl ">
          <span className="line-clamp-3"> {item.desc}</span>
        </p>
      </a>
    );
  };

  return (
    <div id="news" className="relative z-10 container">
      <Heading>{t("section3-title")}</Heading>
      <div className={`${UNIQUE_CLASS} flex items-center relative`}>
        <Prev className="flex-shrink-0" />

        <div
          className="glide__track mx-4 sm:mx-8 2xl:mx-[60px] "
          data-glide-el="track"
        >
          <ul className="glide__slides ">{DATA.map(renderCard)}</ul>
        </div>
        <Next className="flex-shrink-0" />

        {/*  */}
      </div>
    </div>
  );
};

export default Section3News;
