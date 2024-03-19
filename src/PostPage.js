import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((item) => item.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postBody">{post.body}</p>
            <Link to={`/editpost/${post.id}`}>
              <button className="EditButton">Edit Post</button>
            </Link>
            <button
              className="DeleteButton"
              onClick={() => handleDelete(parseInt(post.id))}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <p>page not found please go to home page</p>
            <Link to="/">
              <button>Go to Home Page</button>
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
