import { useState } from "react";

function InputArea(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={input} />
      <button onClick={() => {props.onClick(input); setInput("")}}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
