const names = ['Deni', 'Greeshma'];

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{chosenName}!</p>
      <p>How are you !!</p>
    </div>
  );
}

export default Post;
