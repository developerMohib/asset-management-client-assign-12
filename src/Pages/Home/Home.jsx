import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import About from "./HomeComp/About/About";
import Banner from "./HomeComp/Banner/Banner";
import Packages from "./HomeComp/Packages/Packages";
import Subscription from "./HomeComp/Sebscription/Subscription";

const Home = () => {
    return (
        <div>
            <HelmetTitle routeName={'Home'}> </HelmetTitle>
            <Banner> </Banner>
            <About></About>
            <Packages></Packages>
            <Subscription> </Subscription>
        </div>
    );
};

export default Home;