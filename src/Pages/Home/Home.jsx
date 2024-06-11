import BacktoTop from "../../Component/BacktoTop/BacktoTop";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import NotAffaliate from "../../Component/NotAffaliate/NotAffaliate";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";
import About from "./HomeComp/About/About";
import Banner from "./HomeComp/Banner/Banner";
import Calender from "./HomeComp/Calender/Calender";
import Event from "./HomeComp/Event/Event";
import Notice from "./HomeComp/Notice/Notice";
import Packages from "./HomeComp/Packages/Packages";
import PieChart from "./HomeComp/PieChart/PieChart";
import Subscription from "./HomeComp/Sebscription/Subscription";

const Home = () => {
  const { user } = useAuth();
  const { loginUser } = useUser();
  console.log(loginUser.status, "just for testing");
  return (
    <div>
      <HelmetTitle routeName={"Home"}> </HelmetTitle>

      {user ? (
        // after login if manager
        loginUser.status === "manager" ? (
          <div>
            <PieChart></PieChart>
          </div>
        ) : // after login not manager then show else part here anoter condition if employee
        loginUser.status === "employee" ? (
          <div>
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
