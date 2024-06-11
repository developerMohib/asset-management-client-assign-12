import Filter from "../../../Component/Filter/Filter";
import Sort from "../../../Component/Sort/Sort";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import Search from "../../../Component/Search/Search";
import useAllProducts from "../../../Hooks/useAllProducts";

const AssestList = () => {
  const { products } = useAllProducts();
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
                  <td>update</td>
                  <td>delete</td>
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
