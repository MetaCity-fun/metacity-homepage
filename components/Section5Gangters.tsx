import React, { FC, useEffect, useMemo, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import Prev from "./Prev";
import Next from "./Next";
//
import gangsterBGPng from "../public/images/gangsterBG.png";
import mostWantedPNG from "../public/images/most-wanted.png";
import gangsterDesPNG from "../public/images/gangster-des.png";
import wantedPNG from "../public/images/wanted.png";
import gunPNG from "../public/images/gun.png";
import bulletxPNG from "../public/images/bulletx.png";
//
import head1PNG from "../public/images/head1.png";
import head2PNG from "../public/images/head2.png";
import head3PNG from "../public/images/head3.png";
import head4PNG from "../public/images/head4.png";
import head5PNG from "../public/images/head5.png";
import head6PNG from "../public/images/head6.png";
import head7PNG from "../public/images/head7.png";
import head8PNG from "../public/images/head8.png";

import gangsterBGmobilePNG from "../public/images/gangsterBG-mobile.png";
//
import gangster1PNG from "../public/images/character-gif/oldman-animation.gif";
import gangster2PNG from "../public/images/character-gif/secretary-idle.gif";
import gangster3PNG from "../public/images/character-gif/leonardo-idle.gif";
import gangster4PNG from "../public/images/character-gif/girl-idle.gif";
import gangster7PNG from "../public/images/character-gif/ricardo-animation.gif";
import gangster8PNG from "../public/images/character-gif/karina-idle.gif";
import gangster5PNG from "../public/images/character-gif/boy-idle.gif";
import gangster6PNG from "../public/images/character-gif/ebru-animation.gif";

import Glide from "@glidejs/glide";
import { useTranslation } from "next-export-i18n";

const DATA = [
  {
    id: 1,
    name: "PANDINI",
    desc: `Pandini - The oldest man in MetaCity city. With his composure and rich experience, he was also known as "PaPa". People respect Pandini not only because of his agility, ability to negotiate, erudition, and experience but also because he has held many important positions and responsibilities during his time on Earth. But few people know that he is one of the few people involved in the project to send humans to Mars. `,
    quote: "",
    headImg: head5PNG,
    img: gangster1PNG,
  },
  {
    id: 2,
    name: "LIE XIE",
    desc: `The right-hand man of Pandini, she is intelligent and prudent. Lie Xie's childhood was unhappy when she lost both her parents at a young age due to the Corona pandemic when she was 6 years old. She was rescued by Pandini in an accident and adopted. With a caring personality and smart judgment, she became Pandini's effective assistant. Besides, Lie Xie is also the one who holds many secrets of the city and is assigned the nickname "Scary Secretary". `,
    quote: "",
    headImg: head4PNG,
    img: gangster2PNG,
  },
  {
    id: 3,
    name: "LEAO",
    desc: `As a multi-talented artist and an excellent samba dancer. Leao is known as the "Frozen Prince" in showbiz because of his appearance, attractiveness. Despite being talented and brilliant, his love and personal life are not happening, he has been cheated on in the past, which is why he closes down and entirely focuses on his career. `,
    // quote: "",
    headImg: head8PNG,
    img: gangster3PNG,
  },
  {
    id: 4,
    name: "Sakura ",
    desc: `A global celebrity, she is known as the "Fox Princess of Japan." In pursuit of her dream of becoming a singer, she decided to join CB Entertainment. After two years of training, she officially debuted with BrownPink, a 5-member group. There is a rumor that Sakura is the only daughter of Japan's most famous tycoon. As of now, nothing about her family background has been found anywhere, so this rumor is still uncertain. `,
    quote: "",
    headImg: head7PNG,
    img: gangster4PNG,
  },
  {
    id: 5,
    name: "PENA",
    desc: `Pena is a special bodyguard born and raised in the Philippines, surrounded by many islands and prone to natural disasters. The living environment has created a person with exemplary health and a courageous spirit when faced with difficult situations. Unfortunately, he was injured by a villain during a mission, and a part of his eye was damaged. `,
    headImg: head3PNG,
    quote: "",
    img: gangster7PNG,
  },
  {
    id: 6,
    name: "KARINA",
    desc: `She is proficient in many martial arts, including Judo, Karate, Taekwondo, and especially Sambo. She has achieved a great deal of success, winning many Olympic gold medals. The strong personality of this woman makes her attractive to men and women alike. `,
    quote: "",
    headImg: head2PNG,
    img: gangster8PNG,
  },
  {
    id: 7,
    name: "LUKE",
    desc: `Coming from a small alley in America, Luke has a bright face. With cunning and ingenuity, sometimes mixed with a bit of luck, Luke gradually became famous throughout the casinos in Los. With the nickname L.R., he has become a legend to all gamblers around the world. `,
    quote: "",
    headImg: head1PNG,
    img: gangster5PNG,
  },
  {
    id: 8,
    name: "MARIA FLORES",
    desc: `No one knows the age of Maria Flores. She has traveled to many places, met many people, and interacted with various cultures. It is rumored that she is a product of a scientific experiment designed to collect valuable materials on Earth for conservation. People believe that she has reached a higher level than humans due to her knowledge and secrets. `,
    quote: "",
    headImg: head6PNG,
    img: gangster6PNG,
  },
];

function Section5Gangters() {
  const UNIQUE_CLASS = "Section5Gangters-glidejs-slide";
  const UNIQUE_CLASS_2 = "Section5Gangters-glidejs-slide-2-";
  const { t } = useTranslation();

  let [indexActive, setIndexActive] = useState(2);

  let MY_GLIDEJS_2 = useMemo(() => {
    return new Glide(`.${UNIQUE_CLASS_2}`, {
      startAt: 2,
      swipeThreshold: false,
      dragThreshold: false,
    });
  }, [UNIQUE_CLASS_2]);

  let MY_GLIDEJS = useMemo(() => {
    return new Glide(`.${UNIQUE_CLASS}`, {
      perView: 5,
      gap: 0,
      bound: true,
      focusAt: "center",
      startAt: 2,
      rewindDuration: 1000,
      breakpoints: {
        1024: {
          perView: 3,
        },
      },
    });
  }, [UNIQUE_CLASS]);

  MY_GLIDEJS.on(["run"], () => {
    // @ts-ignore-next-line
    setIndexActive(MY_GLIDEJS.index);
    if (MY_GLIDEJS_2) {
      // @ts-ignore-next-line
      MY_GLIDEJS_2.go(`=${MY_GLIDEJS.index}`);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      MY_GLIDEJS.mount();
    }, 100);
  }, [MY_GLIDEJS, UNIQUE_CLASS]);

  useEffect(() => {
    setTimeout(() => {
      MY_GLIDEJS_2.mount();
    }, 100);
  }, [MY_GLIDEJS_2, UNIQUE_CLASS_2]);

  const renderHeadImage = (item: (typeof DATA)[number], index: number) => {
    return (
      <div
        className="cursor-pointer"
        onClick={() => {
          // @ts-ignore-next-line
          MY_GLIDEJS.go(`=${index}`);
        }}
      >
        <HeadImage
          indexActive={indexActive}
          key={index}
          item={item}
          index={index}
          isActive={index === indexActive}
        />
      </div>
    );
  };

  const renderItem = (item: (typeof DATA)[number], index: number) => {
    return (
      <li className="glide__slide " key={index}>
        <div className=" flex flex-col items-center justify-center sm:flex-row">
          <div className="flex min-h-[380px] flex-col">
            <div className="relative mt-auto inline-flex h-full w-full">
              <Image
                unoptimized
                src={item.img}
                alt={item.name}
                className={`max-h-full ${
                  item.name === "PENA" ? "scale-x-[-1]" : ""
                }`}
              />
            </div>
          </div>
          {/* <div className="w-[240px] min-h-[344px] relative inline-flex ">
            {index === indexActive && (
              <Image unoptimized
                src={item.img}
                alt={item.name}
                layout="fill"
                objectFit="contain"
                priority
              />
            )}
          </div> */}
          <div className="relative mt-8 sm:mt-0 sm:ml-4 md:ml-10 lg:ml-20">
            <Image unoptimized src={gangsterDesPNG} alt="bg" />
            <div className="hiddenScrollbar absolute inset-x-6 top-7 bottom-10 overflow-y-auto text-center text-white sm:inset-x-10">
              <h4 className="font-mulish text-2xl font-extrabold uppercase leading-none xl:text-3xl">
                {item.name}
              </h4>
              <div
                className="mt-4 xl:text-xl xl:leading-6"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></div>
              <div className="mt-4 leading-6 xl:text-xl">
                {/* &quot;{item.quote}&quot; */}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="relative z-10">
      <div
        id="NFT-items"
        className="absolute z-[-1] mt-20 opacity-0 sm:mt-10 2xl:mt-[160px] "
      />

      <div className="relative mx-auto max-w-[1176px] px-4 pt-[7%] pb-10 sm:py-[70px] xl:px-24">
        <div className="absolute right-1 -top-10 z-10 max-w-[100px] sm:right-5 md:max-w-none">
          <Image unoptimized src={gunPNG} alt="gun" />
        </div>
        <div className="absolute right-1 -bottom-5 z-10 max-w-[100px] sm:right-5 md:max-w-none">
          <Image unoptimized src={bulletxPNG} alt="bullet" />
        </div>

        {/* BG */}
        <div className="hidden sm:inline-flex ">
          <Image
            unoptimized
            src={gangsterBGPng}
            layout="fill"
            objectFit="cover"
            alt="bg"
            objectPosition={"50% top"}
          />
        </div>
        <div className="inline-flex sm:hidden ">
          <Image
            unoptimized
            src={gangsterBGmobilePNG}
            layout="fill"
            objectPosition={"50% top"}
            objectFit="cover"
            alt="bg"
          />
        </div>

        <div className="relative ">
          <Heading>{t("section5-title")}</Heading>
        </div>

        <div className={UNIQUE_CLASS}>
          <div className="container relative mx-auto flex items-center justify-center !p-0">
            <Prev className="flex-shrink-0 flex-grow" />

            <div className="glide__track " data-glide-el="track">
              <ul className="glide__slides flex min-h-[160px] items-center sm:min-h-[250px]">
                {DATA.map((item, index) => {
                  const i2 = indexActive;
                  const i1 = i2 < 1 ? DATA.length - 1 : i2 - 1;
                  const i0 = i1 < 1 ? DATA.length - 1 : i1 - 1;
                  //
                  const i3 = i2 <= DATA.length - 2 ? i2 + 1 : 0;
                  const i4 = i3 < DATA.length - 1 ? i3 + 1 : 0;
                  return (
                    <li
                      key={index}
                      className={`glide__slide transition-all duration-300 will-change-contents 
                        ${index === i0 ? "pl-6 pr-2.5 " : ""}
                        ${index === i1 ? " px-2.5 sm:pr-6" : ""}
                        ${index === i2 ? "my-glide__slide--active mb-2 " : ""}
                        ${index === i3 ? "px-2.5 sm:pl-6 " : ""}
                        ${index === i4 ? "pl-2.5 pr-6 " : ""} `}
                    >
                      {renderHeadImage(item, index)}
                    </li>
                  );
                })}
              </ul>
            </div>

            <Next className="flex-shrink-0 flex-grow" />
          </div>
        </div>

        <div className={`${UNIQUE_CLASS_2} mt-2 pb-5 sm:mt-8`}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">{DATA.map(renderItem)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HeadImageProps {
  isActive: boolean;
  item: (typeof DATA)[number];
  index: number;
  indexActive: number;
}
const HeadImage: FC<HeadImageProps> = ({
  item,
  index,
  isActive,
  indexActive,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        indexActive === index ? "-mx-1.5" : ""
      }`}
    >
      {isActive ? (
        <Image unoptimized src={mostWantedPNG} alt="wanted" />
      ) : (
        <Image unoptimized src={wantedPNG} alt="wanted" />
      )}
      <div className="absolute inset-x-2.5 top-5 bottom-1 flex items-end justify-center">
        <div className="w-full ">
          <Image
            unoptimized
            src={item.headImg}
            alt={item.name}
            className={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Section5Gangters;
