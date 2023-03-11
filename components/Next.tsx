import Image from "next/image";
import React, { FC } from "react";
import btnChevronRightImg from "../public/images/btn-chevron-right.png";

export interface NextProps {
  className?: string;
  onClick?: () => void;
}

const Next: FC<NextProps> = ({ className = "", onClick = () => {} }) => {
  return (
    <div className={`min-w-[30px] w-6 lg:w-auto ${className}`}>
      <div className="relative inline-flex" data-glide-el="controls">
        <button
          className={`absolute inset-0 z-10 opacity-0`}
          data-glide-dir=">"
          onClick={onClick}
        >
          next
        </button>
        <Image unoptimized src={btnChevronRightImg} alt="chevron-right" />
      </div>
    </div>
  );
};

export default Next;
