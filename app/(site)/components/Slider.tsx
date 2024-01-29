"use client";
import ClientButton from "@/components/buttons/ClientButton";
import React, { useRef } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface SliderProps {
  data: any;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const sliderRef = useRef<React.LegacyRef<HTMLDivElement> | any>();
  return (
    <div className="group relative w-full">
      <div
        className="w-full flex overflow-hidden scroll-smooth gap-5 px-5"
        ref={sliderRef}
      >
        {data.map((item: any, index: number) => (
          <div
            className="min-w-[250px] h-[250px] border-black border-1"
            key={index}
          ></div>
        ))}
      </div>
      <div className="absolute top-0 w-full justify-between h-full items-center px-7 flex invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
        <ClientButton
          type="button"
          size="sm"
          className="bg-black bg-opacity-50"
          events={{
            onClick: () => {
              let containerWidth =
                sliderRef.current.getBoundingClientRect().width;
              sliderRef.current.scrollLeft -= containerWidth * 0.7;
            },
          }}
        >
          <FaLongArrowAltLeft className="text-3xl text-black text-opacity-70" />
        </ClientButton>
        <ClientButton
          type="button"
          size="sm"
          className=" bg-black bg-opacity-50"
          events={{
            onClick: () => {
              let containerWidth =
                sliderRef.current.getBoundingClientRect().width;
              sliderRef.current.scrollLeft += containerWidth * 0.7;
            },
          }}
        >
          <FaLongArrowAltRight className="text-3xl text-black text-opacity-70" />
        </ClientButton>
      </div>
    </div>
  );
};

export default Slider;
