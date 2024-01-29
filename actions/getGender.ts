import { GendersType } from "@/types";
import axios from "axios";

const URL = `${process.env.API_URL}/get-genders`;

const getGenders = async () => {
  const res: GendersType[] = (await axios.get(URL))?.data;
  return res;
};

export default getGenders;
