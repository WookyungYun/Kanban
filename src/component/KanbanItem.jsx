import { Draggable } from "react-beautiful-dnd";

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
            <input placeholder={item.content} />
          </div>
        )}
      </Draggable>
    </>
  );
}
