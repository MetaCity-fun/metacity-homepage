import React, { FC, useMemo, useState } from "react";
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
import cashPng from "../public/images/cash.png";
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
import gangster1PNG from "../public/images/gangster1.png";
import gangster2PNG from "../public/images/gangster2.png";
import gangster3PNG from "../public/images/gangster3.png";
import gangster4PNG from "../public/images/gangster4.png";
import gangster5PNG from "../public/images/gangster5.png";
import gangster6PNG from "../public/images/gangster6.png";
import gangster7PNG from "../public/images/gangster7.png";
import gangster8PNG from "../public/images/gangster8.png";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";

const DATA = [
  {
    id: 1,
    name: "LUKE",
    desc: `Coming from a small alley in America, Luke has a bright face. With cunning and ingenuity, sometimes mixed with a bit of luck, Luke gradually became famous throughout the casinos in Los. With the nickname L.R., he has become a legend to all gamblers around the world. `,
    quote: "",
    headImg: head1PNG,
    img: gangster1PNG,
  },
  {
    id: 2,
    name: "KARINA",
    desc: `She is proficient in many martial arts, including Judo, Karate, Taekwondo, and especially Sambo. She has achieved a great deal of success, winning many Olympic gold medals. The strong personality of this woman makes her attractive to men and women alike. `,
    quote: "",
    headImg: head2PNG,
    img: gangster2PNG,
  },
  {
    id: 3,
    name: "PENA",
    desc: `Pena is a special bodyguard born and raised in the Philippines, surrounded by many islands and prone to natural disasters. The living environment has created a person with exemplary health and a courageous spirit when faced with difficult situations. Unfortunately, he was injured by a villain during a mission, and a part of his eye was damaged. `,
    headImg: head3PNG,
    quote: "",
    img: gangster3PNG,
  },
  {
    id: 4,
    name: "LIE XIE",
    desc: `The right-hand man of Pandini, she is intelligent and prudent. Lie Xie's childhood was unhappy when she lost both her parents at a young age due to the Corona pandemic when she was 6 years old. She was rescued by Pandini in an accident and adopted. With a caring personality and smart judgment, she became Pandini's effective assistant. Besides, Lie Xie is also the one who holds many secrets of the city and is assigned the nickname "Scary Secretary". `,
    quote: "",
    headImg: head4PNG,
    img: gangster4PNG,
  },
  {
    id: 5,
    name: "PANDINI",
    desc: `Pandini - The oldest man in MetaCity city. With his composure and rich experience, he was also known as "PaPa". People respect Pandini not only because of his agility, ability to negotiate, erudition, and experience but also because he has held many important positions and responsibilities during his time on Earth. But few people know that he is one of the few people involved in the project to send humans to Mars. `,
    quote: "",
    headImg: head5PNG,
    img: gangster5PNG,
  },
  {
    id: 6,
    name: "MARIA FLORES",
    desc: `No one knows the age of Maria Flores. She has traveled to many places, met many people, and interacted with various cultures. It is rumored that she is a product of a scientific experiment designed to collect valuable materials on Earth for conservation. People believe that she has reached a higher level than humans due to her knowledge and secrets. `,
    quote: "",
    headImg: head6PNG,
    img: gangster6PNG,
  },
  {
    id: 7,
    name: "Sakura ",
    desc: `A global celebrity, she is known as the "Fox Princess of Japan." In pursuit of her dream of becoming a singer, she decided to join CB Entertainment. After two years of training, she officially debuted with BrownPink, a 5-member group. There is a rumor that Sakura is the only daughter of Japan's most famous tycoon. As of now, nothing about her family background has been found anywhere, so this rumor is still uncertain. `,
    quote: "",
    headImg: head7PNG,
    img: gangster7PNG,
  },
  {
    id: 8,
    name: "LEAO",
    desc: `As a multi-talented artist and an excellent samba dancer. Leao is known as the "Frozen Prince" in showbiz because of his appearance, attractiveness. Despite being talented and brilliant, his love and personal life are not happening, he has been cheated on in the past, which is why he closes down and entirely focuses on his career. `,
    // quote: "",
    headImg: head8PNG,
    img: gangster8PNG,
  },
];

