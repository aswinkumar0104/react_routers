import React from "react";
import { Link, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((item) => item.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
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
