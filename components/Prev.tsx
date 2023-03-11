import Image from "next/image";
import React, { FC } from "react";
import btnChevronLeftImg from "../public/images/btn-chevron-left.png";

export interface PrevProps {
  className?: string;
  onClick?: () => void;
}

const Prev: FC<PrevProps> = ({ className = "", onClick = () => {} }) => {
  return (
    <div className={`min-w-[30px] w-6 lg:w-auto ${className}`}>
      <div className="relative inline-flex" data-glide-el="controls">
        <button
          className={`absolute inset-0 z-10 opacity-0`}
          data-glide-dir="<"
          onClick={onClick}
        >
          prev
        </button>
        <Image unoptimized src={btnChevronLeftImg} alt="chevron-left" />
      </div>
    </div>
  );
};

export default Prev;
