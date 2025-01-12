import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Admin from "../Pages/Admin/Admin"; 
import Profile from "../Pages/Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import Payment from "../Pages/Payment/Payment";
import MyTeam from "../Pages/Employee/MyTeam/MyTeam";
import AddTeam from "../Pages/Manager/AddTeam/AddTeam";
import JoinManager from "../Pages/Register/JoinManager";
import JoinEmployee from "../Pages/Register/JoinEmployee";
import AddAsset from "../Pages/Manager/AddAsset/AddAsset";
import MyAssets from "../Pages/Employee/MyAssets/MyAssets";
import AddMore from "../Pages/Manager/AddEmployee/AddMore";
import AssesList from "../Pages/Manager/AssetList/AssestList";
import MyEmployee from "../Pages/Manager/MyEmployee/MyEmployee";
import AllRequest from "../Pages/Manager/AllRequest/AllRequest";
import AddEmployee from "../Pages/Manager/AddEmployee/AddEmployee";
import RequestAssets from "../Pages/Employee/RequestAssets/RequestAssets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErrorPage />,
    children: [
      //---------------------------- GENERAL USER  -------------------------
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/join-employee",
        element: <JoinEmployee></JoinEmployee>,
      },
      {
        path: "/join-manager",
        element: <JoinManager></JoinManager>,
      },
      {
        path: "/login",
        element: <Login> </Login>,
      },
      {
        path: "/about-us",
        element: <About> </About>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      //---------------------------- E M P L O Y E E  -------------------------
      {
        path: "/my-assets",
        element: <MyAssets></MyAssets>,
      },
      {
        path: "/request-assets",
        element: <RequestAssets> </RequestAssets>,
      },
      {
        path: "/my-team",
        element: <MyTeam></MyTeam>,
      },
      //---------------------------- M A N A G E R  -------------------------
      {
        path: "/add-asset",
        element: <AddAsset></AddAsset>,
      },
      {
        path: "/add-employee",
        element: <AddEmployee> </AddEmployee>,
      },
      {
        path: "/all-request",
        element: <AllRequest></AllRequest>,
      },
      {
        path: "/asset-list",
        element: <AssesList></AssesList>,
      },
      {
        path: "/add-team",
        element: <AddTeam></AddTeam>,
      },
      {
        path: "/my-employee",
        element: <MyEmployee></MyEmployee>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/update/package",
        element: <AddMore></AddMore>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Admin></Admin> ,
  },
]);
