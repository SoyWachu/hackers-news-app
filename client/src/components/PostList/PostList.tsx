import { useEffect } from "react";
import Post from "../Post/Post";
import styles from "./postlist.module.css";
import { useSelector } from "react-redux";
import { PostState } from "../../redux/reducer/postReducer";
import { fetchPosts } from "../../redux/actions/actions";
import { store } from "../../redux/store";

function PostList() {
  const dispatchStore = store.dispatch;

  const posts = useSelector<PostState, PostState["posts"]>(
    (state) => state.posts
  );

  useEffect(() => {
    dispatchStore(fetchPosts() as any);
  }, [dispatchStore]);

  return (
    <div className={styles.container}>
      {posts?.map((item) => {
        return (
          <Post
            _id={item._id}
            title={item.title}
            story_title={item.story_title}
            author={item.author}
            created_at={item.created_at}
            story_url={item.story_url}
            key={item._id}
          />
        );
      })}
    </div>
  );
}

export default PostList;
