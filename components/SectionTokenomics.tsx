import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import Heading from "./Heading";
import { useTranslation } from "next-export-i18n";

const SectionTokenomics = () => {
  const chartRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (!chartRef.current) return;
    var myChart = echarts.init(chartRef.current);
    window.onresize = function () {
      myChart.resize();
    };

    // Draw the chart
    myChart.setOption({
      color: [
        "#F76F72",
        "#fc70dd",
        "#b86eff",
        "#9243e0",
        "#6fbffc",
        "#90fd6e",
        "#fadf5e",
        "#fcad72",
      ],
      legend: {
        show: false,
      },
      toolbox: {
        show: false,
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius:
            window.innerWidth >= 1024
              ? ["10%", "65%"]
              : window.innerWidth >= 768
              ? ["10%", "45%"]
              : ["5%", "38%"],
          center: ["50%", "50%"],
          itemStyle: {
            borderRadius:
              window.innerWidth >= 1440
                ? 17
                : window.innerWidth >= 768
                ? 14
                : 7,
            borderColor: "#100E29",
            borderWidth:
              window.innerWidth >= 1440 ? 7 : window.innerWidth >= 768 ? 7 : 2,
          },
          label: {
            fontSize:
              window.innerWidth >= 1440
                ? 26
                : window.innerWidth >= 768
                ? 14
                : window.innerWidth >= 375
                ? 7
                : 6,
            fontFamily: "Helvetica",
            fontWeight: window.innerWidth >= 768 ? 600 : 400,
            color: "#F76F72",
          },
          labelLine:
            window.innerWidth < 768
              ? {
                  length: 10,
                  length2: 10,
                }
              : {
                  length: 20,
                  length2: 20,
                },
          data: [
            {
              value: 8,
              name: "Private Sale (8%)",
              label: { color: "#F76F72" },
            },
            {
              value: 12,
              name: "Public Sale (12%)",
              label: { color: "#fc70dd" },
            },
            {
              value: 10,
              name: "Team (10%)",
              label: { color: "#b86eff" },
            },
            {
              value: 15,
              name: "Staking Rewards (15%)",
              label: { color: "#9243e0" },
            },
            {
              value: 40,
              name: "Gaming Rewards (40%)",
              label: { color: "#6fbffc" },
            },
            {
              value: 10,
              name: "Marketing (10%)",
              label: { color: "#90fd6e" },
            },
            // {
            //   value: 15,
            //   name: "Staking Reserve (15%)",
            //   label: { color: "#fadf5e" },
            // },
            {
              value: 5,
              name: "Initial Liquidity (5%)",
              label: { color: "#fcad72" },
            },
          ],
        },
      ],
    });
  }, [chartRef]);

  return (
    <div className="SectionTokenomics bg-[#110C2A] overflow-hidden">
      <div className="relative z-10 py-20 sm:py-28 text-center">
        <Heading className="sm:mb-10">{t("TOKENOMICS")}</Heading>
        <div className=" z-10 container ">
          <div
            ref={chartRef}
            id="SectionTokenomics-id"
            className="w-full h-[300px] sm:h-[600px] "
          ></div>

          <span className="mt-10 text-[#3D96FF] font-mulish font-bold text-lg xl:text-2xl 2xl:text-3xl">
            Total Supply: 1,000,000,000 MTC
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionTokenomics;
