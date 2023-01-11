import { atom } from "recoil";

export const columnsState = atom({
  key: "columnState",
  default: [
    {
      title: "todo",
      items: [
        { id: 1, content: "공부하기" },
        { id: 2, content: "cd" },
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
