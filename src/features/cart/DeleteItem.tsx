import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
const DeleteItem = ({ itemid }: { itemid: number }) => {
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    dispatch(deleteItem(itemid));
  };
  return (
    <Button type="small" onClick={deleteItemHandler}>
      Delete
    </Button>
  );
};

export default DeleteItem;
