import React from 'react';
import './SideBarRow.css';


function SideBarRow({selected, Icon, title}) {
    return (
        <div className={`sideBarRow ${selected && "selected"}`}>
            <Icon/>
            <h4>{title}</h4>
        </div>
    );
}

export default SideBarRow;
