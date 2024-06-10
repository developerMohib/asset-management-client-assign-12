import Search from "../../../Component/Search/Search";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";

const AllRequest = () => {
  return (
    <div>
      <HelmetTitle routeName={"All Requests"}></HelmetTitle>
      <div className="my-10">
        <label htmlFor="">Search Here by Name </label>
        <Search></Search>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>Asset Name</th>
                <th>Name of requester</th>
                <th>Email of requester</th>
                <th>Additional note</th>
                <th>Request Date</th>
                <th>Asset Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-100">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Asset Type</td>
                <td>Purple 2</td>
                <td>
                    <button className="mx-1 btn-outline btn-xs btn  ">AC</button>
                    <button className="mx-1 btn-outline btn-xs btn  ">DC</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-100">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Asset Type</td>
                <td>Purple 2</td>
                <td>
                    <button className="mx-1 btn-outline btn-xs btn  ">AC</button>
                    <button className="mx-1 btn-outline btn-xs btn  ">DC</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-100">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Asset Type</td>
                <td>Purple 2</td>
                <td>
                    <button className="mx-1 btn-outline btn-xs btn  ">AC</button>
                    <button className="mx-1 btn-outline btn-xs btn  ">DC</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-100">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Asset Type</td>
                <td>Purple 2</td>
                <td>
                    <button className="mx-1 btn-outline btn-xs btn  ">AC</button>
                    <button className="mx-1 btn-outline btn-xs btn  ">DC</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllRequest;
