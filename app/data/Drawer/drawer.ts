export enum EnumCategories {
  News = "news",
  Man = "man",
  Woman = "woman",
  Kids = "kids",
  Collections = "collections",
  Sales = "sales",
}
export type TypeCategories = {
  id: number;
  title: string;
  path: EnumCategories;
};

export const drawer: TypeCategories[] = [
  {
    id: 1,
    title: "News",
    path: EnumCategories.News,
  },
  {
    id: 2,
    title: "Man",
    path: EnumCategories.Man,
  },
  {
    id: 3,
    title: "Woman",
    path: EnumCategories.Woman,
  },
  {
    id: 4,
    title: "Kids",
    path: EnumCategories.Kids,
  },
  {
    id: 5,
    title: "Collections",
    path: EnumCategories.Collections,
  },
  {
    id: 6,
    title: "Sale",
    path: EnumCategories.Sales,
  },
];
