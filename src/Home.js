import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults } = useContext(DataContext);
  return (
    <main className="Home">
      {searchResults.length > 0 ? (
        <Feed posts={searchResults} />
      ) : (
        <h1>No posts to display</h1>
      )}
    </main>
  );
};

export default Home;
