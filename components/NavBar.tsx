import { Divider, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LogoDarkImg from "../public/images/Logo-slogan-1.png";
import rightBtnImg from "../public/images/nav-right-btn.png";
import ComingSoon from "./ComingSoon";
import { en, vi, ja, sp, ch, th, la, ru } from "./flags";
import NavMobile from "./NavMobile";

const ARR_LANG = [
  { lang: "en", name: "English" },
  { lang: "vi", name: "Vietnamese" },
  { lang: "ja", name: "Japanese" },
  { lang: "sp", name: "Spainish" },
  { lang: "ch", name: "Chinese" },
  { lang: "th", name: "Thai" },
  { lang: "la", name: "Lao" },
  { lang: "ru", name: "Russian" },
];

const ImageFlagSeleted = ({ lang }: { lang: string }) => {
  switch (lang) {
    case "en":
      return <Image unoptimized src={en} alt="en" className={"!h-2 !w-6"} />;
    case "vi":
      return <Image unoptimized src={vi} alt="vi" className={"!h-2 !w-6"} />;
    case "ja":
      return <Image unoptimized src={ja} alt="ja" className={"!h-2 !w-6"} />;
    case "sp":
      return <Image unoptimized src={sp} alt="sp" className={"!h-2 !w-6"} />;
    case "ch":
      return <Image unoptimized src={ch} alt="ch" className={"!h-2 !w-6"} />;
    case "th":
      return <Image unoptimized src={th} alt="th" className={"!h-2 !w-6"} />;
    case "la":
      return <Image unoptimized src={la} alt="la" className={"!h-2 !w-6"} />;
    case "ru":
      return <Image unoptimized src={ru} alt="ru" className={"!h-2 !w-6"} />;
    default:
      return <></>;
  }
};

const NavBar = () => {
  const [isOpenNavMobile, setIsOpenNavMobile] = React.useState(false);
  const [currentLang, setCurrentLang] = React.useState("en");
  const router = useRouter();

  const { t } = useTranslation();

  const NAVIGATION_DEMO = [
    // { name: t("navigations.Home"), href: "#" },
    { name: t("navigations.News"), href: "#news" },
    { name: t("navigations.Features"), href: "#features" },
    { name: t("navigations.NFT Items"), href: "#NFT-items" },
    { name: t("navigations.MTC Tokens"), href: "#MTC" },
    { name: t("navigations.Roadmap"), href: "#roadmap" },
    { name: t("navigations.Investor"), href: "#investors" },
    { name: t("navigations.Partner"), href: "#partners" },
  ];

  useEffect(() => {
    const lang = router.asPath?.match(/lang=([^&|^#]*)/)?.[1] || "en";
    setCurrentLang(lang);
  }, [router.asPath, router.locale]);

  return (
    <>
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <a className="inline-flex max-w-[110px] flex-shrink-0 lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[160px] 3xl:max-w-[190px]">
            <Image unoptimized src={LogoDarkImg} alt="logo" />
          </a>
        </Link>
        <div className="flex flex-shrink-0 items-center justify-start">
          <div className="hidden text-base text-white lg:flex xl:text-lg 2xl:text-xl">
            {NAVIGATION_DEMO.map((nav, index) => (
              <div className="" key={index}>
                <a
                  className={`group relative flex h-10 items-center justify-center rounded border-2 border-transparent px-3 leading-10 hover:border-primary xl:px-5 2xl:px-6 3xl:px-[30px] `}
                  href={nav.href}
                >
                  <span
                    className={`absolute hidden  text-primary blur-[3px] group-hover:block`}
                  >
                    {nav.name}
                  </span>
                  <span className="relative "> {nav.name}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="hidden px-[15px] lg:flex" id="area-navbar">
            <Dropdown
              menu={{
                items: ARR_LANG.map(({ lang, name }) => {
                  return {
                    label: (
                      <div className="p-[10px]  hover:bg-[#5933A9]">
                        <LanguageSwitcher lang={lang}>
                          <div className="flex items-center">
                            <ImageFlagSeleted lang={lang} />
                            <span className="ml-[10px] text-xl font-normal text-white">
                              {name}
                            </span>
                          </div>
                        </LanguageSwitcher>
                      </div>
                    ),
                    key: lang,
                  };
                }),
              }}
              trigger={["click"]}
              getPopupContainer={() =>
                document.getElementById("area-navbar") || document.body
              }
              dropdownRender={(menu) => (
                <div className="!bg-[#28164D]">{menu}</div>
              )}
            >
              <div
                className="flex w-[60px] cursor-pointer items-center justify-center hover:opacity-80 sm:h-[4rem] xl:h-[4,5rem] 3xl:h-[5rem] "
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <ImageFlagSeleted lang={currentLang} />
              </div>
            </Dropdown>
          </div>

          <div className="inline-flex flex-shrink-0 items-center space-x-2">
            <div className="relative inline-flex max-w-[120px] focus:outline-none sm:max-w-[140px] xl:ml-5 xl:max-w-[180px] 2xl:ml-10 3xl:ml-[50px] 3xl:max-w-[200px]">
              <ComingSoon className="inline-flex cursor-pointer hover:opacity-80">
                <Image unoptimized src={rightBtnImg} alt="Marketplace" />
              </ComingSoon>
            </div>
            <div
              className="block cursor-pointer text-white lg:hidden"
              onClick={() => setIsOpenNavMobile(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <NavMobile
        isOpenNavMobile={isOpenNavMobile}
        onCloseNavMobile={() => setIsOpenNavMobile(false)}
      />
    </>
  );
};

export default NavBar;
