
import HelmetTitle from '../../../Component/HelmetTitle/HelmetTitle';
import useAllUser from '../../../Hooks/useAllUser';

const MyTeam = () => {
    const {allUser} = useAllUser() ;
    console.log(allUser)
    return (
        <div>
            <HelmetTitle routeName={'My Team'}> </HelmetTitle>
            <h1> hi i am my team employee </h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        allUser.map(user => (<tr key={user._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
            <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.userPhoto} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
            </td>
            <td>
                {user.name}
            </td>
            <td>{user.status}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>))
    }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyTeam;