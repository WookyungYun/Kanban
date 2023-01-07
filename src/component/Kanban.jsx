import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
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
  const [columns, setColumns] = useRecoilState(columnsState);

  const onDragEnd = (res) => {
    console.log("목표드래그");
    console.log("res", res);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>This is Kanban</div>
        <ListGrid>
          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId}>
              <KanbanColumn column={column} />
            </div>
          ))}

          <AddColumnBtn />
        </ListGrid>
      </DragDropContext>
    </>
  );
}
