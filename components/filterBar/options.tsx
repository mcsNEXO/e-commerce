"use client";
import { TypesObject, CategoriesType, GendersType } from "@/types";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

interface OptionsProps {
  option: "gender" | "category" | "type";
  data: TypesObject[] | CategoriesType[] | GendersType[];
  type: string;
}

const Options: FC<OptionsProps> = ({ option, data, type }) => {
  const { replace } = useRouter();
  const search = useSearchParams();
  const pathname = usePathname();

  const [selected, setSelected] = React.useState<string[]>([]);
  const params = new URLSearchParams(search);

  function handleSearch(type: string[]) {
    console.log(type);
    if (type.length === 0) {
      params.delete("other");
    } else {
      params.set("other", type.join(","));
    }
    setSelected(type);
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="bg-slate-100 px-2 py-3 rounded-lg w-full h-auto flex flex-col gap-3 border-y-small border-gray-300">
      <span className="font-semibold">Other {option}:</span>
      <div className="w-full flex flex-col gap-2 flex-wrap px-1">
        <CheckboxGroup
          defaultValue={[type]}
          value={selected}
          onValueChange={(e) => handleSearch(e)}
        >
          {data?.map((item, index) => (
            <Checkbox
              key={index}
              value={item.value}
              isDisabled={type === item.value}
            >
              {item.label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default Options;
