import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "./Card";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  const spinner = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  return (
    <div>
      {posts
        ? posts.map((elt) => <CustomCard key={elt.id} elt={elt} />)
        : spinner}
    </div>
  );
}

export default App;
