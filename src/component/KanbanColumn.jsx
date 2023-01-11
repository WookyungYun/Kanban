import { Draggable, Droppable } from "react-beautiful-dnd";
import AddItemBtn from "./AddItemBtn";
import KanbanItem from "./KanbanItem";
import ContentEditable from "react-contenteditable";
import DeleteColumnBtn from "./DeleteColumnBtn";
import { useRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { deepCopy } from "../utils/object";
import { Container, ItemsContainer, Title } from "../style/columnStyle";
import { useEffect } from "react";

export default function KanbanColumn({ column, index, columnId }) {
  const [columns, setColumns] = useRecoilState(columnsState);
  const handleChange = (e) => {
    const clone = deepCopy(columns);
    if (e.target.value !== "") {
      clone[index].title = e.target.value;
      setColumns(clone);
    } else {
      alert("제목을 입력해주세요.");
    }
  };
  console.log(column.items.length, "column");
  return (
    <Draggable
      draggableId={`${columnId} - ${index}`}
      index={index}
      type="column"
    >
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Title>
            <ContentEditable
              html={column.title}
              disabled={false}
              onChange={handleChange}
            />
            <DeleteColumnBtn parentColumn={column} index={index} />
          </Title>
          <Droppable
            droppableId={`${index}`}
            index={index}
            key={index}
            type="task"
          >
            {(provided) => (
              <>
                <ItemsContainer
                  className={column.items.length >= 5 ? "scrollContainer" : " "}
                >
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
                </ItemsContainer>
              </>
            )}
          </Droppable>
          <AddItemBtn index={index} />
        </Container>
      )}
    </Draggable>
  );
}
