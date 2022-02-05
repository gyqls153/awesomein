import CommunityBox from "./CommunityBox";
const Community = () => {
  return (
    <div className="Community">
      <div className="Community__header">
        <img src={process.env.PUBLIC_URL + `assets/imgs/72-25.png`} />
        <div className="Community__categorybtns">
          <div className="Community__categorybtn">공지사항/새소식</div>
          <div className="Community__categorybtn">경제뉴스</div>
          <div className="Community__categorybtn">어썸인 YOU 퀴즈</div>
          <div className="Community__categorybtn">재테크 수다방</div>
          <div className="Community__categorybtn">구독후기</div>

        </div>
      </div>
      <div className="Community__innerSection">
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
      </div>
    
    </div>
  );
};
export default Community;
