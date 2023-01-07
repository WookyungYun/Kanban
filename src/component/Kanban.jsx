import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import AddColumnBtn from "./AddColumnBtn";
import KanbanColumn from "./KanbanColumn";

const ListGrid = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;
const ItemList = [
  { id: "1", content: "공부하기" },
  { id: "2", content: "운동하기" },
  { id: "3", content: "숙제하기" },
];
const ColumnList = [
  {
    title: "todo",
    items: ItemList,
  },
  {
    title: "in progress",
    items: [],
  },
  {
    title: "done",
    items: [],
  },
];

export default function Kanban() {
  const [columns, setColumns] = useState(ColumnList);

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
