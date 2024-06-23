import { RingLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex md:h-52 items-center justify-center">
      {" "}
      <RingLoader color="#36d7b7" />{" "}
    </div>
  );
};

export default Spinner;
