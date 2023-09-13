import React from "react";
import Cards from "../Cards/Cards";

function myPosts() {
  return (
    <div className="myPosts">
      <h1>My Posts</h1>
      <div className="postGrid">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default myPosts;
