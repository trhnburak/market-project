import React from "react";

export default function CheckBox(props) {
  const [isChecked, setChecked] = React.useState(false);

  const toggleCheck = (e) => {
    setChecked(e.target.checked || !isChecked);
  };
  return (
    <>
      <label className="checkbox-container">
        {props.text}
        <input
          type="checkbox"
          checked={isChecked} 
          onChange={(e) => toggleCheck(e)}
          id={props.id}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
}
