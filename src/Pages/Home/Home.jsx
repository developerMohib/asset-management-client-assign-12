import BacktoTop from "../../Component/BacktoTop/BacktoTop";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import NotAffaliate from "../../Component/NotAffaliate/NotAffaliate";
import Spinner from "../../Component/Spinner/Spinner";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";
import About from "./HomeComp/About/About";
import Banner from "./HomeComp/Banner/Banner";
import Calender from "./HomeComp/Calender/Calender";
import EmRequPen from "./HomeComp/EmRequPen/EmRequPen";
import Event from "./HomeComp/Event/Event";
import HrPending from "./HomeComp/HrPending/HrPending";
import HrRequItem from "./HomeComp/HrRequItem/HrRequItem";
import Notice from "./HomeComp/Notice/Notice";
import Packages from "./HomeComp/Packages/Packages";
import MyPieChart from "./HomeComp/PieChart/MyPieChart";
import Subscription from "./HomeComp/Sebscription/Subscription";

const Home = () => {
  const { user, loading } = useAuth();
  const { loginUser, isLoading } = useUser();

  console.log(loginUser?.status, "just for testing");

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <HelmetTitle routeName={"Home"}> </HelmetTitle>

      {user ? (
        // after login if manager
        loginUser.status === "manager" ? (
          <div>
            <HrPending></HrPending>
            <HrRequItem></HrRequItem>
            <MyPieChart></MyPieChart>
          </div>
        ) : // after login not manager then show else part here anoter condition if employee
        loginUser.status === "employee" ? (
          <div>
            <EmRequPen> </EmRequPen>
            <Calender></Calender>
            <Event></Event>
            <Notice> </Notice>
          </div>
        ) : (
          // agter login but not manager then else here not employee then show not affaliate message
          <div>
            <NotAffaliate> </NotAffaliate>
          </div>
        )
      ) : (
        // if user not login
        <div>
          <Banner> </Banner>
          <About></About>
          <Packages></Packages>
          <Subscription> </Subscription>
        </div>
      )}
      <BacktoTop></BacktoTop>
    </div>
  );
};

export default Home;
