import React, { FC } from "react";

export interface HeadingProps {
  className?: string;
  anchorID?: string;
}

const Heading: FC<HeadingProps> = ({
  children = "",
  anchorID = "",
  className = "mb-10 text-center",
}) => {
  return (
    <h2
      id={anchorID || undefined}
      className={`${className} text-white font-mulish font-extrabold text-[34px] 2xl:text-[40px]`}
    >
      {children}
    </h2>
  );
};

export default Heading;
