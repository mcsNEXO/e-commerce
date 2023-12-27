"use client";
import ClientButton from "@/app/components/buttons/ClientButton";
import { drawer } from "@/app/data/Drawer/drawer";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { EnumType, subDrawer } from "@/app/data/Drawer/subDrawer";
import { EnumCategories } from "@/app/data/Drawer/drawer";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

function Drawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [gender, setGender] = useState<EnumCategories | "">("");
  const [category, setCatergory] = useState<string | "">("");
  const [type, setType] = useState<string | "">("");

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <>
      <button className="block sm:hidden" onClick={handleIsOpen}>
        <BiMenu className="text-2xl" />
      </button>
      <div
        className={clsx(
          "absolute top-0 left-0 transition-all w-full min-h-[100vh] h-full bg-white z-10 overflow-x-hidden overflow-y-auto",
          !isOpen && "-translate-y-full",
          !gender && "h-[100vh]"
        )}
      >
        <div className="relative w-full h-full bg-white">
          <div className={clsx("w-full z-10 relative transition-transform")}>
            <ClientButton
              type="button"
              size="md"
              events={{ onClick: handleIsOpen }}
              className="absolute right-2 top-2 min-w-[50px] text-xl bg-slate-200"
            >
              <IoMdClose />
            </ClientButton>
            <div>
              <div className="flex justify-center items-center p-5 border-b-2 border-black">
                <Image src="/logo.svg" alt={"logo"} width={100} height={100} />
              </div>
              <div className="mt-2 flex flex-col gap-5">
                {drawer.map((item, index) => {
                  return (
                    <ClientButton
                      size="md"
                      className="flex font-semibold bg-neutral-100 text-lg justify-center items-center h-14 border"
                      key={index}
                      events={{
                        onClick: () => setGender(item.path),
                      }}
                    >
                      {item.title}
                    </ClientButton>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "absolute top-0 left-0 w-full h-full z-30 transition-all bg-white",
              !gender && "translate-x-full"
            )}
          >
            <ClientButton
              type="button"
              size="md"
              events={{ onClick: () => setGender("") }}
              className="absolute top-2 left-2 min-w-[50px] text-xl bg-slate-200"
            >
              <FaArrowLeft />
            </ClientButton>
            <div className="flex justify-center items-center p-5 border-b-2 border-black text-3xl font-bold capitalize">
              {gender}
            </div>
            <div className="mt-2 flex flex-col gap-5">
              {gender !== "" &&
                Object.keys(subDrawer[gender]).map((typeKey, index) => {
                  const item = subDrawer[gender][typeKey as EnumType];
                  return (
                    <ClientButton
                      size="md"
                      className="flex font-semibold bg-neutral-100 text-lg justify-center items-center h-14 border"
                      key={index}
                      events={{
                        onClick: () => setCatergory(item?.pathname ?? ""),
                      }}
                    >
                      {item?.title}
                    </ClientButton>
                  );
                })}
            </div>
          </div>

          <div
            className={clsx(
              "absolute top-0 left-0 w-full h-full z-30 transition-all bg-white",
              !category && "translate-x-full"
            )}
          >
            <ClientButton
              type="button"
              size="md"
              events={{ onClick: () => setCatergory("") }}
              className="absolute top-2 left-2 min-w-[50px] text-xl bg-slate-200"
            >
              <FaArrowLeft />
            </ClientButton>
            <div className="flex justify-center items-center p-5 border-b-2 border-black text-3xl font-bold capitalize">
              {category}
            </div>
            <div className="mt-2 flex flex-col gap-5">
              {category !== "" &&
                gender !== "" &&
                subDrawer[gender][category as EnumType]?.submenuOption.map(
                  (item, index) => {
                    return (
                      <ClientButton
                        size="md"
                        className="flex font-semibold bg-neutral-100 text-lg justify-center items-center h-14 border"
                        key={index}
                        events={{ onClick: () => setType(item?.path ?? "") }}
                      >
                        <Link href={`${gender}/${category}/${type}`}>
                          {item?.title}
                        </Link>
                      </ClientButton>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
