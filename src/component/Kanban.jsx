import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { columnsState } from "../store/kanban";
import AddColumnBtn from "./AddColumnBtn";
import KanbanColumn from "./KanbanColumn";

const ListGrid = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

export default function Kanban() {
  const columns = useRecoilValue(columnsState);

  const onDragEnd = (res) => {
    console.log("목표드래그");
    console.log("res", res);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <h1>This is Kanban</h1>
        <ListGrid>
          {Object.entries(columns).map(([columnId, column], index) => (
            <div key={columnId}>
              <KanbanColumn column={column} index={index} />
            </div>
          ))}
          <AddColumnBtn />
        </ListGrid>
      </DragDropContext>
    </>
  );
}
