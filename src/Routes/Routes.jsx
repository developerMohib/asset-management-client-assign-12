import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import JoinEmployee from "../Pages/Register/JoinEmployee";
import JoinManager from "../Pages/Register/JoinManager";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root> </Root>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/join-employee",
          element: <JoinEmployee></JoinEmployee> ,
        },
        {
          path: "/join-manager",
          element: <JoinManager></JoinManager> ,
        },
        {
          path: '/login',
          element: <Login> </Login>
        },
      ],
    },
  ]);