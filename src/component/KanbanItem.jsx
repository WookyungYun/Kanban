import { Draggable } from "react-beautiful-dnd";
import ContentEditable from "react-contenteditable";
import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { ItemDiv } from "../style/itemStyle";
import { deepCopy } from "../utils/object";
import DeleteBtn from "./DeleteBtn";

export default function KanbanItem({ item, columnIndex, itemIndex }) {
  const setColumns = useSetRecoilState(columnsState);
  const handleChange = (e) => {
    setColumns((columns) => {
      const clone = deepCopy(columns);
      clone[columnIndex].items[itemIndex].content = e.target.value;
      return clone;
    });
  };

  return (
    <>
      <Draggable
        key={item.id}
        draggableId={`${item.content}`}
        index={itemIndex}
        type="task"
      >
        {(provided, snapshot) => (
          <ItemDiv
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ContentEditable
              html={item.content}
              disabled={false}
              onChange={handleChange}
            />
            <DeleteBtn columnIndex={columnIndex} itemId={item.id} />
          </ItemDiv>
        )}
      </Draggable>
    </>
  );
}
