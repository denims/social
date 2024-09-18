import classes from "./Post.module.css"

function Post(props) {

  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.name}!</p>
      <p className={classes.text}>{props.msg}</p>
    </li>
  );
}

export default Post;
