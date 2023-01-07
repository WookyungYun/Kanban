import { Droppable } from "react-beautiful-dnd";
import AddItemBtn from "./AddItemBtn";
import KanbanItem from "./KanbanItem";
import ContentEditable from "react-contenteditable";

export default function KanbanColumn({ key, column, index }) {
  console.log(
    column.items.map((item) => console.log(item)),
    "item"
  );
  return (
    <>
      <div>
        <strong>
          <ContentEditable html={column.title} disabled={false} />
        </strong>
        <Droppable droppableId={column.title}>
          {(provided) => (
            <>
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {column.items.map((item, index) => (
                  <KanbanItem key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            </>
          )}
        </Droppable>
        <AddItemBtn index={index} />
      </div>
    </>
  );
}
