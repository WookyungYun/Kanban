import { Droppable } from "react-beautiful-dnd";
import AddItemBtn from "./AddItemBtn";
import KanbanItem from "./KanbanItem";
import ContentEditable from "react-contenteditable";

export default function KanbanColumn({ column, index }) {
  return (
    <>
      <div>
        <strong>
          <ContentEditable html={column.title} disabled={false} />
        </strong>
        <Droppable droppableId={`${index}`} index={index}>
          {(provided) => (
            <>
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {column.items.map((item, idx) => (
                  <div key={`${idx}-${item.id}`}>
                    <KanbanItem
                      item={item}
                      columnIndex={index}
                      itemIndex={idx}
                    />
                  </div>
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
