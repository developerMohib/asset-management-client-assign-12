import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import useUser from "../../Hooks/useUser";
const Profile = () => {
  const { loginUser } = useUser();
  console.log(loginUser);
  return (
    <div>
      <HelmetTitle routeName={"Profile"}></HelmetTitle>
      <div className="w-3/4 mx-auto my-5">
        <div className="">
          <img className="w-52 h-52 rounded-full" src={loginUser.userPhoto} alt="" />
        </div>
        <h1>Hi i am {loginUser.name}</h1>
        <h1>My email {loginUser.email}</h1>
        <h1>My birth date {loginUser.birthDate}</h1>
        <h1>I am {loginUser.status} of {loginUser.companyName} </h1>
        <div>
            <button className="btn btn-outline"> Update </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
