import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { AddColumnButton } from "../style/buttonStyle";
export default function AddColumnBtn() {
  const setColumns = useSetRecoilState(columnsState);
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
