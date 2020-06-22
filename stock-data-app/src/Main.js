import React from 'react';

function Main(props) {
    return (
        <div>
            <h1>Stock Data For Today</h1>
            <ul>
                <li>Amazon: {props.amazonValue}</li>
                <li>Microsoft: {props.microsoftValue}</li>
                <li>Apple: {props.appleValue}</li>
                <li>Google: {props.googleValue}</li>
            </ul>
        </div>
    )
}

export default Main;