const Movie = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        const { id, image, title, age, tags, description } = movie;
        return (
          <div key={id} className="movie">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <span>{tags}</span> <span>{age}</span>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};
export default Movie;
