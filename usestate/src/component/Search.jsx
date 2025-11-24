

const Search = ({search, setSearch, loading, results}) => {

  return (
    <div className="search-input" style={{
      width: "400px",
      margin: "30px auto"
    }}>
      <h1>Search from below</h1>
      <input
        placeholder='Search from here...'
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%", padding: "10px"
        }}
      />
      <div className="show-data">
        {loading && <p>Searching...</p> }
         
         {!loading && results.length === 0 && search !== "" && (
          <p>NO results found.</p>
         )}
         
         {/*  show results */}
         {
          results.map((item) => (
            <div className="item" key={item.id} style={{
              padding: "6px 0"
            }}>
              {item.title}
            </div>
          ))
         }
      </div>
    </div>
  );
};

export default Search;