import React from "react";
import { singlePost } from "../../utils/interfaces/postInterface";
import styles from "./post.module.css";
import { deletePost } from "../../redux/actions/actions";
import { store } from "../../redux/store";
import { useSelector } from "react-redux";
import moment from "moment";
import { PostState } from "../../redux/reducer/postReducer";

const Post = ({
  created_at,
  story_url,
  title,
  story_title,
  author,
  _id,
}: singlePost) => {
  const dispatchStore = store.dispatch;
  const isLoading = useSelector((state: PostState) => state.loading);

  const date = moment(created_at).format("dddd");

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <a
            className={styles.link}
            target="_blank"
            href={story_url}
            rel="noreferrer"
          >
            <div className={styles.leftContainer}>
              <div className={styles.innerLeftContainer}>
                <p className={styles.title}>
                  {title === null ? story_title : title}.
                </p>
                <p className={styles.author}>- {author} -</p>
              </div>
              <div>
                <p>{date}</p>
              </div>
            </div>
          </a>
          <div className={styles.rightContainer}>
            <div>
              <svg
                onClick={() => dispatchStore(deletePost(_id) as any)}
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
