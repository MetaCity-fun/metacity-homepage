import React, { FC, useEffect, useMemo, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import Prev from "./Prev";
import Next from "./Next";
//
import goldPng from "../public/images/gold.png";
import cashblockPng from "../public/images/cashblock.png";
//
import buildingMobileBgPng from "../public/images/building-mobile.png";
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
import { useIntersection } from "react-use";

const DATA = [
  {
    id: "Section6Buildings-spine-one",
    name: "MINI CASINO",
    desc: `If you are visiting MetaCity as a tourist, this is the most famous place! Do not miss it! Besides games, there are also activities like concerts, magic tricks, sports and so on to meet the entertainment needs of the residents of MetaCity. However, take care! Luke is here! `,
    img: building1PNG,
    json: {
      jsonUrl: "/json/building-json/1-1/1-1.json",
      atlasUrl: "/json/building-json/1-1/1-1.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-2",
    name: "SAUNA BATHS",
    desc: `The place offers services such as sauna and massage. It's great if after a tiring day of work, you can relax, improve your health, put aside your worries.`,
    img: building2PNG,
    json: {
      jsonUrl: "/json/building-json/1-2/1-2.json",
      atlasUrl: "/json/building-json/1-2/1-2.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-3",
    name: "TAKEAWAY RESTAURANT",
    desc: `This is Lie Xie's favorite restaurant every morning. Because of the nature of work, hobbies, convenience, ... this is the perfect place for busy people.`,
    img: building3PNG,
    json: {
      jsonUrl: "/json/building-json/1-3/1-3.json",
      atlasUrl: "/json/building-json/1-3/1-3.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-4",
    name: "FASHION MALL",
    desc: `The biggest fashion center in MetaCity, which offers the latest trending fashions from City World's most famous designers.`,
    img: building4PNG,
    json: {
      jsonUrl: "/json/building-json/1-4/1-4.json",
      atlasUrl: "/json/building-json/1-4/1-4.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-5",
    name: "RESEARCH INSTITUTE",
    desc: `Dedicated to human civilization, Pandini spent most of his life here because of his passion for scientific research with the dream of bringing people to live in space. It is also known as the building with the most advanced and modern technology in the MetaCity.`,
    img: building5PNG,
    json: {
      jsonUrl: "/json/building-json/2-1/2-1.json",
      atlasUrl: "/json/building-json/2-1/2-1.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-6",
    name: "THEATRE AND CINEMA",
    desc: `Relaxing space with blockbuster movies, entertainment after every working day. This will also be an ideal dating place for MetaCity residents.`,
    img: building6PNG,
    json: {
      jsonUrl: "/json/building-json/2-2/2-2.json",
      atlasUrl: "/json/building-json/2-2/2-2.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-7",
    name: "MILLIONS LOTTERY",
    desc: `Providing entertainment game services with prizes for residents such as buying lottery tickets, lottery designs... The ultimate aim is to contribute MetaCity to be a richer and stronger City.`,
    img: building7PNG,
    json: {
      jsonUrl: "/json/building-json/2-3/2-3.json",
      atlasUrl: "/json/building-json/2-3/2-3.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-8",
    name: "TENNIS-COURT",
    desc: `The place to play and enjoy the ultimate tennis matches of MetaCity residents. Moreover, you can also meet the top players in MetaCity World.`,
    img: building8PNG,
    json: {
      jsonUrl: "/json/building-json/2-4/2-4.json",
      atlasUrl: "/json/building-json/2-4/2-4.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-9",
    name: "MODERN WAREHOUSE",
    desc: `It is a place to provide freight services with a strong team of shippers and modern means of transportation.`,
    img: building9PNG,
    json: {
      jsonUrl: "/json/building-json/3-1/3-1.json",
      atlasUrl: "/json/building-json/3-1/3-1.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-ten",
    name: "PREMIUM COFFEE",
    desc: `A place to meet, talk, study groups, date, entertain and especially enjoy delicious drinks. This is also a place for city residents to meet partners and discuss work.`,
    img: building10PNG,
    json: {
      jsonUrl: "/json/building-json/3-2/3-2.json",
      atlasUrl: "/json/building-json/3-2/3-2.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-11",
    name: "PRIVATE BANK",
    desc: `Where payment, loan and financial support activities take place for MetaCity residents, making the residents' lives more convenient and modern.`,
    img: building11PNG,
    json: {
      jsonUrl: "/json/building-json/3-3/3-3.json",
      atlasUrl: "/json/building-json/3-3/3-3.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-12",
    name: "GRAND PRIX CIRCUIT",
    desc: `A racetrack for speed enthusiasts, where racers can unleash their passion. Pena is a notorious racer at MetaCity that has topped the leaderboard for two months in a row.`,
    img: building12PNG,
    json: {
      jsonUrl: "/json/building-json/3-4/3-4.json",
      atlasUrl: "/json/building-json/3-4/3-4.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-13",
    name: "INTERNATIONAL AUCTION",
    desc: `The venue provides property auction services and performs other auction-related services, enabling Hunter to purchase specials and charity items. Maria's rumors about her are easily understandable since she only visits this place to collect valuables.`,
    img: building13PNG,
    json: {
      jsonUrl: "/json/building-json/4-1/4-1.json",
      atlasUrl: "/json/building-json/4-1/4-1.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-14",
    name: "FINANCIAL CORPORATION",
    desc: `As a place to provide financial services for MetaCity residents such as: savings, deposits, loans, investments and currency exchange... To help MetaCity' economy develop more.`,
    img: building14PNG,
    json: {
      jsonUrl: "/json/building-json/4-2/4-2.json",
      atlasUrl: "/json/building-json/4-2/4-2.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-15",
    name: "GYM-FITNESS COMPLEX",
    desc: `The location provides health training services for Hunter such as sauna, massage, yoga, aerobics, Zumba, Boxing... Karina was once honored as the "Undefeated Queen" by winning a martial arts tournament held here.`,
    img: building15PNG,
    json: {
      jsonUrl: "/json/building-json/4-3/4-3.json",
      atlasUrl: "/json/building-json/4-3/4-3.atlas",
    },
  },
  {
    id: "Section6Buildings-spine-16",
    name: "RED CARPET CENTRE",
    desc: `This is the Event Center where the stars and celebrities of MetaCity converge. If you want to meet the talented stars of MetaCity like Sakura, Leao,... come here often.`,
    img: building16PNG,
    json: {
      jsonUrl: "/json/building-json/4-5/4-5.json",
      atlasUrl: "/json/building-json/4-5/4-5.atlas",
    },
  },
];

function Section6Buildings() {
  const [indexActive, setIndexActive] = useState(2);
  const intersectionRef = React.useRef(null);

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "2000px",
    threshold: 0.1,
  });

  const UNIQUE_CLASS = "Section6Buildings-glidejs-slide";
  const UNIQUE_CLASS_2 = "Section6Buildings-glidejs-slide-2-";

  const { t } = useTranslation();

  let MY_GLIDEJS_2 = useMemo(() => {
    return new Glide(`.${UNIQUE_CLASS_2}`, {
      startAt: 2,
      swipeThreshold: false,
      dragThreshold: false,
      rewind: false,
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

  useEffect(() => {
    if (!intersection || !intersection.isIntersecting) return;

    // console.log(123, "---------- spine for section building ----------");

    // REMOVE ALL SPINE WHEN RUN SLIDER
    DATA.forEach((element) => {
      const { id } = element;
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = "";
      }
      // @ts-ignore-next-line
      new spine.SpinePlayer(element.id, {
        alpha: true, // Enable player translucency
        backgroundColor: "#00000000",
        showControls: false, // Hide the player controls,
        jsonUrl: element.json.jsonUrl,
        atlasUrl: element.json.atlasUrl,
        showLoading: false,
      });
    });
  }, [intersection]);

  const renderHeadImage = (item: typeof DATA[number], index: number) => {
    const active = index === indexActive;
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
          active={active}
          item={item}
          index={index}
        />
      </div>
    );
  };

  const renderItem = (item: typeof DATA[number], index: number) => {
    return (
      <li className="glide__slide " key={item.id}>
        <div className="flex flex-col lg:flex-row justify-center items-center ">
          {/* LEFT */}
          <div className="relative flex flex-col items-center pt-10">
            <div className="z-10 w-full  flex-shrink-0">
              <div className="relative w-full pt-[50%] ">
                <div className="absolute -inset-[25%]">
                  <div id={item.id}></div>
                </div>
              </div>
            </div>
            <div className="-mt-[41%] inline-flex max-w-xs sm:max-w-none">
              <Image unoptimized src={buildingNenPNG} alt={"nen"} />
            </div>
          </div>

          {/* RIGHT */}
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
    <div id="buildings" className="Section6Buildings relative z-10">
      <div
        ref={intersectionRef}
        className="relative max-w-[1176px] mx-auto md:pb-20 pt-[14.5%] sm:pt-28 lg:py-[60px] px-4 xl:px-24"
      >
        {/* BG */}
        <div className="hidden sm:inline-flex">
          <Image unoptimized src={buildingBgPng} layout="fill" objectFit="cover" alt="bg" />
        </div>
        <div className="inline-flex absolute inset-0 bottom-48 sm:hidden">
          <Image unoptimized
            src={buildingMobileBgPng}
            layout="fill"
            objectFit="cover"
            objectPosition={"50% top"}
            alt="bg"
          />
        </div>

        <div className="absolute z-10 -left-2 xl:-left-12 -top-12 max-w-[120px] sm:max-w-[130px] md:max-w-none">
          <Image unoptimized src={goldPng} alt="goldPng" />
        </div>
        <div className="hidden sm:inline-block absolute z-10 right-1 2xl:-right-20 -bottom-8 xl:-bottom-16 max-w-[120px] sm:max-w-[200px] xl:max-w-none">
          <Image unoptimized src={cashblockPng} alt="cashblockPng" />
        </div>

        <div className="relative">
          <Heading>{t("section6-title")}</Heading>
        </div>

        <div className={`${UNIQUE_CLASS} flex items-center justify-center `}>
          <div className=" container !p-0">
            <div className="relative  flex justify-center items-center ">
              <Prev className="xl:absolute left-0 z-10" />

              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides items-center min-h-[160px] sm:min-h-[320px]">
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

              <Next className="xl:absolute right-0 z-10" />
            </div>
          </div>
        </div>

        <div className={`${UNIQUE_CLASS_2} sm:mt-0`}>
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
  item: any;
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
      ${index === i2 ? "-mx-5 2xl:-mx-10" : "mx-0"}
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
