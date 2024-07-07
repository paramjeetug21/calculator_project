import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./com/buttons";
import Screen from "./com/screen";
function App() {
  let [calval, setcalval] = useState("");
  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setcalval("");
    } else if (buttontext === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newdisplay = calval + buttontext;
      setcalval(newdisplay);
    }
  };
  return (
    <>
      {" "}
      <div className="box">
        <Screen calval={calval}></Screen>

        <Button onButtonClick={onButtonClick}></Button>
      </div>
    </>
  );
}
export default App;
