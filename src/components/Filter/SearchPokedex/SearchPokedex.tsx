const SearchPokedex = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="form-control"
        placeholder="Search Pokemon"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchPokedex;
