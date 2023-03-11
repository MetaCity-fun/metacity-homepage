import React, { FC } from "react";

export interface VideoProps {
  className?: string;
  videoClassName?: string;
  videoId: string;
  src: string;
}

const Video: FC<VideoProps> = ({
  className = "",
  videoClassName = "w-full",
  videoId,
  src,
}) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `
                <video
                class="${videoClassName}"
                autoplay
                muted
                loop
                playsinline
                id="${videoId}"
              >
                <source src="${src}" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              `,
      }}
    ></div>
  );
};

export default Video;
