import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <h1> I am error page </h1>
        <Link to="/">
          {" "}
          <button className="btn" >go home</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
