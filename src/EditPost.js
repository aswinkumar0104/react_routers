import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const EditPost = ({}) => {
  const { posts, editBody, editTitle, setEditBody, setEditTitle, handleEdit } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((item) => item.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="EditNewPost">
      <h2>Edit Post</h2>
      <label htmlFor="postTitle">Title:</label>
      <input
        id="postTitle"
        type="text"
        required
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <label htmlFor="postBody">Post:</label>
      <textarea
        id="postBody"
        required
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}
      />
      <button type="submit" onClick={() => handleEdit(id)}>
        Submit
      </button>
    </main>
  );
};

export default EditPost;
