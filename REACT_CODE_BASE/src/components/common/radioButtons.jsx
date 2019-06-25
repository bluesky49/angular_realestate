import React from "react";

const RadioButtons = ({ buttons, label, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label> <br />
      {buttons.map((btn, index) => (
        <label key={index} htmlFor={btn.value.toString()}>
          <input
            type="radio"
            name={btn.name}
            id={btn.value.toString()}
            onChange={onChange}
            value={btn.value}
          />{" "}
          {btn.title} &nbsp;
        </label>
      ))}
    </React.Fragment>
  );
};

export default RadioButtons;