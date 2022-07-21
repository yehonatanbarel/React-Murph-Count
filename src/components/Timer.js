import React from "react";
import './style.css'

function Timer(props) {



    const [second, setSecond] = React.useState(0);
    const [minute, setMinute] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);

    // this just switch the state of isActive so we can use start and stop
    function handleStartStop() {
        setIsActive(!isActive);

    }

    function handleReset() {
        setSecond(0);
        setIsActive(false);
    }

    React.useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSecond(prev => prev + 1);
            }, 1000);
        } else if (!isActive && second !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, second]);


    // &nbsp; it's just a way that allows us to create multiple spaces in a row.
    // This short if will check if thetime is above 2 digit and make sure it look 
    // like time with 2 digit, for example:
    // if the time is '3' minutes ('3' is below 10) so it will look on the clock
    // like this: '03' insted of just '3'
    // and if the time is '13' it will show '13' on the clock
    // this will make sure to always show the time with 2 digit for each.
    // The className="timer" is for style.css
    return (
        <>
            <div className="timer">
                <span>{(hour >= 10) ? hour : "0" + hour}</span>&nbsp;:&nbsp;
                <span>{(minute >= 10) ? minute : "0" + minute}</span>&nbsp;:&nbsp;
                <span>{(second >= 10) ? second : "0" + second}</span>{/*&nbsp;:&nbsp;*/}
                {/* <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span> */}
            </div>


            {
                !isActive ?
                    <div >
                        <button className="btn--timer" onClick={handleStartStop}>Start</button>
                    </div>
                    :
                    <div >
                        <button className="btn--timer" onClick={handleStartStop}>Pause</button>
                        <button className="btn--timer" onClick={handleReset}>reset</button>
                    </div>
            }



        </>
    );
}

export default Timer;