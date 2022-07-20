import React from "react";
import './style.css'

function Timer(props) {


    // &nbsp; it's just a way that allows us to create multiple spaces in a row.
    // This short if will check if thetime is above 2 digit and make sure it look 
    // like time with 2 digit, for example:
    // if the time is '3' minutes ('3' is below 10) so it will look on the clock
    // like this: '03' insted of just '3'
    // and if the time is '13' it will show '13' on the clock
    // this will make sure to always show the time with 2 digit for each.
    // The className="timer" is for style.css
    return (
        <div className="timer">
            <span>{(props.time.m >= 10) ? props.time.h : "0" + props.time.h}</span> &nbsp;:&nbsp;
            <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
            <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
            {/* <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span> */}
        </div>
    );
}

export default Timer;