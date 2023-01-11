import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { ListGrid } from "../style/columnStyle";
import { deepCopy } from "../utils/object";
import AddColumnBtn from "./AddColumnBtn";
import KanbanColumn from "./KanbanColumn";

export default function Kanban() {
  const [columns, setColumns] = useRecoilState(columnsState);

  console.log(columns, "columns");

  const onDragEnd = ({ destination, source, type }) => {
    if (!destination) return;
    if (type === "task") {
      const clone = deepCopy(columns);
      const from = clone[source.droppableId].items[source.index];
      clone[source.droppableId].items.splice(source.index, 1);
      clone[destination.droppableId].items.splice(destination.index, 0, from);
      setColumns(clone);
    }
    if (type === "column") {
      const clone = deepCopy(columns);
      const from = clone[source.index];
      clone.splice(source.index, 1);
      clone.splice(destination.index, 0, from);
      setColumns(clone);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-column"
          type="column"
          direction="horizontal"
        >
          {(provided) => (
            <>
              <ListGrid {...provided.droppableProps} ref={provided.innerRef}>
                {Object.entries(columns).map(([columnId, column], index) => (
                  <div key={columnId}>
                    <KanbanColumn
                      column={column}
                      index={index}
                      columnId={columnId}
                    />
                  </div>
                ))}
                {provided.placeholder}
                <AddColumnBtn />
              </ListGrid>
            </>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
