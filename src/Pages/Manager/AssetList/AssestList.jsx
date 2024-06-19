import Filter from "../../../Component/Filter/Filter";
import Sort from "../../../Component/Sort/Sort";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import Search from "../../../Component/Search/Search";
import useAllProducts from "../../../Hooks/useAllProducts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Spinner from "../../../Component/Spinner/Spinner";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AssestList = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { products, isLoading, refetch } = useAllProducts();

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }

  const handleDelete = (id) => {
    console.log("paici from cancel", id);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/products/${id}`).then((res) => {
            console.log("Cancel response:", res.data);
            if (res.data.deletedCount > 0) {
              toast.success("Your rquested product is deleted !");
              Swal.fire({
                title: "Deleted!",
                text: "Your rquested product is deleted !",
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
    } catch (err) {
      //hello
      console.log("paici from cancel", err);
    }
  };

  const handleUpdate = (id) => {
    console.log('id paici', id) ;
  }

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
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Quantity</th>
                <th>Added Date</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <tr key={item._id}>
                  <th> {idx + 1} </th>
                  <td>
                    <div className="flex gap-5 ">
                      <div>
                        {" "}
                        <img
                          className="w-12 h-12 rounded-lg "
                          src={item.productUrl}
                          alt=""
                        />{" "}
                      </div>
                      <div>
                        {" "}
                        <p> {item.productName} </p>{" "}
                      </div>
                    </div>
                  </td>
                  <td> {item.productType} </td>
                  <td> {item.productQuantity} </td>
                  <td> {item.addedDate} </td>
                  <td>
                    {" "}
                    <button onClick={() => handleUpdate(item._id)} className="btn btn-xs">update</button>{" "}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-xs"
                    >
                      delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssestList;
