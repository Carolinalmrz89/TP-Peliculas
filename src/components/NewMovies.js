import SectionsPopularLatest from "./SectionsPopularLatest";

const NewMovies = () => {
  return (
    <div>
      <h2>New Movies</h2>
      <SectionsPopularLatest title="Últimos lanzamientos" url="now_playing" />
    </div>
  );
};

export default NewMovies;
