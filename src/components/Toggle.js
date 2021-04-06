import React, { useState } from "react";

function Toggle() {
  const [elem, setState] = useState("OFF")

  function onOff(){
    setState((elem)=> elem === "OFF" ? elem="ON": elem="OFF")
  }

  const color = elem === "ON" ? "red" : "white"; 

  return <button style={{ background: color }} onClick={onOff}>{ elem }</button>;
}

export default Toggle;
