import { useState } from "react";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";

const AddMore = () => {
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);
  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    const charge = parseInt(newValue);

    let newPrice;
    if (charge === 5) {
      newPrice = 5;
    } else if (charge === 10) {
      newPrice = 8;
    } else if (charge === 20) {
      newPrice = 15;
    } else {
      newPrice = 0;
    }

    if (price !== newPrice) {
      setPrice(newPrice);
    }
  };
  console.log(price, "update employee");
  return (
    <div>
      <HelmetTitle routeName={"Update package"}></HelmetTitle>
      <div className="mb-3 md:w-1/2 ">
        <label className="mb-2 block text-xs font-semibold">
          Select Member {value}
        </label>
        <select
          value={value}
          onChange={handleSelectChange}
          className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
        >
          <option value="">Select a Package </option>
          <option value="5">5 Members for $5</option>
          <option value="10">10 Members for $8</option>
          <option value="20">20 Members for $15</option>
        </select>
      </div>
      <div>
        <p> But and update the data pack and show in ui</p>
        <ul>
          <li> payment </li>
          <li> srtipe setup </li>
          <li> update </li>
          <li> put server </li>
          <li> get from server </li>
        </ul>
      </div>
      <div>
        <p> after updating employee pack </p>
        <p> show avaibaliti of corner </p>
        <p> now add employee</p>
        <p> show employee who are not connect any </p>
      </div>
      <div>
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
                <th>Image</th>
                <th>Name</th>
                <th>Member status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddMore;
