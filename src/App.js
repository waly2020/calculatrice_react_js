import { useState } from "react";
import Buttons from "./components/Buttons";
import "./styles/main.scss";
function App() {
  const [inputValue,setInputValue] = useState("");
  const [disabledInput,setDisabledInput] = useState("");

  const addValue = (visibleValu,disabledValue) =>{
    setInputValue(inputValue + visibleValu);
    // disabledInput += (disabledValue ? disabledValue : visibleValu);
    setDisabledInput(disabledInput + (disabledValue ?? visibleValu));
    console.log(disabledInput);
  }
  const calcul = () =>{
    setInputValue(eval(disabledInput));
    setDisabledInput(eval(disabledInput));
  }
  const clear = () =>{
    setDisabledInput("");
    setInputValue("");
  }
  return (
    <div className="container-calculatrice">
      <div className="calculatrice">
      <div className="container-screen">
        <input value={inputValue} type="text" disabled placeholder="0." className="screen"/>
      </div>
      <div className="container-button">
      <Buttons onClick={() =>{addValue("1")}}>1</Buttons>
      <Buttons onClick={() =>{addValue("2")}}>2</Buttons>
      <Buttons onClick={() =>{addValue("3")}}>3</Buttons>
      <Buttons onClick={() =>{addValue("+","+")}} className="yellow">+</Buttons>
      <Buttons onClick={() =>{addValue("4")}}>4</Buttons>
      <Buttons onClick={() =>{addValue("5")}}>5</Buttons>
      <Buttons onClick={() =>{addValue("6")}}>6</Buttons>
      <Buttons onClick={() =>{addValue("-","-")}} className="yellow">-</Buttons>
      <Buttons onClick={() =>{addValue("7")}}>7</Buttons>
      <Buttons onClick={() =>{addValue("8")}}>8</Buttons>
      <Buttons onClick={() =>{addValue("9")}}>9</Buttons>
      <Buttons onClick={() =>{addValue("x","*")}} className="yellow">x</Buttons>
      <Buttons onClick={clear} className="red">C</Buttons>
      <Buttons onClick={() =>{addValue("0")}}>0</Buttons>
      <Buttons className="yellow" onClick={calcul}>=</Buttons>
      <Buttons onClick={() =>{addValue("/","/")}} className="yellow">/</Buttons>
      </div>
    </div>
    </div>
  );
}

export default App;
