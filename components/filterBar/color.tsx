"use client";
import { filterColors } from "@/data/filterOptions";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Color() {
  const search = useSearchParams();
  const [colors, setColors] = useState(search.get("color")?.split(",") ?? []);

  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(color: string) {
    const params = new URLSearchParams(search);
    if (colors.includes(color)) {
      setColors(colors.filter((x) => x !== color));
      if (colors.length === 1) {
        params.delete("color");
      } else {
        params.set("color", colors.filter((x) => x !== color).join(","));
      }
    } else {
      setColors([...colors, color]);
      params.set("color", [...colors, color].join(","));
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="bg-slate-100 py-3 rounded-lg px-2 w-full h-auto flex flex-col gap-3 border-y-small border-gray-300">
      <span className="font-semibold">Colors:</span>
      <div className="w-full flex gap-2 flex-wrap px-1">
        {filterColors?.map((item, index) => (
          <Button
            style={{ backgroundColor: `${item.color}` }}
            key={index}
            className={clsx(
              `w-8 h-8 min-w-8 ${item.class} rounded-full cursor-pointer`
            )}
            onClick={() => handleSearch(item.color)}
          >
            <div
              className={clsx(
                "text-sm text-white",
                colors.includes(item.color) ? "visible" : "invisible"
              )}
            >
              <FaCheck />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Color;
