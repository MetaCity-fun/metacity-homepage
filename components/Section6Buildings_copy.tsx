import React, { FC, useMemo, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import Prev from "./Prev";
import Next from "./Next";
//
import goldPng from "../public/images/gold.png";
import cashblockPng from "../public/images/cashblock.png";
import cashPng from "../public/images/cash.png";
//
import buildingBgPng from "../public/images/building.png";
import gangsterDesPNG from "../public/images/gangster-des2.png";
import building1PNG from "../public/images/buildings/1.1.png";
import building2PNG from "../public/images/buildings/1.2.png";
import building3PNG from "../public/images/buildings/1.3.png";
import building4PNG from "../public/images/buildings/1.4.png";
import building5PNG from "../public/images/buildings/1.5.png";
import building6PNG from "../public/images/buildings/1.6.png";
import building7PNG from "../public/images/buildings/1.7.png";
import building8PNG from "../public/images/buildings/1.8.png";
import building9PNG from "../public/images/buildings/1.9.png";
import building10PNG from "../public/images/buildings/1.10.png";
import building11PNG from "../public/images/buildings/1.11.png";
import building12PNG from "../public/images/buildings/1.12.png";
import building13PNG from "../public/images/buildings/1.13.png";
import building14PNG from "../public/images/buildings/1.14.png";
import building15PNG from "../public/images/buildings/1.15.png";
import building16PNG from "../public/images/buildings/1.16.png";
//
import buildingNenPNG from "../public/images/buildings/nen.png";

import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";

const DATA = [
  {
    id: 1,
    name: "MINI CASINO",
    desc: `If you are visiting MetaCity as a tourist, this is the most famous place! Do not miss it! Besides games, there are also activities like concerts, magic tricks, sports and so on to meet the entertainment needs of the residents of MetaCity. However, take care! Luke is here! `,
    img: building1PNG,
  },
  {
    id: 2,
    name: "SAUNA BATHS",
    desc: `The place offers services such as sauna and massage. It's great if after a tiring day of work, you can relax, improve your health, put aside your worries.`,
    img: building2PNG,
  },
  {
    id: 3,
    name: "TAKEAWAY RESTAURANT",
    desc: `This is Lie Xie's favorite restaurant every morning. Because of the nature of work, hobbies, convenience, ... this is the perfect place for busy people.`,
    img: building3PNG,
  },
  {
    id: 4,
    name: "FASHION MALL",
    desc: `The biggest fashion center in MetaCity, which offers the latest trending fashions from City World's most famous designers.`,
    img: building4PNG,
  },
  {
    id: 5,
    name: "RESEARCH INSTITUTE",
    desc: `This is the Event Center where the stars and celebrities of MetaCity converge. If you want to meet the talented stars of MetaCity like Sakura, Leao,... come here often.`,
    img: building5PNG,
  },
  {
    id: 6,
    name: "THEATRE AND CINEMA",
    desc: `Relaxing space with blockbuster movies, entertainment after every working day. This will also be an ideal dating place for MetaCity residents.`,
    img: building6PNG,
  },
  {
    id: 7,
    name: "MILLIONS LOTTERY",
    desc: `Providing entertainment game services with prizes for residents such as buying lottery tickets, lottery designs... The ultimate aim is to contribute MetaCity to be a richer and stronger City.`,
    img: building7PNG,
  },
  {
    id: 8,
    name: "TENNIS-COURT",
    desc: `The place to play and enjoy the ultimate tennis matches of MetaCity residents. Moreover, you can also meet the top players in MetaCity World.`,
    img: building8PNG,
  },
  {
    id: 9,
    name: "MODERN WAREHOUSE",
    desc: `It is a place to provide freight services with a strong team of shippers and modern means of transportation.`,
    img: building9PNG,
  },
  {
    id: 10,
    name: "PREMIUM COFFEE",
    desc: `A place to meet, talk, study groups, date, entertain and especially enjoy delicious drinks. This is also a place for city residents to meet partners and discuss work.`,
    img: building10PNG,
  },
  {
    id: 11,
    name: "PRIVATE BANK",
    desc: `Where payment, loan and financial support activities take place for MetaCity residents, making the residents' lives more convenient and modern.`,
    img: building11PNG,
  },
  {
    id: 12,
    name: "GRAND PRIX CIRCUIT",
    desc: `A racetrack for speed enthusiasts, where racers can unleash their passion. Pena is a notorious racer at MetaCity that has topped the leaderboard for two months in a row.`,
    img: building12PNG,
  },
  {
    id: 13,
    name: "INTERNATIONAL AUCTION",
    desc: `The venue provides property auction services and performs other auction-related services, enabling Hunter to purchase specials and charity items. Maria's rumors about her are easily understandable since she only visits this place to collect valuables.`,
    img: building13PNG,
  },
  {
    id: 14,
    name: "FINANCIAL CORPORATION",
    desc: `As a place to provide financial services for MetaCity residents such as: savings, deposits, loans, investments and currency exchange... To help MetaCity' economy develop more.`,
    img: building14PNG,
  },
  {
    id: 15,
    name: "GYM-FITNESS COMPLEX",
    desc: `The location provides health training services for Hunter such as sauna, massage, yoga, aerobics, Zumba, Boxing... Karina was once honored as the "Undefeated Queen" by winning a martial arts tournament held here.`,
    img: building15PNG,
  },
  {
    id: 16,
    name: "RED CARPET CENTRE",
    desc: `This is the Event Center where the stars and celebrities of MetaCity converge. If you want to meet the talented stars of MetaCity like Sakura, Leao,... come here often.`,
    img: building16PNG,
  },
];

function Section6Buildings() {
  const [indexActive, setIndexActive] = useState(3);
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 300);

  let DATA_SHOW = [];

  const i2 = indexActive;
  const i1 = i2 < 1 ? DATA.length - 1 : i2 - 1;
  const i0 = i1 < 1 ? DATA.length - 1 : i1 - 1;
  //
  const i3 = i2 <= DATA.length - 2 ? i2 + 1 : 0;
  const i4 = i3 < DATA.length - 1 ? i3 + 1 : 0;

  console.log("-------", i0, i1, i2, i3, i4);

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
      <HeadImage
        key={index}
        active={active}
        item={item}
        isShowing={isShowing}
        index={index}
        onClick={() => {
          if (active) return;
          setIsShowing(false);
          resetIsShowing();
          setTimeout(() => {
            setIndexActive(item.id - 1);
          }, 200);
        }}
      />
    );
  };

  const DATA_ACTIVE = DATA.filter((_, index) => index === indexActive)[0];

  return (
    <div className="Section6Buildings relative z-10 px-4">
      <div className="relative max-w-[1176px] mx-auto pb-10 pt-[90px] sm:pt-28 lg:pb-[95px] lg:pt-[75px]  px-2 xl:px-24">
        {/* BG */}
        <Image unoptimized src={buildingBgPng} layout="fill" objectFit="cover" alt="bg" />

        <div className="absolute z-10 -left-2 xl:-left-12 -top-12 max-w-[120px] sm:max-w-[130px] md:max-w-none">
          <Image unoptimized src={goldPng} alt="goldPng" />
        </div>
        <div className="absolute z-10 right-1 2xl:-right-20 -bottom-8 xl:-bottom-16 max-w-[120px] sm:max-w-[200px] xl:max-w-none">
          <Image unoptimized src={cashblockPng} alt="cashblockPng" />
        </div>
        <div className="absolute rotate-[80deg] z-10 left-0 -translate-x-[100%] 3xl:-translate-x-[120%]  bottom-10 max-w-[120px] sm:max-w-[200px] xl:max-w-none">
          <Image unoptimized src={cashPng} alt="cashPng" />
        </div>

        <div className="relative mt-2">
          <Heading>BUILDINGS</Heading>
        </div>

        <div className="flex items-center justify-center ">
          <div className="xl:flex-shrink-0">
            <Prev onClick={handleClickPrev} />
          </div>
          <div className="flex 3xl:flex-grow items-center justify-center mx-1.5 ">
            {DATA_SHOW.map(renderHeadImage)}
          </div>
          <div className="xl:flex-shrink-0">
            <Next onClick={handleClickNext} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-2 sm:mt-10">
          <div className="flex-shrink-0 relative inline-flex flex-col items-center ">
            <div className="z-10 w-full h-44 sm:h-72 inline-flex relative ">
              <Transition
                key={DATA_ACTIVE.id}
                show={isShowing}
                className="absolute inset-x-4 sm:inset-x-6 inset-y-0 inline-flex items-end justify-center"
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
                  layout="fill"
                  objectFit="contain"
                  objectPosition="bottom"
                />
              </Transition>
            </div>
            <div className="-mt-[47%] inline-flex max-w-xs sm:max-w-none">
              <Image unoptimized src={buildingNenPNG} alt={"nen"} />
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 lg:ml-16">
            <Image unoptimized src={gangsterDesPNG} alt="bg" />
            <div className="absolute inset-x-6 sm:inset-x-11 top-10 md:top-16 bottom-7 text-center text-white overflow-y-auto hiddenScrollbar">
              <h4 className="font-mulish font-extrabold text-xl sm:text-2xl lg:text-3xl">
                {DATA_ACTIVE.name}
              </h4>
              <div
                className="mt-2.5"
                dangerouslySetInnerHTML={{ __html: DATA_ACTIVE.desc }}
              ></div>
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
  onClick: () => void;
}
const HeadImage: FC<HeadImageProps> = ({
  active,
  isShowing,
  item,
  index,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative z-10 mx-1.5 cursor-pointer
      ${
        index === 0 || index === 4 ? "hidden lg:block w-[130px] h-[130px]" : ""
      } 
      ${
        index === 1 || index === 3
          ? "hidden sm:block w-[130px] h-[130px] md:w-[150px] md:h-[150px]"
          : ""
      } 
      ${active ? "w-[240px] lg:w-[260px] 2xl:w-[280px] h-[190px]" : ""}
      `}
    >
      <>
        {active ? (
          <Transition
            show={isShowing}
            className="w-full h-full relative"
            enter="transform transition duration-200"
            enterFrom="opacity-0 translate-y-4 scale-75"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 translate-y-0 scale-100 "
            leaveTo="opacity-0 scale-95 translate-y-0"
          >
            <Image unoptimized
              src={item.img}
              alt={item.name}
              layout="fill"
              objectFit="contain"
            />
          </Transition>
        ) : (
          <Transition
            show={isShowing}
            className="w-full h-full relative"
            enter="transition-all duration-100 ease-in-out"
            enterFrom={`opacity-40 scale-95 `}
            enterTo={`opacity-100 scale-100`}
            leave="transition-all duration-100 ease-in-out"
            leaveFrom={`opacity-100 scale-100`}
            leaveTo={`opacity-10 scale-95`}
          >
            <Image unoptimized
              src={item.img}
              className="brightness-75"
              alt={item.name}
              layout="fill"
              objectFit="contain"
            />
          </Transition>
        )}
      </>
    </div>
  );
};

export default Section6Buildings;
