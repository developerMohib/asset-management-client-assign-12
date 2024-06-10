import Filter from "../../../Component/Filter/Filter";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import Search from "../../../Component/Search/Search";
const RequestAssets = () => {
  return (
    <div>
      <HelmetTitle routeName={"Request for an Asset"}> </HelmetTitle>
      <h1> hi i am RequestAssets employee </h1>
      <div className="flex gap-5 my-10">
        <div className="w-1/2">
          <Search></Search>
        </div>
        <div className="w-1/2">
          <Filter></Filter>
        </div>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Product Name</th>
              <th>Product Type</th>
              <th>Product Availability</th>
              <th>Request Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Available / Out of stock</td>
              <td><div>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Requst
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click on ✕ button to close
                      </p>
                    </div>
                  </dialog>
                </div></td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Available / Out of stock</td>
              <td><div>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Requst
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click on ✕ button to close
                      </p>
                    </div>
                  </dialog>
                </div></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td> Available / Out of stock </td>
              <td>
                <div>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Requst
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click on ✕ button to close
                      </p>
                    </div>
                  </dialog>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestAssets;
