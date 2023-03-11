import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useEffect, useState } from "react";
import comingSoonBg from "../public/images/comingSoonBg.png";
import comingsoonPng from "../public/images/comingsoon.png";
import backBtn from "../public/images/backBtn.png";
import Image from "next/image";

export interface ComingSoonProps {
  className?: string;
}

let player = null;

const ComingSoon: FC<ComingSoonProps> = ({
  children,
  className = "cursor-pointer",
}) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    // @ts-ignore
    player = new spine.SpinePlayer("ComingSoon-json-container", {
      alpha: true, // Enable player translucency
      backgroundColor: "#00000000",
      showControls: false, // Hide the player controls,
      jsonUrl: "/json/coming-soon/coming soon.json",
      atlasUrl: "/json/coming-soon/coming soon.atlas",
      showLoading: false,
      success: function () {
        setIsLoaded(true);
      },
    });
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div itemType="button" onClick={openModal} className={className}>
        {children || "Coming Soon"}
      </div>

      <div>
        <Dialog
          as="div"
          className="fixed inset-0 z-[9999] overflow-y-auto bg-[#100A20]"
          onClose={closeModal}
          open={isOpen}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0" />
            <button
              type="button"
              className="fixed top-4 right-4 z-10 text-white opacity-70 hover:opacity-100 sm:top-8 sm:right-8"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="relative my-8 inline-block w-full overflow-hidden text-left align-middle xl:px-4 2xl:px-24 ">
              <div className="relative text-center">
                <div className="-mx-28 inline-flex sm:mx-0">
                  <Image unoptimized src={comingSoonBg} alt="Coming Soon" />
                </div>
                <div className={` ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                  <div
                    id="ComingSoon-json-container"
                    className={`absolute inset-y-[19%] left-1/2 inline-flex w-full max-w-xl -translate-x-1/2 text-center`}
                  ></div>
                </div>
                <button
                  type="button"
                  className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center 2xl:bottom-3"
                  onClick={closeModal}
                >
                  <div className="inline-flex max-w-[130px] hover:opacity-80 lg:max-w-[160px] 2xl:max-w-none">
                    <Image unoptimized src={backBtn} alt="back btn" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default ComingSoon;
