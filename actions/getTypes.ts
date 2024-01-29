import { GenderType, TypesObject } from "@/types";
import axios from "axios";

const URL = `${process.env.API_URL}/get-types`;

type GetTypesType = {
  gender: GenderType;
  category: string;
  type: string;
};

const getTypes = async ({
  gender,
  category,
  type,
}: GetTypesType): Promise<TypesObject[]> => {
  const res: TypesObject[] = (
    await axios.get(`${URL}/${gender}/${category}/${type}`)
  ).data;
  return res;
};

export default getTypes;
