import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = (props) => {
  return (
    <>
      <Header handleSubmit={props.handleSubmit}/>
      <Outlet />
    </>
  );
};

export default Root;
