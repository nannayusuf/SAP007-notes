import React, { useState } from "react";

import { MdOutlineColorLens } from "react-icons/md";

function ColorPicker(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="colorPicker">
      <MdOutlineColorLens onClick={() => setListOpen(!listOpen)} />
     <ul className={`colorPicker_list ${ listOpen ? "colorPicker_list_active" : "" }`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="colorPicker_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.handleChangeColor(item)}
          > {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorPicker;