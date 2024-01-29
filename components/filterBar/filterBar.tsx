import getCategories from "@/actions/getCategories";
import getTypes from "@/actions/getTypes";
import { GenderType } from "@/types";
import React from "react";
import Color from "./color";
import Size from "./size";
import Price from "./price";
import Options from "./options";
import getGenders from "@/actions/getGender";

interface FilterBarProps {
  gender: GenderType;
  category: string;
  type: string;
}

const FilterBar: React.FC<FilterBarProps> = async ({
  gender,
  category,
  type,
}) => {
  const data =
    gender && category
      ? await getTypes({ gender, category, type })
      : await getCategories({ gender });
  const options =
    gender && !category
      ? await getGenders()
      : category && !type
      ? await getCategories({ gender })
      : await getTypes({ gender, category, type });

  return (
    <div className=" bg-slate-50 w-64 py-5 h-filterBar max-h-filterBar flex flex-col gap-4 border-r-1 px-5 sticky  overflow-y-auto top-header left-0">
      <div className="border-b border-gray-500 pb-5 ">
        <span className="text-lg font-semibold tracking-wide">
          Filtered products: {0}
        </span>
      </div>
      <div className="bg-slate-100 border-y border-gray-300 py-3 px-2 rounded-lg">
        <span className="text-base font-semibold">
          {gender && category ? "Categories:" : "Types: "}
        </span>
        <div className="flex flex-col gap-1 px-1">
          {data.map((item, index: number) => (
            <span
              className="text-sm font-medium hover:underline hover:cursor-pointer hover:font-semibold transition"
              key={index}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Color />
        <Size gender={gender} />
        <Price />
        <Options
          option={
            gender && !category
              ? "gender"
              : category && !type
              ? "category"
              : "type"
          }
          type={
            gender && !category ? gender : category && !type ? category : type
          }
          data={options}
        />
      </div>
    </div>
  );
};

export default FilterBar;
