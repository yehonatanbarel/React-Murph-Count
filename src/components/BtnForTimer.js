import React from "react";
import './style.css'
import Button from 'react-bootstrap/Button';

function BtnForTimer(props) {

    return (
        <div >

            <button className="btn--timer">Start</button>
            {/* <button className="btn--timer">stop</button>
            <button className="btn--timer">restart</button> */}

        </div>
    )
}

export default BtnForTimer;