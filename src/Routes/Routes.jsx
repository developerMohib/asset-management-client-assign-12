import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Dashboard from "../Pages/dashboard/Dashboard";
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
import ProductDetails from "../Component/productDetails/ProductDetails";
import Hometwo from "../Pages/Home/Hometwo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      //---------------------------- GENERAL USER  -------------------------
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/join-employee",
        element: <JoinEmployee />,
      },
      {
        path: "/join-manager",
        element: <JoinManager />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      //---------------------------- E M P L O Y E E  -------------------------
      {
        path: "/my-assets",
        element: <MyAssets />,
      },
      {
        path: "/request-assets",
        element: <RequestAssets />,
      },
      {
        path: "/my-team",
        element: <MyTeam />,
      },
      //---------------------------- M A N A G E R  -------------------------
      {
        path: "/add-asset",
        element: <AddAsset />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/all-request",
        element: <AllRequest />,
      },
      {
        path: "/asset-list",
        element: <AssesList />,
      },
      {
        path: "/add-team",
        element: <AddTeam />,
      },
      {
        path: "/my-employee",
        element: <MyEmployee />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/update/package",
        element: <AddMore />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: "home",
    element: <Hometwo />,
  },
]);
