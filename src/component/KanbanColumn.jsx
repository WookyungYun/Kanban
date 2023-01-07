import { Droppable } from "react-beautiful-dnd";
import AddItemBtn from "./AddItemBtn";
import KanbanItem from "./KanbanItem";

export default function KanbanColumn({ key, column }) {
  console.log(
    column.items.map((item) => console.log(item)),
    "item"
  );
  return (
    <>
      <div>
        <input placeholder={column.title}></input>
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
        <AddItemBtn />
      </div>
    </>
  );
}
