import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="container-search">
      <IoSearchOutline size={25} color="#000" />
      <input
        id="search"
        type="text"
        name="search"
        className="search"
        placeholder="Search image..."
      />
    </div>
  );
};

export default Search;
