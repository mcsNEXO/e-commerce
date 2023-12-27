import { Button } from "@nextui-org/react";
import React from "react";
import { PiHeartBold, PiShoppingBagOpenBold } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { CheckingAuth } from "@/app/func/index";
import Drawer from "./Drawer";
import ProfileButton from "@/app/components/buttons/ProfileButton";
import ButtonList from "./ButtonList";

function Header() {
  return (
    <>
      <header className="flex justify-between p-4 items-center sticky top-0 left-0 z-50 bg-gray-100 border-b-2 overflow-x-clip">
        <div className="text-2xl font-bold hidden mm:flex">Verve</div>
        <div className="flex gap-2 sm:gap-8">
          <ButtonList />

          <div className="flex gap-2 items-center">
            <button className="bg-transparent px-3 text-xl">
              <BiSearch />
            </button>
            <button className="bg-transparent px-3 text-xl hidden vsm:flex">
              <PiHeartBold />
            </button>
            <button className="bg-transparent px-3 text-xl hidden vsm:flex">
              <PiShoppingBagOpenBold />
            </button>
            <ProfileButton />
          </div>
          <CheckingAuth>
            <div className="flex gap-2">
              <Button className="bg-white border-2 border-black hidden mbig:block">
                <Link href="sign-up">Sign up</Link>
              </Button>
              <Button className="bg-black text-white hidden mbig:block">
                <Link href="sign-in">Log in</Link>
              </Button>
            </div>
          </CheckingAuth>

          <Drawer />
        </div>
      </header>
    </>
  );
}

export default Header;
