"use client";
import { Slider, SliderValue, colors } from "@nextui-org/react";
import React from "react";
import { Button } from "../ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Price() {
  const { replace } = useRouter();
  const search = useSearchParams();
  const params = new URLSearchParams(search);

  const pathname = usePathname();

  const [value, setValue] = React.useState<SliderValue>(
    search
      .get("price")
      ?.split(",")
      .map((x) => Number(x)) ?? [0, 1000]
  );
  function handleSearch(event: "delete" | "search") {
    if (event === "delete") {
      params.delete("price");
    } else if (event === "search") {
      params.set(
        "price",
        typeof value === "number" ? value.toString() : value.join(",")
      );
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="bg-slate-100 px-2 py-3 rounded-lg w-full h-auto flex flex-col gap-3 border-y-small border-gray-300">
      <span className="font-semibold">Price:</span>
      <div className="w-full flex flex-col gap-2 flex-wrap px-1">
        <Slider
          label={true}
          formatOptions={{ style: "currency", currency: "USD" }}
          step={1}
          maxValue={1000}
          minValue={0}
          value={value}
          onChange={setValue}
          className="max-w-md"
        />
        <Button className="h-8" onClick={() => handleSearch("search")}>
          Search
        </Button>
        {search.get("price") ? (
          <Button
            variant={"destructive"}
            className="h-8"
            onClick={() => handleSearch("delete")}
          >
            Cancel
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Price;
