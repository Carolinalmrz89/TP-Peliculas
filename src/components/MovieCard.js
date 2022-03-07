const MovieCard = ({ image, title, url }) => {
  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      <a href={url}> {">"} </a>
    </div>
  );
};

export default MovieCard;
