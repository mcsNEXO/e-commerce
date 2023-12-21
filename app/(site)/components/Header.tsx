import { Button } from "@nextui-org/react";
import React from "react";
import {
  PiHeartBold,
  PiHeartFill,
  PiShoppingBagOpenBold,
} from "react-icons/pi";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <header className="flex justify-between p-4 overflow-clip items-center">
      <div className="text-2xl font-bold">Verve</div>
      <div className="flex gap-8">
        <ul className="flex gap-2">
          <li>
            <Button className="bg-transparent bg-opacity-6 font-medium">
              Shop now
            </Button>
          </li>
          <li>
            <Button className="bg-transparent bg-opacity-6 font-medium">
              New arrivals
            </Button>
          </li>
          <li>
            <Button className="bg-transparent bg-opacity-6 font-medium">
              Sale
            </Button>
          </li>
          <li>
            <Button className="bg-transparent bg-opacity-6 font-medium">
              Categories
            </Button>
          </li>
        </ul>
        <div className="flex gap-2">
          <button className="bg-transparent px-3 text-xl">
            <BiSearch />
          </button>
          <button className="bg-transparent px-3 text-xl">
            <PiHeartBold />
          </button>
          <button className="bg-transparent px-3 text-xl">
            <PiShoppingBagOpenBold />
          </button>
        </div>
        <div className="flex gap-2">
          <Button className="bg-white border-2 border-black">Sign up</Button>
          <Button className="bg-black text-white ">Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
