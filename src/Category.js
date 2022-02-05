import IconText from "./IconText";
import SearchBar from "./SearchBar";
import SubScribe from "./Subscribe";
const Category = () => {
  return (
    <div className="Category">
      <div className="Category__innerSection">
        <IconText type={"column"} icon={"72-10.png"} text={"전체"} />
        <IconText type={"column"} icon={"72-11.png"} text={"Only부동산"} />
        <IconText type={"column"} icon={"72-12.png"} text={"Only금융"} />
      </div>
      <div className="Category__searchBar">
        <SearchBar />
      </div>
      <div className="Category__subscribe">
        <SubScribe />
      </div>
    </div>
  );
};
export default Category;
