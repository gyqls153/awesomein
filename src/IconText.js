const columnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const defaultStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const IconText = ({ icon, text, type }) => {
  return (
    <div
      className="IconText"
      style={type === "column" ? columnStyle : defaultStyle}
    >
      <div>
        <img src={process.env.PUBLIC_URL + `assets/imgs/${icon}`} />
      </div>
      <div className="IconText__text"> {text}</div>
    </div>
  );
};
export default IconText;
