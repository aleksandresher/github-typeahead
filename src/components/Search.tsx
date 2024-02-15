import React, { ChangeEvent, useEffect, useState, useContext } from "react";
import { useQueryClient } from "react-query";
import { MyContext } from "../context/Provider";

const Search: React.FC = () => {
  const { myData, updateData } = useContext(MyContext);
  const queryClient = useQueryClient();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      queryClient.invalidateQueries(["users"]);
      updateData({ user: search });
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, queryClient, updateData]);

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="w-full flex justify-center pt-[50px]">
      <input
        className=" w-1/2 h-[60px] p-3 text-lg bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:outline-none shadow-md"
        type="text"
        placeholder="Search..."
        value={myData.user}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
