import { createBrowserRouter } from "react-router-dom";

import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Main from "../layout/Main";
import Add_a_Toy from "../pages/Add_A_Toy/Add_a_Toy";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import MyToys from "../pages/MyToys/MyToys";
import SingleToyCar from "../pages/SingleToyCar/SingleToyCar";
import ToyCars from "../pages/ToyCars/ToyCars";
import UpdateMyToy from "../pages/UpdateMyToy/UpdateMyToy";
import LogIn from "../pages/UserAuth/LogIn/LogIn";
import SingUp from "../pages/UserAuth/SingUp/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sing-up",
        element: <SingUp></SingUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/toy-cars",
        element: <ToyCars></ToyCars>,
        loader: () =>
          fetch(`https://toy-car-marketplace-server.vercel.app/toy-cars`),
      },
      {
        path: "/toy-cars/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <SingleToyCar></SingleToyCar>{" "}
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-car-marketplace-server.vercel.app/toy-cars/${params.id}`
          ),
      },
      {
        path: "/add-a-toy",
        element: (
          <PrivateRoutes>
            <Add_a_Toy></Add_a_Toy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoutes>
            {" "}
            <MyToys></MyToys>{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-toys/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <UpdateMyToy> </UpdateMyToy>{" "}
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-car-marketplace-server.vercel.app/my-toys/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
