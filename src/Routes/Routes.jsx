import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import JoinEmployee from "../Pages/JoinEmployee/JoinEmployee";
import JoinHRManager from "../Pages/JoinHRManager/JoinHRManager";

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
          element: <JoinEmployee></JoinEmployee>
        },
        {
          path: "/join-manager",
          element: <JoinHRManager> </JoinHRManager>
        },
        {
          path: 'login',
          element: <Login> </Login>
        },
      ],
    },
  ]);