import { RingLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {" "}
      <RingLoader color="#36d7b7" />{" "}
    </div>
  );
};

export default Spinner;
