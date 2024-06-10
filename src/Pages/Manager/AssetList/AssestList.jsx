import Filter from "../../../Component/Filter/Filter";
import Sort from "../../../Component/Sort/Sort";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import Search from "../../../Component/Search/Search";

const AssestList = () => {
  return (
    <div>
      <HelmetTitle routeName={"Assets List"}></HelmetTitle>
      <h1>Hi i am assest list, manager</h1>
      <div className="md:grid grid-cols-3 my-10 gap-5 ">
        <div className="grid-cols-1">
          <Search> </Search>
        </div>
        <div className="grid-cols-1">
          <Filter></Filter>
        </div>
        <div className="grid-cols-1">
          <Sort></Sort>
        </div>
      </div>
    </div>
  );
};

export default AssestList;
