import produce from "immer";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import ContentEditable from "react-contenteditable";

export default function AddItemBtn({ index }) {
  const [open, setOpen] = useState(false);
  const text = useRef("");
  const setColumns = useSetRecoilState(columnsState);
  const onChange = (e) => {
    text.current = e.target.value;
  };

  const openInput = () => {
    setOpen((prev) => !prev);
  };

  const addCard = () => {
    if (!!text) {
      setOpen((prev) => !prev);
      setColumns((columns) => {
        const nextState = produce(columns, (draft) => {
          const items = draft[index].items;
          items.push({ id: `${items.length + 1}`, content: `${text.current}` });
        });
        return nextState;
      });
      text.current = "";
    } else {
      alert("내용을 입력하세요");
    }
  };

  return (
    <>
      {open ? (
        <div display="flex">
          <ContentEditable
            html={text.current}
            onChange={onChange}
            disabled={false}
          />
          <div>
            <button onClick={addCard}> Add Card</button>
          </div>
        </div>
      ) : (
        <button onClick={openInput}>+ Add a card</button>
      )}
    </>
  );
}
