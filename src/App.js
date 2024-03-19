//import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { Route, Routes } from "react-router-dom";

import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

// import Post from "./Post";
// import PostLayout from "./PostLayout";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Reach Social App" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="newpost">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/editpost/:id" element={<EditPost />} />
          {/* <PostPage /> */}
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
