import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
import type { ActionFunction } from "react-router-dom";

export const UpdateOrder = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};
export const action: ActionFunction = async ({ params }) => {
  const data = { priority: true };
  if (!params.orderId) return;
  await updateOrder(params.orderId, data);
  return null;
};
