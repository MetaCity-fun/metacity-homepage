import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
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
//
import Glide from "@glidejs/glide";
import { useTranslation } from "next-export-i18n";
import { useIntersection } from "react-use";

const DATA = [
  {
    id: "Section5Gangters-spine-victor",
    name: "PANDINI",
    desc: `Pandini - The oldest man in MetaCity city. With his composure and rich experience, he was also known as "PaPa". People respect Pandini not only because of his agility, ability to negotiate, erudition, and experience but also because he has held many important positions and responsibilities during his time on Earth. But few people know that he is one of the few people involved in the project to send humans to Mars. `,
    quote: "",
    headImg: head5PNG,
    json: {
      jsonUrl: "/json/pandini/oldman.json",
      atlasUrl: "/json/pandini/oldman.atlas",
    },
  },
  {
    id: "Section5Gangters-spine-Mengqin",
    name: "LIE XIE",
    desc: `The right-hand man of Pandini, she is intelligent and prudent. Lie Xie's childhood was unhappy when she lost both her parents at a young age due to the Corona pandemic when she was 6 years old. She was rescued by Pandini in an accident and adopted. With a caring personality and smart judgment, she became Pandini's effective assistant. Besides, Lie Xie is also the one who holds many secrets of the city and is assigned the nickname "Scary Secretary". `,
    quote: "",
    headImg: head4PNG,
    json: {
      jsonUrl: "/json/secretary/secretary.json",
      atlasUrl: "/json/secretary/secretary.atlas",
    },
  },
  {
    id: "Section5Gangters-spine-Kenvil",
    name: "LEAO",
    desc: `As a multi-talented artist and an excellent samba dancer. Leao is known as the "Frozen Prince" in showbiz because of his appearance, attractiveness. Despite being talented and brilliant, his love and personal life are not happening, he has been cheated on in the past, which is why he closes down and entirely focuses on his career. `,
    quote: "",
    headImg: head8PNG,
    json: {
      jsonUrl: "/json/leonardo/leonardo.json",
      atlasUrl: "/json/leonardo/leonardo.atlas",
    },
  },
  {
    id: "Section5Gangters-spine-Sakura",
    name: "Sakura",
    desc: `A global celebrity, she is known as the "Fox Princess of Japan." In pursuit of her dream of becoming a singer, she decided to join CB Entertainment. After two years of training, she officially debuted with BrownPink, a 5-member group. There is a rumor that Sakura is the only daughter of Japan's most famous tycoon. As of now, nothing about her family background has been found anywhere, so this rumor is still uncertain. `,
    quote: "",
    headImg: head7PNG,
    json: {
      jsonUrl: "/json/girl/girl.json",
      atlasUrl: "/json/girl/girl.atlas",
    },
  },
  {
    id: "Section5Gangters-spine-Ricardo",
    name: "PENA",
    desc: `Pena is a special bodyguard born and raised in the Philippines, surrounded by many islands and prone to natural disasters. The living environment has created a person with exemplary health and a courageous spirit when faced with difficult situations. Unfortunately, he was injured by a villain during a mission, and a part of his eye was damaged. `,
    headImg: head3PNG,
    quote: "",
    json: {
      jsonUrl: "/json/ricardo/ricardo.json",
      atlasUrl: "/json/ricardo/ricardo.atlas",
    },
  },
  {
    id: "Section5Gangters-spine-Kate",
    name: "KARINA",
    desc: `She is proficient in many martial arts, including Judo, Karate, Taekwondo, and especially Sambo. She has achieved a great deal of success, winning many Olympic gold medals. The strong personality of this woman makes her attractive to men and women alike. `,
    quote: "",
    headImg: head2PNG,
    json: {
      jsonUrl: "/json/karina/karina.json",
      atlasUrl: "/json/karina/karina.atlas",
    },
  },

  {
    id: "Section5Gangters-spine-LR",
    name: "LUKE",
    desc: `Coming from a small alley in America, Luke has a bright face. With cunning and ingenuity, sometimes mixed with a bit of luck, Luke gradually became famous throughout the casinos in Los. With the nickname L.R., he has become a legend to all gamblers around the world. `,
    quote: "",
    headImg: head1PNG,
    json: {
      jsonUrl: "/json/lucas/boy.json",
      atlasUrl: "/json/lucas/boy.atlas",
    },
  },
  {
    id: "Section5Gangters-spine-Eliz",
    name: "MARIA FLORES",
    desc: `No one knows the age of Maria Flores. She has traveled to many places, met many people, and interacted with various cultures. It is rumored that she is a product of a scientific experiment designed to collect valuable materials on Earth for conservation. People believe that she has reached a higher level than humans due to her knowledge and secrets. `,
    quote: "",
    headImg: head6PNG,
    json: {
      jsonUrl: "/json/ebru/ebru.json",
      atlasUrl: "/json/ebru/ebru.atlas",
    },
  },
];

