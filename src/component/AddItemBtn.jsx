import produce from "immer";
import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";

export default function AddItemBtn({ index }) {
  const setColumns = useSetRecoilState(columnsState);
  const addItem = (e) => {
    console.log("아이템추가");
    setColumns((columns) => {
      const nextState = produce(columns, (draft) => {
        const items = draft[index].items;
        items.push({ id: `${items.length + 1}`, content: " " });
      });
      return nextState;
    });
  };

  return (
    <>
      <button onClick={addItem}>+ Add a card</button>
    </>
  );
}