function Section5Gangters() {
  const [indexActive, setIndexActive] = useState(4);
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 300);

  let DATA_SHOW = [];

  const i2 = indexActive;
  const i1 = i2 < 1 ? DATA.length - 1 : i2 - 1;
  const i0 = i1 < 1 ? DATA.length - 1 : i1 - 1;
  //
  const i3 = i2 <= DATA.length - 2 ? i2 + 1 : 0;
  const i4 = i3 < DATA.length - 1 ? i3 + 1 : 0;

  DATA_SHOW[0] = DATA[i0];
  DATA_SHOW[1] = DATA[i1];
  DATA_SHOW[2] = DATA[i2];
  DATA_SHOW[3] = DATA[i3];
  DATA_SHOW[4] = DATA[i4];

  const handleClickPrev = () => {
    setIsShowing(false);
    resetIsShowing();
    setTimeout(() => {
      if (indexActive === 0) {
        setIndexActive(DATA.length - 1);
      } else {
        setIndexActive(indexActive - 1);
      }
    }, 200);
  };

  const handleClickNext = () => {
    setIsShowing(false);
    resetIsShowing();
    setTimeout(() => {
      if (indexActive === DATA.length - 1) {
        setIndexActive(0);
      } else {
        setIndexActive(indexActive + 1);
      }
    }, 200);
  };

  const renderHeadImage = (item: typeof DATA[number], index: number) => {
    const active = item.id - 1 === indexActive;
    return (
      <div
        key={index}
        onClick={() => {
          if (active) return;
          setIsShowing(false);
          resetIsShowing();
          setTimeout(() => {
            setIndexActive(item.id - 1);
          }, 200);
        }}
        className="cursor-pointer"
      >
        <HeadImage
          active={active}
          item={item}
          isShowing={isShowing}
          index={index}
        />
      </div>
    );
  };

  const DATA_ACTIVE = DATA.filter((_, index) => index === indexActive)[0];

  return (
    <div className="relative z-10 px-4">
      <div className="relative max-w-[1176px] mx-auto pt-28 pb-10 sm:py-[75px] px-2 xl:px-24">
        <div className="absolute z-10 right-1 sm:right-5 -top-10 max-w-[100px] md:max-w-none">
          <Image unoptimized src={gunPNG} alt="gun" />
        </div>
        <div className="absolute z-10 right-1 sm:right-5 -bottom-5 max-w-[100px] md:max-w-none">
          <Image unoptimized src={bulletxPNG} alt="bullet" />
        </div>
        <div className="absolute z-10 left-0 -translate-x-[30%] xl:-translate-x-[60%] top-10 max-w-[90px] sm:max-w-[180px] ">
          <Image unoptimized src={cashPng} alt="cashPng" />
        </div>

        {/* BG */}
        <div className="">
          <Image unoptimized src={gangsterBGPng} layout="fill" objectFit="cover" alt="bg" />
        </div>

        <div className="relative mt-2">
          <Heading>HUNTERS</Heading>
        </div>

        <div className="flex items-center justify-center ">
          <Prev onClick={handleClickPrev} />
          <div className="flex flex-grow flex-shrink-0 items-center justify-center mx-2.5">
            {DATA_SHOW.map(renderHeadImage)}
          </div>
          <Next onClick={handleClickNext} />
        </div>

        <div className="mt-11 flex flex-col sm:flex-row justify-center items-center">
          <div className="w-[240px] h-[344px] relative inline-flex ">
            <Transition
              key={DATA_ACTIVE.id}
              show={isShowing}
              className="w-full"
              enter="transition-all duration-300 ease-in-out"
              enterFrom="opacity-50 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-3"
            >
              <Image unoptimized
                src={DATA_ACTIVE.img}
                alt={DATA_ACTIVE.name}
                className={`scale-x-[-1]`}
                layout="fill"
                objectFit="contain"
              />
            </Transition>
          </div>
          <div className="relative mt-4 sm:mt-0 sm:ml-4 lg:ml-20">
            <Image unoptimized src={gangsterDesPNG} alt="bg" />
            <div className="absolute inset-x-6 sm:inset-x-11 top-7 bottom-7 text-center text-white overflow-y-auto hiddenScrollbar">
              <h4 className="font-mulish font-extrabold text-2xl md:text-3xl">
                {DATA_ACTIVE.name}
              </h4>
              <div
                className="mt-2.5"
                dangerouslySetInnerHTML={{ __html: DATA_ACTIVE.desc }}
              ></div>
              <div className="mt-2.5">&quot;{DATA_ACTIVE.quote}&quot;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HeadImageProps {
  active: boolean;
  isShowing: boolean;
  item: typeof DATA[number];
  index: number;
}
const HeadImage: FC<HeadImageProps> = ({ active, isShowing, item, index }) => {
  return (
    <div
      className={`flex-shrink-0 mx-2.5 relative 
      ${index === 0 || index === 4 ? "hidden lg:block" : ""} 
      ${index === 1 || index === 3 ? "hidden sm:block" : ""} 
      ${active ? "max-w-[190px]" : "max-w-[144px]"}`}
    >
      {active && <Image unoptimized src={mostWantedPNG} alt="wanted" />}
      {!active && <Image unoptimized src={active ? wantedPNG : wantedPNG} alt="wanted" />}
      <div className="absolute inset-5 flex items-center justify-center">
        {active ? (
          <Transition
            show={isShowing}
            className="w-full 333"
            enter="transform transition duration-200"
            enterFrom="opacity-0 translate-y-4 scale-75"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 translate-y-0 scale-100 "
            leaveTo="opacity-0 scale-95 translate-y-0"
          >
            <Image unoptimized
              src={item.headImg}
              alt={item.name}
              className={active ? `scale-x-[-1]` : ""}
            />
          </Transition>
        ) : (
          <Transition
            show={isShowing}
            className="w-full "
            enter="transition-all duration-100 ease-in-out"
            enterFrom={`opacity-40 scale-95 `}
            enterTo={`opacity-100 scale-100`}
            leave="transition-all duration-100 ease-in-out"
            leaveFrom={`opacity-100 scale-100`}
            leaveTo={`opacity-10 scale-95`}
          >
            <Image unoptimized
              src={item.headImg}
              alt={item.name}
              className={active ? `scale-x-[-1]` : ""}
            />
          </Transition>
        )}
      </div>
    </div>
  );
};

export default Section5Gangters;
