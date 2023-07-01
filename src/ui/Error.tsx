import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButon";

interface RouteError {
  data: string;
}

function isError(error: unknown): error is RouteError {
  return typeof error === "object" && error !== null && "data" in error;
}

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {isError(error) && <p>{error.data}</p>}
      <LinkButton to="-1">← Go back</LinkButton>
    </div>
  );
}

export default Error;
