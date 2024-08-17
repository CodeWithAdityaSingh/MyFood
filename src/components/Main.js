import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import MiddleBody from "./MiddleBody";
import ResHeadInfo from "./ResHeadInfo";
import RestaurantDescription from "./RestaurantDescription";
import Cart from "./Cart";

let Main = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

let route = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MiddleBody />,
      },

      {
        path: "/info",
        element: <ResHeadInfo />,
      },
      {
        path: "/menu/:id",
        element: <RestaurantDescription />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default Main;
