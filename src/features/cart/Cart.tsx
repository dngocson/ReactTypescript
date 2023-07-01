import LinkButton from "../../ui/LinkButon";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../users/userSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;
  const dispath = useDispatch();
  const clearCartHandler = () => {
    dispath(clearCart());
  };
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="devide-stone-200 mt-3 divide-y border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={clearCartHandler} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
