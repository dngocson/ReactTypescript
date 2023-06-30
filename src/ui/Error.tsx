import { useNavigate, useRouteError } from "react-router-dom";

interface RouteError {
  data: string;
}

function isError(error: unknown): error is RouteError {
  return typeof error === "object" && error !== null && "data" in error;
}

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {isError(error) && <p>{error.data}</p>}
      <button onClick={() => navigate(-1)}>← Go back</button>
    </div>
  );
}

export default Error;
