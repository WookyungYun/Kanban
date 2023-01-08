import { Draggable } from "react-beautiful-dnd";
import ContentEditable from "react-contenteditable";

export default function KanbanItem({ item, idx }) {
  console.log(item, "item");
  console.log(idx, "idx");
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
            <ContentEditable html={item.content} disabled={false} />
          </div>
        )}
      </Draggable>
    </>
  );
}
