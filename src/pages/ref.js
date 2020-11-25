import React, { useState, useRef } from "react";

const Ref = () => {
    const inputEl = useRef(null);
    const [text, setText] = useState("");
    const handleClick = () => {
      setText(inputEl.current.value);
    };
    console.log("Test！！");
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={handleClick}>set text</button>
        <p>Text : {text}</p>
      </>
    );
  };
  export default Ref;