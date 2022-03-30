const Search = () => {
  return (
    <div
      className="p-4 p-md-5 mb-4 mt-4 text-white rounded bg-dark"
      style={{ width: "100%" }}
    >
      <div className="col-md-12 px-0">
        <h1 className="display-2 fst-bold">Welcome.</h1>
        <p className="lead my-3">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Search For A Movie, TV Show, Person.."
          aria-label=".form-control-lg example"
        />
      </div>
    </div>
  );
};

export default Search;
