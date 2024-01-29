"use client";
import { shoesSizes } from "@/data/filterOptions";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC, useState } from "react";

interface SizeProps {
  gender: "man" | "woman" | "kids" | "sales";
}

const Size: FC<SizeProps> = ({ gender }) => {
  const search = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [sizes, setSizes] = useState(search.get("size")?.split(",") ?? []);

  function handleSearch(size: string) {
    const params = new URLSearchParams(search);
    if (sizes.includes(size)) {
      setSizes(sizes.filter((x) => x !== size));
      if (sizes.length === 1) {
        params.delete("size");
      } else {
        params.set("size", sizes.filter((x) => x !== size).join(","));
      }
    } else {
      setSizes([...sizes, size]);
      params.set("size", [...sizes, size].join(","));
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="bg-slate-100 px-2 py-3 rounded-lg w-full h-auto flex flex-col gap-3 border-y-small border-gray-300">
      <span className="font-semibold">Sizes:</span>
      <div className="w-full flex gap-2 flex-wrap px-1">
        {shoesSizes[gender]?.map((size) => (
          <Button
            key={size}
            className={clsx(
              `w-10 h-7 min-w-10 relative rounded-sm cursor-pointer  flex justify-center items-center text-sm font-medium hover:bg-slate-300`,
              sizes.includes(size.toString()) ? "bg-slate-300" : "bg-slate-200"
            )}
            onClick={() => handleSearch(size.toString())}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Size;
