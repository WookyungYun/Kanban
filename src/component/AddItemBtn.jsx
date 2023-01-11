import produce from "immer";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import ContentEditable from "react-contenteditable";
import { InputDiv } from "../style/itemStyle";
import { AddCardButton, Button } from "../style/buttonStyle";

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

  const handleClickAddCard = () => {
    if (!!text.current) {
      setOpen((prev) => !prev);
      setColumns((columns) => {
        const nextState = produce(columns, (draft) => {
          const items = draft[index].items;
          items.push({ id: items.length + 1, content: `${text.current}` });
        });
        return nextState;
      });
      text.current = "";
    } else if (text.current === "") setOpen((prev) => !prev);
  };

  return (
    <>
      {open ? (
        <>
          <InputDiv>
            <ContentEditable
              html={text.current}
              onChange={onChange}
              disabled={false}
            />
          </InputDiv>
          <AddCardButton onClick={handleClickAddCard}> Add Card</AddCardButton>
        </>
      ) : (
        <Button onClick={openInput}>+ Add a card</Button>
      )}
    </>
  );
}
