const Screen = ({ calval }) => {
  return (
    <center className="button-container">
      <input type="text" className="display" value={calval} readOnly />
    </center>
  );
};
export default Screen;
