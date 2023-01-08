import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { columnsState } from "../store/kanban";
import { deepCopy } from "../utils/object";
import AddColumnBtn from "./AddColumnBtn";
import KanbanColumn from "./KanbanColumn";

const ListGrid = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export default function Kanban() {
  const [columns, setColumns] = useRecoilState(columnsState);
  console.log(columns, "columns");
  const onDragEnd = ({ destination, source, draggableId }) => {
    console.log(destination, source, draggableId);
    if (!destination) return;

    const clone = deepCopy(columns);
    const from = clone[source.droppableId].items[source.index];
    clone[source.droppableId].items.splice(source.index, 1);
    clone[destination.droppableId].items.splice(destination.index, 0, from);
    setColumns(clone);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <h1>This is Kanban</h1>
        <ListGrid>
          {Object.entries(columns).map(([columnId, column], index) => (
            <div key={columnId}>
              <KanbanColumn column={column} index={index} columnId={columnId} />
            </div>
          ))}
          <AddColumnBtn />
        </ListGrid>
      </DragDropContext>
    </>
  );
}
