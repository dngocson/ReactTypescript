import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
const UpdateItemQuantity = ({
  pizzaId,
  currentQuantity,
}: {
  pizzaId: number;
  currentQuantity: number;
}) => {
  const dispatch = useDispatch();
  const increaseQuantityHandler = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const decreaseQuantityHandler = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button onClick={decreaseQuantityHandler} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={increaseQuantityHandler} type="round">
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
