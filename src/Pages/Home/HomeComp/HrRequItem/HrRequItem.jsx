import Spinner from "../../../../Component/Spinner/Spinner";
import useAllProducts from "../../../../Hooks/useAllProducts";
import useAuth from "../../../../Hooks/useAuth";

const HrRequItem = () => {
  const { loading } = useAuth();
  const { products, isLoading } = useAllProducts();

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  const limitedProd = products.filter((item) => item.productQuantity <= 10);
  return (
    <div>
      <h1>hello this is most requrest item </h1>
      <h1 className="font-semibold text-center my-5">
        limited stock item {limitedProd?.length}
      </h1>
      <div className="md:grid grid-cols-3 gap-4">
        {limitedProd?.map((item) => (
          <div key={item._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={item?.productUrl}
                  alt={item?.productName}
                  className="rounded-xl md:h-[184px] w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Product Name {item?.productName}</h2>
                <p>This is the most choiceable product</p>
                <p> <b>Product Quantity</b> : {item?.productQuantity} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HrRequItem;