let player: any;
const Section5Gangters = () => {
  const UNIQUE_CLASS = "Section5Gangters-glidejs-slide";
  const UNIQUE_CLASS_2 = "Section5Gangters-glidejs-slide-2-";
  const { t } = useTranslation();

  let [indexActive, setIndexActive] = useState(2);
  //

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
        1280: {
          gap: 20,
        },
        1024: {
          perView: 3,
        },
        768: {
          perView: 3,
        },
        640: {
          perView: 3,
        },
        500: {
          perView: 1,
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
    MY_GLIDEJS.mount();
  }, [MY_GLIDEJS, UNIQUE_CLASS]);

  useEffect(() => {
    MY_GLIDEJS_2.mount();
  }, [MY_GLIDEJS_2, UNIQUE_CLASS_2]);

  const getDataActive = useCallback(() => {
    return DATA[indexActive];
  }, [indexActive]);

  useEffect(() => {
    // REMOVE ALL SPINE WHEN RUN SLIDER
    DATA.forEach((element) => {
      const a = document.getElementById(element.id);
      if (a) {
        a.innerHTML = "";
      }
    });

    player?.stopRendering();
    player?.assetManager.dispose();
    player = null;

    // @ts-ignore-next-line
    new spine.SpinePlayer(getDataActive().id, {
      alpha: true, // Enable player translucency
      backgroundColor: "#00000000",
      showControls: false, // Hide the player controls,
      jsonUrl: getDataActive().json.jsonUrl,
      atlasUrl: getDataActive().json.atlasUrl,
      showLoading: false,
    });
  }, [indexActive, getDataActive]);

  const renderHeadImage = (item: typeof DATA[number], index: number) => {
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

  const renderItem = (item: typeof DATA[number]) => {
    return (
      <li className="glide__slide " key={item.id}>
        <div className=" flex flex-col sm:flex-row justify-center items-center">
          <div className="flow-root">
            <div className="min-w-[200px] max-w-[350px] h-[444px] relative inline-flex ">
              <div id={item.id} className="w-full"></div>
            </div>
          </div>
          <div className="relative sm:ml-4 lg:ml-20">
            <Image unoptimized src={gangsterDesPNG} alt="bg" />
            <div className="absolute inset-x-6 sm:inset-x-10 top-7 bottom-10 text-center text-white overflow-y-auto hiddenScrollbar">
              <h4 className="font-mulish font-extrabold text-2xl xl:text-3xl uppercase leading-none">
                {item.name}
              </h4>
              <div
                className="mt-4 xl:text-xl xl:leading-6"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></div>
              <div className="mt-4 xl:text-xl leading-6">
                {/* &quot;{item.quote}&quot; */}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="Section5Gangters relative z-10 px-4">
      <div
        id="NFT-items"
        className="absolute mt-20 sm:mt-10 2xl:mt-[160px] opacity-0 z-[-1] "
      />

      <div className="relative max-w-[1176px] mx-auto pt-28 pb-10 sm:py-[75px] px-2 xl:px-24">
        <div className="absolute z-10 right-1 sm:right-5 -top-10 max-w-[100px] md:max-w-none">
          <Image unoptimized src={gunPNG} alt="gun" />
        </div>
        <div className="absolute z-10 right-1 sm:right-5 -bottom-5 max-w-[100px] md:max-w-none">
          <Image unoptimized src={bulletxPNG} alt="bullet" />
        </div>

        {/* BG */}
        <div className="">
          <Image unoptimized src={gangsterBGPng} layout="fill" objectFit="cover" alt="bg" />
        </div>

        <div className="relative mt-5">
          <Heading>{t("section5-title")}</Heading>
        </div>

        <div className={UNIQUE_CLASS}>
          <div className="relative container !p-0 mx-auto flex justify-center items-center">
            <Prev className="flex-shrink-0 flex-grow" />

            <div className="glide__track " data-glide-el="track">
              <ul className="glide__slides flex items-center min-h-[250px]">
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
                      className={`glide__slide transition-all will-change-contents duration-300 
                        ${index === i0 ? "pl-6 pr-2.5 " : ""}
                        ${index === i1 ? " pl-2.5 pr-6" : ""}
                        ${index === i2 ? "my-glide__slide--active mb-2 " : ""}
                        ${index === i3 ? "pl-6 pr-2.5 " : ""}
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

        <div className={`${UNIQUE_CLASS_2} mt-0`}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">{renderItem(getDataActive())}</ul>
            {/* <ul className="glide__slides">{DATA.map(renderItem)}</ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

interface HeadImageProps {
  isActive: boolean;
  item: typeof DATA[number];
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
          <Image unoptimized src={item.headImg} alt={item.name} className={""} />
        </div>
      </div>
    </div>
  );
};

export default Section5Gangters;
