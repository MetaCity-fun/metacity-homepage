import React from "react";
import combPng from "../public/images/socials/com-b.png";
import combP2ng from "../public/images/socials/com-b2.png";
import fbImg from "../public/images/socials/fb.png";
import disImg from "../public/images/socials/dis.png";
import telImg from "../public/images/socials/tel.png";
import twImg from "../public/images/socials/tw.png";
import subtImg from "../public/images/socials/subt.png";
import Image from "next/image";

export const SOCIALS = [
  {
    name: "Telegram",
    icon: telImg,
    href: "https://t.me/MetaCityAnnouncement",
  },
  {
    name: "Twitter",
    icon: twImg,
    href: "https://twitter.com/mtc_metacity",
  },
  // {
  //   name: "Discord",
  //   icon: disImg,
  //   href: "https://discord.gg/2udDgSms2G",
  // },
  // {
  //   name: "Substack",
  //   icon: subtImg,
  //   href: "https://metacity.substack.com/",
  // },
  // {
  //   name: "Facebook",
  //   icon: fbImg,
  //   href: "https://www.facebook.com/mtc.metacity/",
  // },
];

const StickySocials = () => {
  return (
    <div className="fixed hidden lg:flex flex-col right-0 top-[44%] -translate-y-1/2 mb-20 z-40 max-w-[60px] 2xl:max-w-none">
      <Image unoptimized src={combPng} alt="comBpng" />
      <div className="pl-[3px]">
        <div className=" flex flex-col items-center justify-center space-y-2.5 bg-black/50 py-[18px]">
          {SOCIALS.map((item, index) => (
            <a
              key={index}
              className={`flex w-full flex-1 relative hover:shadow-2xl hover:opacity-70 transition-opacity duration-200  max-w-[40px] 2xl:max-w-[50px]`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Image unoptimized src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
      <Image unoptimized src={combP2ng} alt="comBpng2" />
    </div>
  );
};

export default StickySocials;
