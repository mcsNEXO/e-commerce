import { Button, Input } from "@nextui-org/react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white p-5">
      <div className="flex-col flex sm:flex-row border-b-2 border-black py-10 px-10 gap-8">
        <div className="w-full sm:w-1/2">
          <span className="text-xl font-semibold">
            Join Our Community! Register now!
          </span>
          <br />
          <span className="text-sm font-medium">
            Gain access to exclusive features and benefits that will make your
            time with us worthwhile. Register now and join a community of
            enthusiasts ready to discover new possibilities. Experience
            creativity with us! 💡🚀
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-end w-full sm:w-1/2 items-center">
          <Input
            color="default"
            placeholder="Enter your email"
            size="sm"
            type="text"
            fullWidth={false}
            className="w-fit"
          />
          <Button className="text-sm font-semibold bg-neutral-300">
            Register
          </Button>
        </div>
      </div>
      <div className="flex border-b-2 border-black py-10 px-10 gap-8 justify-between items-center">
        <div className="text-3xl font-bold hidden md:flex">Verve</div>
        <div className="flex w-full justify-center md:justify-end end gap-6 md:gap-20">
          <ul className="flex flex-col gap-1">
            <li className="text-xl font-semibold">Products</li>
            <li className="font-medium cursor-pointer hover:underline">
              Clothes
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              Accessories
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              Shoes
            </li>
            <li className="font-medium cursor-pointer hover:underline">News</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-xl font-semibold">Help</li>
            <li className="font-medium cursor-pointer hover:underline">
              Help & customer service
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              Shipping and delivery
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              Returns
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              Size chart
            </li>
          </ul>
          <ul className="flex flex-col gap-2 items-center">
            <li className="text-xl font-semibold">Socials</li>
            <li className="font-medium cursor-pointer hover:underline">
              <FaFacebook className="text-2xl" />
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              <FaInstagram className="text-2xl" />
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              <FaXTwitter className="text-2xl" />
            </li>
            <li className="font-medium cursor-pointer hover:underline">
              <FaYoutube className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-end font-semibold text-sm p-2">
        &#169; 2023 Verve All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
