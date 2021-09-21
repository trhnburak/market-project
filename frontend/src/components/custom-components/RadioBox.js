import React from "react";

export default function RadioBox(props) {
  const [isChecked, setChecked] = React.useState(false);

  const toggleCheck = (e) => {
    setChecked(e.target.checked || !isChecked);
  };

  return (
    <>
      <label className="radio-container">
        {props.text}
        <input
          type="radio"
          checked={isChecked}
          onChange={(e) => toggleCheck(e)}
          id={props.id}
          value={props.name}
          name={props.name}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
}
