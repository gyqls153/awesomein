import ContentBox from "./ContentBox";
const ContentBoxList = () => {
  return (
    <div className="ContentBoxListContainer">
      <div className="ContentBoxList">

      
        <ContentBox type={"house"} />
        <ContentBox type={"fin"}/>
        <ContentBox type={"house"} />
        <ContentBox type={"fin"}/>
    
      
        <ContentBox type={"house"}/>
        <ContentBox type={"fin"}/>
        <ContentBox type={"house"} />
        <ContentBox type={"fin"}/>
    
        <ContentBox type={"house"}/>
        <ContentBox type={"fin"}/>
        <ContentBox type={"house"}/>
        <ContentBox type={"fin"}/>
     </div>
      <div className="ContentBoxList__innerSection__footer">
        <div className="ContentBoxList__innerSection__footer__head">더보기</div>
        <div> <img src={process.env.PUBLIC_URL + `assets/imgs/72-23.png`} /></div>
      </div>
    </div>
  );
};
export default ContentBoxList;
