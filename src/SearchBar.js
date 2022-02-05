const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="SearchBar__div" style={{ margin: "0 10px" }}>전체</div>
      <img
        style={{ transform: "scale(0.9)", marginRight: "10px" }}
        src={process.env.PUBLIC_URL + `assets/imgs/72-22.png`}
      />
      <input style={{ border: "none", marginRight: "10px", width: "70%", height: "25px"  }} />
      <img
        style={{ transform: "scale(0.9)", marginRight: "10px" }}
        src={process.env.PUBLIC_URL + `assets/imgs/72-21.png`}
      />
    </div>
  );
};

export default SearchBar;
