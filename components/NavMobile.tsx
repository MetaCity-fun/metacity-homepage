import { CaretDownOutlined } from "@ant-design/icons";
import { Transition } from "@headlessui/react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { LanguageSwitcher, useTranslation } from "next-export-i18n";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, Fragment, useEffect } from "react";
import LogoDarkImg from "../public/images/Logo-slogan-1.png";
import { ch, en, ja, la, ru, sp, th, vi } from "./flags";
import { SOCIALS } from "./StickySocials";

export interface NavMobileProps {
  isOpenNavMobile: boolean;
  onCloseNavMobile: () => void;
}

type MenuItem = Required<MenuProps>["items"][number];

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

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const NavMobile: FC<NavMobileProps> = ({
  isOpenNavMobile,
  onCloseNavMobile,
}) => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = React.useState("en");
  const router = useRouter();

  const NAVIGATION_DEMO = [
    { name: t("navigations.Home"), href: "#" },
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
    console.log("lang", lang);
    setCurrentLang(lang);
  }, [router.asPath, router.locale]);

  const _urrentLang = ARR_LANG.find((item) => item.lang === currentLang);

  const items: MenuProps["items"] = [
    getItem(
      <div className="flex items-center">
        <ImageFlagSeleted lang={currentLang} />
        <span className="ml-[20px] text-xl font-normal text-white">
          {_urrentLang?.name}
        </span>
      </div>,
      "sub2",
      null,
      ARR_LANG.map(({ lang, name }) => {
        return getItem(
          <div>
            <LanguageSwitcher lang={lang}>
              <div className=" flex items-center">
                <ImageFlagSeleted lang={lang} />
                <span className="ml-[20px] text-xl font-normal text-white">
                  {name}
                </span>
              </div>
            </LanguageSwitcher>
          </div>,
          lang
        );
      })
    ),
  ];

  return (
    <div>
      <Transition
        as={Fragment}
        show={isOpenNavMobile}
        enter="duration-200 ease-out"
        enterFrom="opacity-60 -translate-x-10"
        enterTo="opacity-100 translate-x-0"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-60  -translate-x-10"
      >
        <div className="z-999 fixed inset-0 top-0 p-2 ">
          <div className="z-999 custom-scroll-nav absolute inset-0 rounded-lg bg-[#39206F] shadow-lg ring-1 ring-black ring-opacity-5 ">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href="/#"
                  className="inline-flex max-w-[120px] flex-shrink-0 sm:max-w-[140px] "
                  onClick={onCloseNavMobile}
                >
                  <Image unoptimized src={LogoDarkImg} alt="logo" />
                </a>
                <div className="-mr-2">
                  <button
                    className="inline-flex items-center justify-center rounded-md bg-[#5933A9] p-2 text-gray-300 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={onCloseNavMobile}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-5">
                  {NAVIGATION_DEMO.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={onCloseNavMobile}
                      className={`-m-3 flex items-center rounded-md p-3  hover:bg-[#5933A9]`}
                    >
                      <span className="ml-1 text-lg font-medium text-white">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
                <div className="mt-8 flex justify-start space-x-3">
                  {SOCIALS.map((item, index) => (
                    <a
                      className="inline-flex"
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                    >
                      <Image unoptimized
                        src={item.icon}
                        alt={item.name}
                        width={36}
                        height={36}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Menu
              onClick={onCloseNavMobile}
              className="bg-transparent text-xl font-normal text-white"
              mode="inline"
              items={items}
              expandIcon={<CaretDownOutlined />}
            />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default NavMobile;
