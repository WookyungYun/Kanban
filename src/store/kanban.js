import { atom } from "recoil";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const columnsState = atom({
  key: "columnState",
  default: [
    {
      title: "todo",
      items: [{ id: 1, content: "공부하기" }],
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
  effects: [localStorageEffect("todos")],
});
