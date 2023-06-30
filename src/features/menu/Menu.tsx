import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { PizzaProps } from "../../type/type";
function Menu() {
  const menu = useLoaderData() as PizzaProps[];

  return (
    <ul>
      {menu.map((pizza: PizzaProps) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
