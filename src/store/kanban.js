import { atom } from "recoil";

const ItemList = [
  { id: "1", content: "공부하기" },
  { id: "2", content: "운동하기" },
  { id: "3", content: "숙제하기" },
];

export const columnsState = atom({
  key: "columns",
  default: [
    {
      title: "todo",
      items: ItemList,
    },
    {
      title: "in progress",
      items: [],
    },
    {
      title: "done",
      items: [],
    },
  ],
});
