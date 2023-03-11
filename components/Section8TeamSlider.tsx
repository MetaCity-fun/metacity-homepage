import Image from "next/image";
import React, { useEffect } from "react";
import t1Img from "../public/images/teams/1.png";
import t2Img from "../public/images/teams/2.png";
import t3Img from "../public/images/teams/3.png";
import t4Img from "../public/images/teams/4.png";
import t5Img from "../public/images/teams/5.png";
import t6Img from "../public/images/teams/6.png";
import t7Img from "../public/images/teams/7.png";
import t8Img from "../public/images/teams/8.png";
import t9Img from "../public/images/teams/9.png";
import t10Img from "../public/images/teams/10.png";
import t11Img from "../public/images/teams/11.png";
import Glide from "@glidejs/glide";
import Heading from "./Heading";
import Prev from "./Prev";
import Next from "./Next";
import { useTranslation } from "next-export-i18n";

const DATA = [
  {
    id: 3,
    img: t3Img,
    name: "DUY NGUYEN",
    bio: "CEO/Founder",
  },
  {
    id: 1,
    img: t1Img,
    name: "DUNG PHAM",
    bio: "CMO/Founder",
  },
  {
    id: 5,
    img: t5Img,
    name: "HUY VAN",
    bio: "CTO/Founder",
  },
  {
    id: 7,
    img: t7Img,
    name: "TUAN TO",
    bio: "Blockchain Economy",
  },
  {
    id: 2,
    img: t2Img,
    name: "DUONG NGUYEN",
    bio: "Community Manager",
  },
  {
    id: 4,
    img: t4Img,
    name: "HUNG NGUYEN",
    bio: "Art Leader",
  },
  {
    id: 6,
    img: t6Img,
    name: "QUOC ANH",
    bio: "Marketing Leader",
  },
  {
    id: 8,
    img: t8Img,
    name: "TUNG TAI",
    bio: "Animation Leader",
  },
  {
    id: 9,
    img: t9Img,
    name: "TINH DO",
    bio: "2D Designer",
  },
  {
    id: 10,
    img: t10Img,
    name: "Truong Nguyen",
    bio: "Game Developer",
  },
  {
    id: 11,
    img: t11Img,
    name: "Dung Le",
    bio: "Blockchain Developer",
  },
];

const Section8TeamSlider = () => {
  const { t } = useTranslation();

  const UNIQUE_CLASS = "Section8TeamSlider_glide_";
  useEffect(() => {
    new Glide(`.${UNIQUE_CLASS}`, {
      perView: 4,
      gap: 60,
      bound: true,
      breakpoints: {
        1536: {
          gap: 30,
          perView: 4,
        },
        1280: {
          gap: 30,
          perView: 4,
        },
        1024: {
          gap: 20,
          perView: 3,
        },
        768: {
          gap: 20,
          perView: 2,
        },
        640: {
          gap: 20,
          perView: 2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    }).mount();
  });

  const renderCard = (item: typeof DATA[number], index: number) => {
    return (
      <div className="relative inline-flex text-center ">
        <Image unoptimized src={item.img} alt={item.name} />
        <div className="items-center absolute bottom-[7%] xl:bottom-4 left-1/2 -translate-x-1/2">
          <p className="2xl:text-xl !leading-none uppercase text-white truncate">
            {item.name}
          </p>
          <p className=" 2xl:text-lg mt-1 !leading-none text-[#202C58] truncate">
            {item.bio}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div id="meet-the-team" className="relative z-10 container">
      <Heading>{t("section8-title")}</Heading>
      <div className={`${UNIQUE_CLASS} flex items-center relative`}>
        <Prev className="flex-shrink-0" />

        <div
          className="glide__track mx-4 sm:mx-8 2xl:mx-[60px]"
          data-glide-el="track"
        >
          <ul className="glide__slides">
            {DATA.map((item, index) => (
              <li
                key={index}
                className="glide__slide inline-flex items-center justify-center"
              >
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>

        <Next className="flex-shrink-0" />
        {/*  */}
      </div>
    </div>
  );
};

export default Section8TeamSlider;
