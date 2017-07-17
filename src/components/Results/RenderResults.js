import React from 'react';


export function RenderResultsOneWay(props) {
    return (
            <tr className="result-one">
                <td>{props.price}</td>
                <td>{props.origin}</td>
                <td>{props.layover}</td>
                <td>{props.destination}</td>
                <td>{props.passengers}</td>
                <td>
                    <button onClick={() => {alert(`Flight has been booked for ${props.passengers} at ${props.price}!  Don't forget to bring a towel!`)}}>Book</button>
                </td>                                    
            </tr>            
        
    )
}

export function RenderResultsRoundTrip(props) {
    return(
                <tr className="result-one">
                    <td>{props.price}</td>
                    <td>{props.originOut}<br />
                        ---<br />
                        {props.originIn}</td>
                    <td>{props.layoverOut}<br />
                        ---<br />
                        {props.layoverIn}</td>
                    <td>{props.destinationOut}<br />
                        ---<br />
                        {props.destinationIn}</td>
                    <td>{props.passengers}</td>
                    <td>
                        <button onClick={() => {alert(`Flight has been booked for ${props.passengers} at ${props.price}!  Don't forget to bring a towel!`)}}>Book</button>
                    </td>                                    
                </tr>            
    )
}