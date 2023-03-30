import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <h2>Something went wrong</h2>
      <h3>{error.message}</h3>
    </>
  );
};

export default Error;
