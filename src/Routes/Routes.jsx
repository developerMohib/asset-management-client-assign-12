import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import JoinEmployee from "../Pages/Register/JoinEmployee";
import JoinManager from "../Pages/Register/JoinManager";
import MyAssets from "../Pages/Employee/MyAssets/MyAssets";
import RequestAssets from "../Pages/Employee/RequestAssets/RequestAssets";
import MyTeam from "../Pages/Employee/MyTeam/MyTeam";
import AddAsset from "../Pages/Manager/AddAsset/AddAsset";
import AddEmployee from "../Pages/Manager/AddEmployee/AddEmployee";
import AllRequest from "../Pages/Manager/AllRequest/AllRequest";
import AssesList from "../Pages/Manager/AssetList/AssestList";
import CustomRequest from "../Pages/Manager/CustomRequest/CustomRequest";
import MyEmployee from "../Pages/Manager/MyEmployee/MyEmployee";


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
        //---------------------------- E M P L O Y E E  -------------------------  
        {
          path : '/my-assets',
          element: <MyAssets></MyAssets>
        },
        {
          path : '/request-assets',
          element: <RequestAssets> </RequestAssets>
        },
        {
          path: '/my-team',
          element: <MyTeam></MyTeam>
        },
        //---------------------------- M A N A G E R  ------------------------- 
        {
          path : '/add-asset',
          element: <AddAsset></AddAsset>
        },
        {
          path : '/add-employee',
          element: <AddEmployee> </AddEmployee>,
        },
        {
          path : '/all-request',
          element: <AllRequest></AllRequest>,
        },
        {
          path : '/asset-list',
          element: <AssesList></AssesList>,
        },
        {
          path : '/custom-request',
          element: <CustomRequest></CustomRequest>,
        },
        {
          path : '/my-employee',
          element: <MyEmployee></MyEmployee>,
        },
      ],
    },
  ]);