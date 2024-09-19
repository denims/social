import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post name="Deni" msg="hello" />
        <Post name="Deni2" msg="hello2" />
        <Post name="Deni3" msg="hello3" />
      </ul>
    </>
  );
}

export default PostList;
