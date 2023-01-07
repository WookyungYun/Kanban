import { Draggable } from "react-beautiful-dnd";
import ContentEditable from "react-contenteditable";
export default function KanbanItem({ item, index }) {
  return (
    <>
      <Draggable key={item.id} draggableId={item.id} index={index}>
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
