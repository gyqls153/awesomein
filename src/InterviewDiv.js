const chosenDiv = {
  boxShadow: "5px 5px 5px #ff6887",
};
const defaultDiv = {
  border: "1px solid gray",
  width: "30%",
  height: "auto",
};
const InterviewDiv = ({ type }) => {
  return (
    <div
      className="InterviewDiv"
      style={type === "chosen" ? chosenDiv : defaultDiv}
    >
      <div className="InterviewDiv__head">
        <div>머리에 쏙쏙</div>
        <div>들어오는</div>
        <div>뉴스레터</div>
      </div>
      <div className="InterviewDiv__body">
        바이오섹터는 너무 생속한 분야라고 생각했는데 어썸레터로 또 하나 배우게
        됐어요^^ 바이오에 대해서는 관심도 없었고 생각을 해본적도 없었는데,
        아무것도 몰랐던 저도 이해할 수 있을 정도로 도움되는 정보였던 것 같아요^^
      </div>
    </div>
  );
};

export default InterviewDiv;
