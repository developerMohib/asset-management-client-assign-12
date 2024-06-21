import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Search = () => {
  const axiosPublic = useAxiosPublic();
  const [result, setResults] = useState('')

  const handleSeach = async (e) => {
    e.preventDefault();
    const itemName = e.target.name.value;
    console.log(itemName, "search comp");
    const res = await axiosPublic.get(`/search?name=${itemName}`);
    setResults(res.data)
  };

      // handle input change
      const handleInputChange = (e) => {
        const itemName = e.target.value.trim();
        if (itemName === "") {
          // setResults(allResults);
          // setNoResults(false);
        }
      };
  return (
    <div>
      <form onSubmit={handleSeach}>
        <div className="flex relative">
          <input
            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 text-gray-500"
            type="text"
            name="name"
            placeholder="Type here.."
              onChange={handleInputChange}
          />
          <input
            className="bg-green-400 cursor-pointer absolute right-0 top-0 py-1 px-2 rounded-lg"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
