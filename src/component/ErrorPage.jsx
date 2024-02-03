import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return <div>Error -{err.statusText}</div>;
};

export default ErrorPage;
