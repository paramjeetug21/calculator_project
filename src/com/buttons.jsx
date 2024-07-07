import Style from "./buttons.module.css";
const Button = ({ onButtonClick }) => {
  let button = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "*",
    "-",
    "+",
    "=",
  ];

  return (
    <div>
      {button.map((items) => (
        <button
          key={items}
          className={Style.button}
          onClick={() => onButtonClick(items)}
        >
          {items}
        </button>
      ))}
    </div>
  );
};
export default Button;
