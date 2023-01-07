import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
export default function AddColumnBtn() {
  const setColumns = useSetRecoilState(columnsState);
  const AddColumn = () => {
    console.log("column추가");
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
