const SubScribe = () => {
  return (
    <div className="Subscribe">
      <img
        style={{ marginBottom: "10px" }}
        src={process.env.PUBLIC_URL + `assets/imgs/72-19.png`}
      />
      <div className="Subscribe__innerDiv">
        <div>전체보기</div>
        <img
          style={{ transform: "scale(0.9)", marginLeft: "10px" }}
          src={process.env.PUBLIC_URL + `assets/imgs/72-20.png`}
        />
      </div>
    </div>
  );
};
export default SubScribe;
