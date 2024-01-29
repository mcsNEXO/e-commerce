export type GendersType = {
  id: String;
  value: GenderType;
  label: CategoryType;
};

export type CategoriesType = {
  id: string;
  label: string;
  value: CategoryType;
};

export type TypesObject = {
  id: string;
  label: string;
  value: ProductTypes;
};
export type GenderType = "man" | "woman" | "kids" | "sales";
export type ProductTypes = "allShoes" | "lifestyle" | "running" | "football";

export type CategoryType =
  | "recommended"
  | "shoes"
  | "clothes"
  | "browseBySport"
  | "man"
  | "woman"
  | "kids"
  | "boysClothes"
  | "girlsClothes"
  | "babiesAndToddlers";
export type DrawerType = {
  label: string;
  value: GenderType;
};

export type SubDrawerType = {
  [key in GenderType]: {
    [key in CategoryType]?: DrawerItem;
  };
};
type SubmenuItem = {
  label: string;
  value: string;
};

type DrawerItem = {
  label: string;
  value: string;
  submenuOption: SubmenuItem[];
};
