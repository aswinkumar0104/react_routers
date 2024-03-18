import React from "react";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length > 0 ? (
        <Feed posts={posts} />
      ) : (
        <style>No posts to display</style>
      )}
    </main>
  );
};

export default Home;
