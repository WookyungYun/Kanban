import { Droppable } from "react-beautiful-dnd";
import AddItemBtn from "./AddItemBtn";
import KanbanItem from "./KanbanItem";
import ContentEditable from "react-contenteditable";
import DeleteColumnBtn from "./DeleteColumnBtn";
import { useRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { deepCopy } from "../utils/object";

export default function KanbanColumn({ column, index }) {
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
  return (
    <>
      <div>
        <strong>
          <ContentEditable
            html={column.title}
            disabled={false}
            onChange={handleChange}
          />
          <DeleteColumnBtn parentColumn={column} index={index} />
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
