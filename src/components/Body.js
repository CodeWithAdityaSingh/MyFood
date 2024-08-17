import { Provider } from "react-redux";
import LeftSideBar from "./LeftSideBar";
import MiddleBody from "./MiddleBody";
import appStore from "../utils/AppStore";
import { Outlet } from "react-router-dom";

let Body = () => {
  return (
    <div className="flex w-screen h-screen ">
      <Provider store={appStore}>
        <LeftSideBar />
        <Outlet />
      </Provider>
    </div>
  );
};

export default Body;
