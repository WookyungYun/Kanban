import { Draggable } from "react-beautiful-dnd";
import ContentEditable from "react-contenteditable";
import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { deepCopy } from "../utils/object";

export default function KanbanItem({ item, columnIndex, itemIndex }) {
  const setColumns = useSetRecoilState(columnsState);
  const handleChange = (e) => {
    console.log(e.target.value);
    setColumns((columns) => {
      const clone = deepCopy(columns);
      clone[columnIndex].items[itemIndex].content = e.target.value;
      return clone;
    });
  };

  return (
    <>
      <Draggable key={item.id} draggableId={`${item.id}`} index={item.id}>
        {(provided, snapshot) => (
          <div
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
          </div>
        )}
      </Draggable>
    </>
  );
}
