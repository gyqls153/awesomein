import InterviewDiv from "./InterviewDiv";

const Interview = () => {
  return (
    <div className="Interview">
      <img src={process.env.PUBLIC_URL + `assets/imgs/72-24.png`} />

      <div className="Interview__innerSection">
        <InterviewDiv />
        <div>  <img src={process.env.PUBLIC_URL + `assets/imgs/72-26.png`} /> </div>
        <InterviewDiv type={"chosen"} />
        <div>  <img src={process.env.PUBLIC_URL + `assets/imgs/72-27.png`} /> </div>
        
        <InterviewDiv />
      </div>
    </div>
  );
};
export default Interview;
