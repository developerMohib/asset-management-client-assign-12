const Search = () => {
  const handleSeach = (e) => {
    e.preventDefault();
    const itemName = e.target.name.value;
    console.log(itemName, "search comp");
  };
  return (
    <div>
      <form onSubmit={handleSeach}>
        <div className="flex relative">
          <input
            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 text-gray-500"
            type="text"
            name="name"
            id=""
            placeholder="Type here.."
          />
          <input
            className="bg-green-400 cursor-pointer absolute right-0 top-0 py-1 px-2 rounded-lg"
            type="submit"
            value="Seach"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
