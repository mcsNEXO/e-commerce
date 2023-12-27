"use client";
import { useDarkenedBg } from "@/app/context/DarkenedBg";
import { EnumCategories } from "@/app/data/Drawer/drawer";
import { EnumType, subDrawer } from "@/app/data/Drawer/subDrawer";
import { Button, Link } from "@nextui-org/react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

function ButtonList() {
  const [gender, setGender] = useState<EnumCategories | "">("");
  const darkened = useDarkenedBg();

  const handleDropdown = (type: EnumCategories) => {
    if (gender !== type && type) {
      setGender("");
      setTimeout(() => {
        setGender(type);
        darkened?.handleAction(true, "header");
      }, 150);
    }
    if (gender === type) {
      setTimeout(() => {
        setGender("");
        darkened?.handleAction(false, "");
      }, 150);
    }
  };

  useEffect(() => {
    if (!darkened?.isOpen) {
      setGender("");
    }
  }, [darkened?.isOpen]);

  return (
    <ul className="hidden sm:flex gap-2">
      <li>
        <Button
          className={clsx(
            "bg-transparent bg-opacity-6 font-medium rounded-md border-b-2",
            gender === EnumCategories.Man
              ? "border-black"
              : "border-transparent"
          )}
          onClick={() => handleDropdown(EnumCategories.Man)}
        >
          Man
        </Button>
      </li>
      <li className="hidden sm:block">
        <Button
          className={clsx(
            "bg-transparent bg-opacity-6 font-medium border-b-2 rounded-md",
            gender === EnumCategories.Woman
              ? "border-black"
              : "border-transparent"
          )}
          onClick={() => handleDropdown(EnumCategories.Woman)}
        >
          Woman
        </Button>
      </li>
      <li>
        <Button
          className={clsx(
            "bg-transparent bg-opacity-6 font-medium border-b-2 rounded-md",
            gender === EnumCategories.Kids
              ? "border-black"
              : "border-transparent"
          )}
          onClick={() => handleDropdown(EnumCategories.Kids)}
        >
          Kids
        </Button>
      </li>
      <li className="hidden lg:block">
        <Button
          className={clsx(
            "bg-transparent bg-opacity-6 font-medium border-b-2 rounded-md",
            gender === EnumCategories.Sales
              ? "border-black"
              : "border-transparent"
          )}
          onClick={() => handleDropdown(EnumCategories.Sales)}
        >
          Sale
        </Button>
      </li>
      <div
        className={clsx(
          "absolute top-16 mt-[5px] left-0 bg-gray-100 w-full h-[70vh] opacity-100 flex justify-center py-5 transform scale-y-1 duration-150  origin-top",
          !darkened?.isOpen && "scale-y-0 opacity-0"
        )}
      >
        <div className="text-lg font-semibold flex flex-col text-start gap-3 w-full h-full overflow-y-auto px-5">
          <div
            className={clsx(
              "flex justify-around gap-5 flex-wrap transition",
              gender ? "opacity-100" : "opacity-0"
            )}
          >
            {gender &&
              Object.keys(subDrawer[gender]).map((typeKey, index) => {
                const item = subDrawer[gender][typeKey as EnumType];
                return (
                  <div
                    className="text-lg font-semibold flex flex-col gap-2"
                    key={index}
                  >
                    {item?.title}
                    <div className="flex flex-col gap-1">
                      {subDrawer[gender][
                        typeKey as EnumType
                      ]?.submenuOption.map((item, index) => {
                        return (
                          <div className="text-gray-100" key={index}>
                            <Link
                              href={`${gender}/${typeKey}/${item.path}`}
                              className="text-gray-600 hover:text-black hover:opacity-100"
                            >
                              {item?.title}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </ul>
  );
}

export default ButtonList;
