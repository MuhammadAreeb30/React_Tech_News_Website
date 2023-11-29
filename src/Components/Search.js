import React from "react";
import { useGlobalContext } from "../Context/Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <div>
        <h1>Areeb Developer Tech News Website.</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Search Here..."
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
