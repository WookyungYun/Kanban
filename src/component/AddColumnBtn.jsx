import { useRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { AddColumnButton } from "../style/buttonStyle";
export default function AddColumnBtn() {
  const [columns, setColumns] = useRecoilState(columnsState);
  const AddColumn = () => {
    setColumns((columns) => {
      return [
        ...columns,
        {
          title: "",
          items: [],
        },
      ];
    });
  };
  return (
    <AddColumnButton onClick={AddColumn}>+ Add another list</AddColumnButton>
  );
}
