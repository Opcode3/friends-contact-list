// import React from 'react';


export default function ColorFrame({color}){
    
    return(
        <div id="colorframe" style={{ background: color}}>
            {color.charAt(0).toUpperCase()+color.slice(1)}
        </div>
    )
}