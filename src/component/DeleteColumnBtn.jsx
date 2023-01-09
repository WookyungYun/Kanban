import { useRecoilState } from "recoil";
import { columnsState } from "../store/kanban";
import { deepCopy } from "../utils/object";
export default function DeleteColumnBtn({ parentColumn }) {
  const [columns, setColumns] = useRecoilState(columnsState);
  const onRemove = () => {
    const clone = deepCopy(columns);
    if (clone.length <= 2) {
      alert("컬럼은 최소 두개 이상이여야 합니다.");
      return setColumns(clone);
    } else
      setColumns(
        clone.filter((el) => {
          return el.title !== parentColumn.title;
        })
      );
  };
  return <div onClick={onRemove}>➖</div>;
}
