import Image from "next/image";
import LogoDarkImg from "../public/images/Logo-slogan-1.png";
import React from "react";
import { useTranslation } from "next-export-i18n";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer relative z-10 max-w-[1680px] mx-auto px-5 mt-24">
      <div className="w-full border-t border-white mb-8"></div>
      <div className="text-white text-sm sm:text-base lg:text-[22px] flex items-center justify-between">
        <div className="inline-flex flex-col items-center justify-center flex-shrink-0 max-w-[110px] lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[160px] 3xl:max-w-[190px]">
          <span className="mb-1 sm:mb-4">{t("footer.Developed by")}</span>
          <Link href={"/"}>
            <a>
              <Image unoptimized src={LogoDarkImg} alt="logo" />
            </a>
          </Link>
        </div>

        <div className="text-right">
          {t("footer.Copyright")} <br /> {t("footer.reserved")}
        </div>
      </div>
    </div>
  );
};

export default Footer;
