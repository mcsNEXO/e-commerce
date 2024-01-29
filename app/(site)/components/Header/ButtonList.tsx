"use client";
import { useDarkenedBg } from "@/context/DarkenedBg";
import { subDrawer } from "@/data/Drawer/subDrawer";
import { CategoryType, GenderType, GendersType } from "@/types";
import { Button, Link } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface ButtonListProps {
  genders: GendersType[];
}
const ButtonList: FC<ButtonListProps> = ({ genders }) => {
  const [currentGender, setCurrentGender] = useState<GenderType | "">("");
  const darkened = useDarkenedBg();
  const router = useRouter();

  const handleDropdown = (type: GenderType) => {
    if (currentGender !== type && type) {
      setCurrentGender("");
      setTimeout(() => {
        setCurrentGender(type);
        darkened?.handleAction(true, "header");
      }, 150);
    }
    if (currentGender === type) {
      setTimeout(() => {
        setCurrentGender("");
        darkened?.handleAction(false, "");
      }, 150);
    }
  };

  useEffect(() => {
    if (!darkened?.isOpen) {
      setCurrentGender("");
    }
  }, [darkened?.isOpen]);

  return (
    <ul className="hidden sm:flex gap-2">
      {genders?.map((gender, index) => {
        return (
          <li key={index}>
            <Button
              className={clsx(
                "bg-transparent bg-opacity-6 font-medium rounded-md border-b-2",
                currentGender === gender.value
                  ? "border-black"
                  : "border-transparent"
              )}
              onClick={() => handleDropdown(gender.value)}
              onDoubleClick={() => router.push(`/w/${gender.value}`)}
            >
              {gender.label}
            </Button>
          </li>
        );
      })}
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
              currentGender ? "opacity-100" : "opacity-0"
            )}
          >
            {currentGender &&
              Object.keys(subDrawer[currentGender]).map((typeKey, index) => {
                const item = subDrawer[currentGender][typeKey as CategoryType];
                return (
                  <div
                    className="text-lg font-semibold flex flex-col gap-2"
                    key={index}
                  >
                    <Link href={`/w/${currentGender}/${typeKey}`}>
                      {item?.label}
                    </Link>
                    <div className="flex flex-col gap-1">
                      {subDrawer[currentGender][
                        typeKey as CategoryType
                      ]?.submenuOption.map((item, index) => {
                        return (
                          <div className="text-gray-100" key={index}>
                            <Link
                              href={`/w/${currentGender}/${typeKey}/${item.value}`}
                              className="text-gray-600 hover:text-black hover:opacity-100"
                            >
                              {item?.label}
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
};

export default ButtonList;
