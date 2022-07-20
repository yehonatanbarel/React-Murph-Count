import React from "react";
import './style.css'

function Timer(props) {



    const [time, setTime] = React.useState({ s: 0, m: 0, h: 0 });




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
            <span>{(time.h >= 10) ? time.h : "0" + time.h}</span>&nbsp;:&nbsp;
            <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
            <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>{/*&nbsp;:&nbsp;*/}
            {/* <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span> */}
        </div>
    );
}

export default Timer;