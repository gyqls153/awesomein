const ContentBox = ({type}) => {
  return (
    <div className="ContentBox">
      <div>
        {" "}
        <img
          style={{ marginBottom: "10px" }}
          src={type==="house" ? process.env.PUBLIC_URL + `assets/imgs/72-11.png` : process.env.PUBLIC_URL + `assets/imgs/72-12.png` }
        />
      </div>
      <div className="ContentBox__head">
        현대중공업 공모주 할까요? (feat, 9월 공모주 투자전략)
      </div>
      <div className="ContentBox__body">
        삼성중공업은 무상감자로 제외, 한국조선해양은 현대중공업의 모회사로 제외,
        현대미포조선은 모회사와의... 현대중공업 공모주 청약 청약일정: 9.7-
      </div>
      <div className="ContentBox__date">22.01.28</div>
    </div>
  );
};
export default ContentBox;
