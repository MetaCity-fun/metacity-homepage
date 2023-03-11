import { LanguageSwitcher } from "next-export-i18n";
import { useRouter } from "next/dist/client/router";
import React, { FC, Fragment } from "react";

export interface FlagDropdownProps {}

const FlagDropdown: FC<FlagDropdownProps> = ({}) => {
  const router = useRouter();
  const { locale } = router;
  const isEn = locale === "en";

  return (
    <div className="fixed left-0 top-80 z-[5000] h-10  bg-red-500">
      <LanguageSwitcher lang="vi">vi</LanguageSwitcher> |{" "}
      <LanguageSwitcher lang="en">en</LanguageSwitcher>
    </div>
  );
};

export default FlagDropdown;
