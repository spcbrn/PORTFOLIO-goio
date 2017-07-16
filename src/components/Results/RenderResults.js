import React from 'react';


export default function RenderResults(props) {
    return (
            <tr className="result">
                <td>{props.price}</td>
                <td>{props.origin}</td>
                <td>{props.layover}</td>
                <td>{props.destination}</td>
                <td>{props.passengers}</td>
                <td>
                    <button>Book</button>
                </td>                                    
            </tr>            
        
    )
}