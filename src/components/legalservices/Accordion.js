import React, { useState } from 'react';
import './Accordian.css'
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item  py-4 px-4">
      <div className="accordion-title  row" onClick={() => setIsActive(!isActive)}>
        <div className='col-11  '><h5>{title}</h5></div>
        <div className=' col-1 '> {isActive ? '➖' : '➕'}</div>
      </div>
      {isActive && <div className="accordion-content mt-4 px-2 py-1" style={{ whiteSpace: "pre-line" }}>  {content.split("<br/>").join("\n")}</div>}
    </div>
  );
};

export default Accordion;