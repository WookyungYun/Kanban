import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { deepCopy } from "../utils/object";
export default function DeleteBtn({ columnIndex, itemId }) {
  const setColumns = useSetRecoilState(columnsState);

  const onRemove = () => {
    setColumns((columns) => {
      const clone = deepCopy(columns);

      // if (clone[columnIndex].items.length <= 2) {
      //   alert("삭제안됨");
      //   return clone;
      // }

      clone[columnIndex].items = clone[columnIndex].items.filter((el) => {
        return el.id !== itemId;
      });
      return clone;
    });
  };
  return <button onClick={onRemove}>❌</button>;
}
