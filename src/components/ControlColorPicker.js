import React from 'react';
import './ControlColorPicker.css';

const ControlColorPicker = function (props) {

  const {tallyUp} = props;
  const handleColorChange = (event) => {
    props.onChange(event.target.value);
    tallyUp();
  };

  return (
    <div className="control-color-picker">
      <label>{props.controlLabel}</label>
      <input
        id="controlColorPicker"
        type="color"
        defaultValue={props.modValue}
        onInput={handleColorChange}
      />
    </div>
  );
};
export default ControlColorPicker;
