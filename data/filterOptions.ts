export const filterColors = [
  { color: "white", class: "bg-slate-200" },
  { color: "black", class: "bg-black" },
  { color: "gray", class: "bg-gray-500" },
  { color: "red", class: "bg-red-500" },
  { color: "violet", class: "bg-violet-600" },
  { color: "green", class: "bg-green-600" },
  { color: "pink", class: "bg-pink-500" },
  { color: "blue", class: "bg-blue-600" },
];

interface ShoesSizes {
  man: number[];
  woman: number[];
  bigKids: number[];
  smallKids: number[];
  kids: number[];
  sales: number[];
}
const man = [40, 41, 42, 43, 44, 45, 46, 47, 48];
const woman = [35, 36, 36.5, 37, 38, 38.5, 39, 40, 41, 42, 43, 44];
const smallKids = [27, 28, 29, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34];
const bigKids = [35, 35.5, 36, 37, 37.5, 38, 38.5, 39];
const kids = [...smallKids, ...bigKids];
export const shoesSizes: ShoesSizes = {
  man: man,
  woman: woman,
  bigKids: bigKids,
  smallKids: smallKids,
  kids: kids,
  sales: [...new Set<number>([...man, ...woman, ...kids])],
};
