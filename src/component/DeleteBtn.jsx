import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { deepCopy } from "../utils/object";
export default function DeleteBtn({ columnIndex, itemId }) {
  const setColumns = useSetRecoilState(columnsState);

  const onRemove = () => {
    setColumns((columns) => {
      const clone = deepCopy(columns);
      clone[columnIndex].items = clone[columnIndex].items.filter((el) => {
        return el.id !== itemId;
      });
      return clone;
    });
  };
  return <div onClick={onRemove}>❌</div>;
}
