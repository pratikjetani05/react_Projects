import { useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="flex items-center w-1/  justify-center">
      <div className="flex border-2 border-gray-200 rounded">
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 w-full"
          placeholder="Search..."
        />
        <button className="px-4 py-2 text-white bg-blue-500 rounded-r">
          Search
        </button>
      </div>
    </div>
  );
}