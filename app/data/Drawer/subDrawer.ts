import { EnumCategories } from "./drawer";

export enum EnumType {
  AllShoes = "allShoes",
  Lifestyle = "lifestyle",
  Lifestyle2 = "lifestyle2",
  Recommended = "recommended",
  Shoes = "shoes",
  Man = "man",
  Woman = "woman",
  Kids = "kids",
  Clothes = "clothes",
  BrowseBySport = "browseBySport",
  BoysClothes = "boysClothes",
  GirlsClothes = "girlsClothes",
  BabiesAndToddlers = "babiesAndToddlers",
  Extras = "extras",
  VerveCollection = "verveCollection",
  VerveCollection2 = "verveCollection2",
  VerveCollection3 = "verveCollection3",
}

type SubmenuItem = {
  title: string;
  value?: string;
  path?: string;
  pathname?: string;
};

type DrawerItem = {
  title: string;
  path?: string;
  value?: string;
  pathname?: string;
  submenuOption: SubmenuItem[];
};

type DrawerType = {
  [key in EnumCategories]: {
    [key in EnumType]?: DrawerItem;
  };
};

export const subDrawer: DrawerType = {
  news: {
    allShoes: {
      title: "All shoes",
      submenuOption: [
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
      ],
    },
    lifestyle: {
      title: "Lifestyle",
      submenuOption: [
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
      ],
    },
    lifestyle2: {
      title: "Lifestyle",
      submenuOption: [
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
      ],
    },
  },

  man: {
    recommended: {
      title: "Recommended",
      path: "recommended",
      submenuOption: [
        {
          title: "News",
        },
        {
          title: "Bestsellery",
        },
        {
          title: "Basic Verve products",
        },
      ],
    },
    shoes: {
      title: "Shoes",
      pathname: "shoes",
      path: "man/shoes",
      submenuOption: [
        {
          title: "All shoes",
        },
        {
          title: "Lifestyle",
          value: "lifestyle",
          pathname: "man-shoes-lifestyle",
          path: "lifestyle",
        },
        {
          title: "Running",
        },
        {
          title: "Basketball",
        },
        {
          title: "Football",
        },
        {
          title: "Volleyball",
        },
        {
          title: "Training and hym",
        },
        {
          title: "Skateboard",
        },
        {
          title: "Tenis",
        },
        {
          title: "Box",
        },
      ],
    },
    clothes: {
      title: "Clothes",
      submenuOption: [
        {
          title: "All clothes",
        },
        {
          title: "Bestsellery",
        },
        {
          title: "Hooded and sweatshirts",
        },
        {
          title: "T-shirts",
        },
        {
          title: "Pants and leggings",
        },
        {
          title: "Tracksuits",
        },
        {
          title: "Matching sets",
        },
        {
          title: "Shorts",
        },
        {
          title: "Jackets and tank tops",
        },
        {
          title: "Costumes and T-shirts",
        },
        {
          title: "Polo  shirts",
        },
        {
          title: "Socks",
        },
      ],
    },
    browseBySport: {
      title: "Browse by sport",
      submenuOption: [
        {
          title: "Running",
        },
        {
          title: "Football",
        },
        {
          title: "Basketball",
        },
        {
          title: "Tenis",
        },
        {
          title: "Golf",
        },
        {
          title: "Training and gym",
        },
        {
          title: "Skateboard",
        },
        {
          title: "Yoga",
        },
      ],
    },
  },
  woman: {
    recommended: {
      title: "Recommended",
      submenuOption: [
        {
          title: "News",
        },
        {
          title: "Bestsellery",
        },
        {
          title: "Basic Verve products",
        },
      ],
    },
    shoes: {
      title: "Shoes",
      value: "shoes",
      submenuOption: [
        {
          title: "All shoes",
        },
        {
          title: "Lifestyle",
          value: "lifestyle",
        },
        {
          title: "Running",
        },
        {
          title: "Basketball",
        },
        {
          title: "Football",
        },
        {
          title: "Volleyball",
        },
        {
          title: "Training and hym",
        },
        {
          title: "Skateboard",
        },
        {
          title: "Tenis",
        },
        {
          title: "Box",
        },
      ],
    },
    clothes: {
      title: "Clothes",
      submenuOption: [
        {
          title: "All clothes",
        },
        {
          title: "Bestsellery",
        },
        {
          title: "Hooded and sweatshirts",
        },
        {
          title: "T-shirts",
        },
        {
          title: "Pants and leggings",
        },
        {
          title: "Tracksuits",
        },
        {
          title: "Matching sets",
        },
        {
          title: "Shorts",
        },
        {
          title: "Jackets and tank tops",
        },
        {
          title: "Costumes and T-shirts",
        },
        {
          title: "Polo  shirts",
        },
        {
          title: "Socks",
        },
      ],
    },
    browseBySport: {
      title: "Browse by sport",
      submenuOption: [
        {
          title: "Running",
        },
        {
          title: "Football",
        },
        {
          title: "Basketball",
        },
        {
          title: "Tenis",
        },
        {
          title: "Golf",
        },
        {
          title: "Training and gym",
        },
        {
          title: "Skateboard",
        },
        {
          title: "Yoga",
        },
      ],
    },
  },
  kids: {
    recommended: {
      title: "Recommended",
      submenuOption: [
        {
          title: "News",
        },
        {
          title: "Bestsellery",
        },
        {
          title: "Basic Verve products",
        },
      ],
    },
    shoes: {
      title: "Shoes",
      submenuOption: [
        {
          title: "All shoes",
        },
        {
          title: "All sporty shoes",
        },
        {
          title: "Baby and toddlers (17-27)",
        },
        {
          title: "Small kids (27,5-35)",
        },
        {
          title: "Big kids",
        },
        {
          title: "Lifestyle",
        },
        {
          title: "Football",
        },
        {
          title: "Running",
        },
        {
          title: "Jordan",
        },
      ],
    },
    boysClothes: {
      title: "Boys clothes",
      submenuOption: [
        {
          title: "All boys clothes",
        },
        {
          title: "Baby and toddlers (0-36M)",
        },
        {
          title: "Small kids (98-128cm)",
        },
        {
          title: "Big kids (122-170)cm",
        },
        {
          title: "Sport clothes",
        },
        {
          title: "Hooded and sweatshirts",
        },
        {
          title: "Pants and leggings",
        },
        {
          title: "Tracksuits",
        },
        {
          title: "Jackets and sleeveless jackets",
        },
        {
          title: "Shorts",
        },
        {
          title: "Costumes and T-shirts",
        },
        {
          title: "Socks",
        },
      ],
    },
    girlsClothes: {
      title: "Girls clothes",
      submenuOption: [
        {
          title: "All girls clothes",
        },
        {
          title: "Baby and toddlers (0-36M)",
        },
        {
          title: "Small kids (98-128cm)",
        },
        {
          title: "Big kids (122-170)cm",
        },
        {
          title: "Sport clothes",
        },
        {
          title: "Sports bras",
        },
        {
          title: "Hooded and sweatshirts",
        },
        {
          title: "Pants and leggings",
        },
        {
          title: "Tracksuits",
        },
        {
          title: "Jackets and sleeveless jackets",
        },
        {
          title: "Shorts",
        },
        {
          title: "Skirts and dresses",
        },
        {
          title: "Costumes and T-shirts",
        },
        {
          title: "Socks",
        },
      ],
    },
    babiesAndToddlers: {
      title: "Babies and toddlers",
      submenuOption: [
        {
          title: "Babies-girls",
        },
        {
          title: "Babies-boys",
        },
        {
          title: "All shoes for babies",
        },
        {
          title: "All clothes for babies",
        },
        {
          title: "Sets for babies",
        },
      ],
    },
    extras: {
      title: "Extras / accessories and equipment",
      submenuOption: [
        {
          title: "All extras / accessories and equipment",
        },
        {
          title: "Bags and backpacks",
        },
        {
          title: "Headwear",
        },
      ],
    },
  },
  collections: {
    verveCollection: {
      title: "Verve collection",
      submenuOption: [
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
      ],
    },
    verveCollection2: {
      title: "Verve collection",
      submenuOption: [
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
      ],
    },
    verveCollection3: {
      title: "Verve collection",
      submenuOption: [
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
        {
          title: "Verve collection",
        },
      ],
    },
  },
  sales: {
    man: {
      title: "Men",
      submenuOption: [
        {
          title: "",
        },
      ],
    },
    woman: {
      title: "Women",
      submenuOption: [
        {
          title: "",
        },
      ],
    },
    kids: {
      title: "Kids",
      submenuOption: [
        {
          title: "",
        },
      ],
    },
  },
};
