import React from "react";
import Post from "../Post/Post";
import styles from "./postlist.module.css";

const post = [
  {
    title:
      "Thatcher killed the UK’s superfast broadband before it even existed",
    story: "como estan",
    author: "mandxxxrake",
    created_at: "2015",
  },
  {
    title: "Announcing a16z crypto research",
    story: "cozxzxzmo estan",
    author: "mandracccke",
    created_at: "2012",
  },
  {
    title: "Which Node.js OAuth Library Does Your App Need?",
    story: "coasdasdddmo estan",
    author: "manvvvdrake",
    created_at: "2015",
  },
  {
    title: "Announcing a16z crypto research",
    story: "coasdasdmo estan",
    author: "mandzzzrake",
    created_at: "2016",
  },
  {
    title: "TSMC head says drive to onshore chip supply chain is 'unrealistic'",
    story: "como esasdasdtan",
    author: "mandrqqqake",
    created_at: "2018",
  },
];

function PostList() {
  return (
    <div className={styles.container}>
      {post.map((item) => {
        return (
          <Post
            title={item.title}
            story={item.story}
            author={item.author}
            date={item.created_at}
          />
        );
      })}
    </div>
  );
}

export default PostList;
