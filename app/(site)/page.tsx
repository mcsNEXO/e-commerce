import React from "react";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "./components/Slider";
import ClientButton from "@/components/buttons/ClientButton";

function Main() {
  return (
    <main>
      <div className="w-full min-h-[88vh] h-auto overflow-hidden relative">
        <Image
          src="/assets/images/collection0.jpg"
          className="object-cover md:object-fill"
          alt="collection"
          fill={true}
        />
      </div>
      <div className="flex flex-col mt-32 gap-32 max-w-[1980px] m-auto">
        <div>
          <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-bold">
            Discover the Latest Fashion Trends Online
          </div>
          <div className="text-xl my-1 text-gray-600 text-center">
            Explore our curated collection of stylish clothing for men and women
            <div className="flex gap-5 justify-center mt-4">
              <Button
                type="button"
                className="bg-black text-white rounded-md"
                size="lg"
              >
                Shop
              </Button>
              <Button
                type="button"
                className="bg-white border-1 border-black rounded-md"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full block md:flex justify-around gap-4">
          <div className="lg:w-1/3 md:w-1/2 w-full h-[800px] relative bg-black group flex justify-center">
            <Image
              src={"/assets/images/man.jpeg"}
              alt="man"
              className="h-auto group-hover:opacity-60 transition-opacity"
              fill={true}
              sizes=""
            />
            <ClientButton
              type="button"
              size="lg"
              className="top-1/2 absolute transition-all z-10 opacity-0 group-hover:opacity-100 font-semibold"
            >
              Explore
            </ClientButton>
          </div>
          <div className="w-1/3 h-[800px] relative bg-black group hidden lg:flex ">
            <Image
              src={"/assets/images/man-woman.jpeg"}
              alt="man-woman"
              className="h-auto hover:opacity-60 transition-opacity"
              fill={true}
              sizes=""
            />
            <div className="w-full flex px-4 flex-col justify-center h-full">
              <div className="text-black text-xl font-bold w-full flex items-center gap-2">
                <FaArrowLeftLong className="text-white" />
                <span className="bg-gray-50 px-5 rounded-lg">
                  Choose for him
                </span>
              </div>
              <div className="text-black text-xl font-bold w-full flex justify-end items-center gap-2">
                <span className="bg-gray-100 px-5 rounded-lg">
                  Choose for her
                </span>
                <FaArrowRightLong className="text-white" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full h-[800px] relative bg-black group flex justify-center">
            <Image
              src={"/assets/images/woman.jpeg"}
              alt="woman"
              className="h-auto group-hover:opacity-60 transition-opacity"
              fill={true}
              sizes=""
            />
            <ClientButton
              type="button"
              size="lg"
              className="top-1/2 absolute transition-all z-10 opacity-0 group-hover:opacity-100 font-semibold"
            >
              Explore
            </ClientButton>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:px-10 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col gap-2 lg:gap-4 lg:w-1/2 py-1 w-full px-12">
            <div className="text-4xl font-semibold ">
              Discover the Finest Collection of Sustainable and Exclusive
              Designs
            </div>
            <div className="text-lg">
              Our clothing line offers a unique selection of sustainable
              materials and exclusive designs that are sure to impress
            </div>
            <div></div>
          </div>
          <div className="relative w-11/12 font-semibold md:w-2/3 h-[300px] md:h-[350px]  rounded-xl ">
            <Image
              src="/assets/images/collection4.webp"
              fill={true}
              alt="image"
              className="rounded-xl"
            />
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col gap-2 mb-12">
            <span>Discover</span>
            <span className="text-5xl font-bold">Featured</span>
            <span className="text-lg font-semibold">
              Explore our curated selection of top products
            </span>
          </div>
          <Slider data={[1, 2, 3, 4, 5, 6, 67, 7, 8, 9, 10, 11]} />
        </div>

        <div className="bg-black bg-opacity-80 text-center md:text-start flex flex-col md:flex-row  min-h-[10rem] rounded-md items-center justify-around py-5 px-10 gap-5 md:gap-2">
          <div className="text-white font-semibold text-2xl">
            Stay up to date with the latest information! Sign up for the
            Newsletter!
          </div>
          <div className="flex gap-2 items-center">
            <Input
              color="default"
              placeholder="Enter your email"
              size="sm"
              type="text"
            />
            <Button className="text-sm font-semibold bg-neutral-300">
              Send
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
