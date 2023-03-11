import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Section2Video from "../components/Section2Video";
import Section3News from "../components/Section3News";
import Section4Features from "../components/Section4Features";
import bgPatSeamless3png from "../public/images/Group315BG.png";
import teamBg1Png from "../public/images/team-bg1.png";
import Section5Gangters from "../components/Section5Gangters";
import Section6Buildings from "../components/Section6Buildings";
import Section7CBT from "../components/Section7CBT";
import Section8TeamSlider from "../components/Section8TeamSlider";
import Section9Roadmap from "../components/Section9Roadmap";
import roadmapBG from "../public/images/roadmapBG.png";
import partnerBG from "../public/images/partnerBG.png";
import Section10Partner from "../components/Section10Partner";
import Footer from "../components/Footer";
import bgpatseamless7png from "../public/images/bg-pat-seamless7.png";
import Script from "next/script";
import MoneyDropAnimation from "../components/MoneyDropAnimation";
import { useTranslation } from "next-export-i18n";
import FlagDropdown from "../components/FlagDropdown";
import SectionTokenomics from "../components/SectionTokenomics";
import SectionHowToBuy from "../components/SectionHowToBuy";
import SectionAsSeenOn from "../components/SectionAsSeenOn";
import SectionFAQ from "../components/SectionFAQ";
import SectionAdvisors from "../components/SectionAdvisors";
import StickySocials from "../components/StickySocials";

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#180F33] ">
      <Head>
        <title>{t("app-title")}</title>
      </Head>

      <Script
        id="esotericsoftware"
        src="/spine-player.js"
        strategy="beforeInteractive"
      ></Script>

      {/* i18 */}
      {/* <FlagDropdown /> */}

      {/* HEADER NAVBAR */}
      <Header />

      {/* STICKY SOCIALS */}
      <StickySocials />

      <div className="relative overflow-hidden">
        <MoneyDropAnimation />

        <div className="space-y-36  pt-20 sm:pt-24 xl:space-y-[200px]  3xl:pt-36">
          {/* Section2Video */}
          <Section2Video />

          {/* Section3News */}
          <Section3News />
        </div>

        <div className="-- relative space-y-36 py-36 xl:space-y-[200px] xl:py-[200px] ">
          {/* LINE BULLET */}
          <div className="container relative z-10 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={"/images/bullet.png"} alt="bullet" />
          </div>

          {/* Section4Features */}
          <Section4Features />

          <div className="md:py-12">
            <Section5Gangters />
          </div>

          {/* Section6Buildings */}
          <Section6Buildings />

          <div className="absolute inset-0 z-0 !m-0">
            <Image unoptimized
              src={bgPatSeamless3png}
              alt="bgPatSeamless3png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="relative py-20 xl:py-36 ">
          <Section7CBT />
          <Image unoptimized src={teamBg1Png} alt="a" layout="fill" objectFit="cover" />
        </div>

        <>
          {/* <SectionTokenomics /> */}
          <SectionHowToBuy />
        </>

        {/* <div className="-- relative space-y-36 py-28  xl:space-y-[200px] xl:py-[160px] ">
          <Section8TeamSlider />
          <SectionAdvisors />
          <Image unoptimized src={teamBg1Png} alt="" layout="fill" objectFit="cover" />
        </div> */}

        <div className="relative py-36 xl:py-[150px] ">
          <Section9Roadmap />
          <Image unoptimized src={roadmapBG} alt="" layout="fill" objectFit="cover" />
        </div>

        <div className="relative py-20 ">
          <Section10Partner />
          {/* <SectionAsSeenOn /> */}
          <Image unoptimized src={partnerBG} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="relative">
        <div className="flow-root">
          <div className="relative overflow-hidden pt-20 pb-8 xl:pt-[150px]">
            <SectionFAQ />

            <Footer />
            <div className="absolute inset-x-0 top-28 h-[1400px]">
              <Image unoptimized
                src={bgpatseamless7png}
                alt="bg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default HomePage;
