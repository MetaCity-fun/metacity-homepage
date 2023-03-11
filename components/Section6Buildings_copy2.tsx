import React, { FC, useEffect, useMemo, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import Prev from "./Prev";
import Next from "./Next";
//
import goldPng from "../public/images/gold.png";
import cashblockPng from "../public/images/cashblock.png";
//
import buildingBgPng from "../public/images/building.png";
import gangsterDesPNG from "../public/images/gangster-des2.png";
import building1PNG from "../public/images/buildings/1.png";
import building2PNG from "../public/images/buildings/2.png";
import building3PNG from "../public/images/buildings/3.png";
import building4PNG from "../public/images/buildings/4.png";
import building5PNG from "../public/images/buildings/5.png";
import building6PNG from "../public/images/buildings/6.png";
import building7PNG from "../public/images/buildings/7.png";
import building8PNG from "../public/images/buildings/8.png";
import building9PNG from "../public/images/buildings/9.png";
import building10PNG from "../public/images/buildings/10.png";
import building11PNG from "../public/images/buildings/11.png";
import building12PNG from "../public/images/buildings/12.png";
import building13PNG from "../public/images/buildings/13.png";
import building14PNG from "../public/images/buildings/14.png";
import building15PNG from "../public/images/buildings/15.png";
import building16PNG from "../public/images/buildings/16.png";
//
import buildingNenPNG from "../public/images/buildings/nen.png";

import Glide from "@glidejs/glide";
import { useTranslation } from "next-export-i18n";

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
  const [indexActive, setIndexActive] = useState(2);

  const UNIQUE_CLASS = "Section6Buildings-glidejs-slide";
  const UNIQUE_CLASS_2 = "Section6Buildings-glidejs-slide-2-";

  const { t } = useTranslation();

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
      gap: 10,
      bound: true,
      focusAt: "center",
      startAt: 2,
      rewindDuration: 1000,
      breakpoints: {
        1280: {
          perView: 3,
        },
        1024: {
          perView: 3,
        },
        768: {
          perView: 3,
        },
        640: {
          perView: 1,
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

  const renderHeadImage = (item: typeof DATA[number], index: number) => {
    const active = index === indexActive;
    return (
      <div
        className="nc_add_anim_float pt-5 cursor-pointer"
        onClick={() => {
          // @ts-ignore-next-line
          MY_GLIDEJS.go(`=${index}`);
        }}
      >
        <HeadImage
          indexActive={indexActive}
          active={active}
          item={item}
          index={index}
        />
      </div>
    );
  };

  const renderItem = (item: typeof DATA[number], index: number) => {
    return (
      <li className="glide__slide " key={index}>
        <div className="flex flex-col lg:flex-row justify-center items-center ">
          <div className="flex-shrink-0 relative inline-flex flex-col items-center nc_add_anim_float will-change-transform pt-5">
            <div className="z-10 w-full h-44 sm:h-72 inline-flex relative ">
              <div className="absolute inset-x-4 sm:inset-x-6 inset-y-0 inline-flex items-end justify-center">
                <Image unoptimized
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="bottom"
                />
              </div>
            </div>
            <div className="-mt-[47%] inline-flex max-w-xs sm:max-w-none">
              <Image unoptimized src={buildingNenPNG} alt={"nen"} />
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 lg:ml-16">
            <Image unoptimized src={gangsterDesPNG} alt="bg" />
            <div className="absolute inset-x-6 sm:inset-x-11 top-10 md:top-16 bottom-7 text-center text-white overflow-y-auto hiddenScrollbar">
              <h4 className="font-mulish font-extrabold text-xl sm:text-2xl lg:text-3xl">
                {item.name}
              </h4>
              <div
                className="mt-3 xl:text-xl"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div id="buildings" className="Section6Buildings relative z-10 px-4">
      <div className="relative max-w-[1176px] mx-auto pb-10 pt-28 sm:pt-36 lg:py-[95px] px-2 xl:px-24">
        {/* BG */}
        <Image unoptimized src={buildingBgPng} layout="fill" objectFit="cover" alt="bg" />

        <div className="absolute z-10 -left-2 xl:-left-12 -top-12 max-w-[120px] sm:max-w-[130px] md:max-w-none">
          <Image unoptimized src={goldPng} alt="goldPng" />
        </div>
        <div className="absolute z-10 right-1 2xl:-right-20 -bottom-8 xl:-bottom-16 max-w-[120px] sm:max-w-[200px] xl:max-w-none">
          <Image unoptimized src={cashblockPng} alt="cashblockPng" />
        </div>

        <div className="relative">
          <Heading>{t("section6-title")}</Heading>
        </div>

        <div className={`${UNIQUE_CLASS} flex items-center justify-center `}>
          <div className=" container !p-0">
            <div className="relative   flex justify-center items-center ">
              <Prev className="absolute left-0 z-10" />

              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides items-center min-h-[250px] sm:min-h-[320px]">
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
                        className={`glide__slide 
                            ${index === i0 ? "pl-16" : ""}
                            ${index === i1 ? "pr-5 2xl:pr-10" : ""}
                            ${
                              index === i2
                                ? "my-glide__slide--active mb-2 "
                                : ""
                            }
                            ${index === i3 ? "pl-5 2xl:pl-10 " : ""}
                            ${index === i4 ? "pr-16 " : ""} `}
                      >
                        {renderHeadImage(item, index)}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Next className="absolute right-0 z-10" />
            </div>
          </div>
        </div>

        <div className={UNIQUE_CLASS_2}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">{DATA.map(renderItem)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HeadImageProps {
  active: boolean;
  item: typeof DATA[number];
  index: number;
  indexActive: number;
}
const HeadImage: FC<HeadImageProps> = ({
  active,
  item,
  index,
  indexActive,
}) => {
  const i2 = indexActive;
  return (
    <div
      className={`relative z-10 flex items-center justify-center transition-all will-change-contents duration-300 
      ${index === i2 ? "px-8 sm:px-0 sm:-mx-5 2xl:-mx-10" : "mx-0"}
     `}
    >
      <div className=" flex items-end justify-center">
        <div className="w-full ">
          <Image unoptimized src={item.img} alt={item.name} className={""} />
        </div>
      </div>
    </div>
  );
};

export default Section6Buildings;
