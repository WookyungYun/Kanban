import { useRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
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
  return <button onClick={AddColumn}>+ Add another list</button>;
}
