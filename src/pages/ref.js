import React, { useState, useRef } from "react";

const Ref = () => {
    const inputEl = useRef(null);
    const [text, setText] = useState("");
    const handleClick = () => {
      setText(inputEl.current.value);
    };
    console.log("描画！！");
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={handleClick}>set text</button>
        <p>テキスト : {text}</p>
      </>
    );
  };
  export default Ref;