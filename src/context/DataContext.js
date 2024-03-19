import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../API/posts";
import useWindowSize from "../hooks/useWindowSize";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, SetPosts] = useState([]);
  const [search, SetSearch] = useState("");

  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const [searchResults, SetSearchResults] = useState([]);

  const navigate = useNavigate();

  const { width } = useWindowSize();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("posts");
        SetPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      }
    };

    (async () => await fetchPosts())();
    //fetchPosts();
  }, []);

  useEffect(() => {
    const filterValue = posts.filter(
      (item) =>
        item.body.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filterValue);
    SetSearchResults(filterValue.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = { id, title: postTitle, body: postBody };
    try {
      const response = await api.post("posts", newPost);
      const allPosts = [...posts, response.data];
      SetPosts(allPosts);
      setPostBody("");
      setPostTitle("");
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
      const newItem = posts.filter((item) => parseInt(item.id) !== id);
      console.log(newItem);
      SetPosts(newItem);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }
  };

  const handleEdit = async (id) => {
    try {
      const newItem = { id, title: editTitle, body: editBody };
      const response = await api.put(`posts/${id}`, newItem);
      SetPosts(
        posts.map((item) => (item.id === id ? { ...response.data } : item))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }
  };
  return (
    <DataContext.Provider
      value={{
        width,
        search,
        SetSearch,
        searchResults,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        posts,
        handleDelete,
        editBody,
        editTitle,
        setEditBody,
        setEditTitle,
        handleEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
