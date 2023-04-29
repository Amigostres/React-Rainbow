import React from "react";

function ColorBlock ({color}) { //same as using (prop.color)
    return <div className="colorBlock" 
                style={{'backgroundColor':color}}>
        <p>{color}</p>
    </div>
}


export default ColorBlock