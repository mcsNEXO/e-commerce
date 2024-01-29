import { CategoriesType, GenderType, GendersType } from "@/types";
import axios from "axios";

const URL = `${process.env.API_URL}/get-categories`;

type GetCategoriesType = {
  gender: GenderType;
};

const getCategories = async ({
  gender,
}: GetCategoriesType): Promise<CategoriesType[]> => {
  const res: CategoriesType[] = (await axios.get(`${URL}/${gender}`)).data;
  return res;
};

export default getCategories;
