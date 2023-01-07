import { atom } from "recoil";

export const itemListState = atom({
  key: "itemListState",
  default: [{ id: "1", content: "공부하기" }],
});

export const columnsState = atom({
  key: "columnsState",
  default: [
    {
      title: "todo",
      items: [
        { id: "1", content: "공부하기" },
        { id: "2", content: "cd" },
      ],
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
