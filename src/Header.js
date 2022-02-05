import IconText from "./IconText";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header_top">
        <div className="Header__left">
          <IconText icon={"72-14.png"} text={"어썸인 서비스 소개"} />
        </div>

        <div className="divider">
          <span className="divider__innerDivider"></span>
        </div>
        <div className="Header_right">
          <IconText icon={"72-15.png"} text={"로그아웃"} />
          <IconText icon={"72-17.png"} text={"마이페이지"} />
          <IconText icon={"72-18.png"} text={"장바구니"} />
        </div>
      </div>
      <div className="Header__mid">
        <img src={process.env.PUBLIC_URL + `assets/imgs/72-13.png`} />
      </div>

      <div className="Header__bottom">
        <div><span>성선화의 투자</span> <span>인사이트 엿보기</span></div>
        <div><span>투자하는 사람들을</span> <span>위한 플랫폼</span></div>
        <div><span>AWESOME</span> <span>LETTER</span></div>
      </div>
    </div>
  );
};
export default Header;
