import useUser from "../../../Hooks/useUser";
import Search from "../../../Component/Search/Search";
import Filter from "../../../Component/Filter/Filter";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import useAllProducts from "../../../Hooks/useAllProducts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
const RequestAssets = () => {
  const date = new Date();
  const { loginUser } = useUser();
  const { products } = useAllProducts();
  const requDate = date.toLocaleDateString();

  const requesterName = loginUser.name;
  const requesterEmail = loginUser.email;
  const additionalNote = "Hey this is test";
  const requestStatus = "pending";
  const requestDate = requDate;
  const axiosSecure = useAxiosSecure();

  const handleRequest = (item) => {
    const assetName = item.productName;
    const assetType = item.productType;

    // send data to database
    const assetDetails = {
      requesterName: requesterName,
      requesterEmail: requesterEmail,
      additionalNote: additionalNote,
      requestStatus: requestStatus,
      requestDate: requestDate,
      assetName: assetName,
      assetType: assetType,
    };

    // call server link / api
    axiosSecure
      .post("/requ-product", assetDetails)
      .then((res) => {
        const data = res.data;
        if(data.insertedId){
          toast.success('Your request send succesfully');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            {products.map((item, idx) => (
              <tr key={item._id}>
                <th> {idx + 1} </th>
                <td> {item.productName} </td>
                <td> {item.productType} </td>
                <td> {item.productQuantity} </td>
                <td>
                  <div>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleRequest(item)}
                    >
                      Request
                    </button>

                    {/* <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>

                        </form>

                        <form className="mt-12">
                      
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="name" className="block mb-3 text-sm font-medium text-black">
                          {item.productName}
                          </label>
                          <input
                            id="name"
                            name="text"
                            type="text"
                            placeholder="Tell about asset"
                            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500 my-3"
                          />
                        </div>
                        <div className="col-span-full text-center">
                          <input className="px-4 py-2 text-base text-white transition-all rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 hover:to-indigo-700 cursor-pointer" type="submit" value="Request Assest" />
                          
                        </div>
                      </div>
                    </form>
                      </div>
                    </dialog> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestAssets;
