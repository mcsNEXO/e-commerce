"use client";
import { useDarkenedBg } from "@/context/DarkenedBg";
import clsx from "clsx";
import React from "react";

function DarkenedBackground() {
  const darkend = useDarkenedBg();
  return (
    <div
      onClick={() => darkend?.handleAction(false, "")}
      className={clsx(
        "w-full h-full bg-black absolute top-0 left-0 z-10 bg-opacity-0 transition block",
        darkend?.isOpen &&
          darkend?.action === "header" &&
          "bg-opacity-0 sm:bg-opacity-70 ",
        darkend?.isOpen && !darkend.action && "bg-opacity-70",
        !darkend?.isOpen && "hidden"
      )}
    ></div>
  );
}
export default DarkenedBackground;
