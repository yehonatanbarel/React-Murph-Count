import React from "react";
import './Timer.css'



function Timer(props) {



    const [second, setSecond] = React.useState(0);
    const [minute, setMinute] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [status, setStatus] = React.useState(0);

    // status explanation btn onth screen:
    // 0 - Start 
    // 1 - Pause & Reset 
    // 2 - Resume & Reset

    function handleStartBtn() {
        setIsActive(true);
        setStatus(1);
    }

    function handlePauseBtn() {
        setIsActive(false);
        setStatus(2);
    }

    function handleResumeBtn() {
        setIsActive(true);
        setStatus(1);

    }

    function handleReset() {
        setSecond(0);
        setMinute(0);
        setHour(0);
        setIsActive(false);
        setStatus(0);

    }

    React.useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSecond(prev => prev + 1);
                if (second > 58) {
                    setSecond(0);
                    setMinute(prev => prev + 1);
                }
                if (minute === 59 && second === 59) {
                    setMinute(0);
                    setHour(prev => prev + 1);
                }
            }, 1000);
        } else if (!isActive && second !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, second]);  // NEED TO CHEKC IF I NEED TO PUT IN HERE ALSO MINUTE, HOUR VAR 




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
            <div className="timer--digit">
                <span>{(hour >= 10) ? hour : "0" + hour}</span>&nbsp;:&nbsp;
                <span>{(minute >= 10) ? minute : "0" + minute}</span>&nbsp;:&nbsp;
                <span>{(second >= 10) ? second : "0" + second}</span>{/*&nbsp;:&nbsp;*/}
                {/* <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span> */}
            </div>


            {
                (status === 0) ?
                    <div >
                        <button className="btn--timer btn--start" onClick={handleStartBtn}>Start Workout</button>
                        {/* <Button variant="success" onClick={handleStartBtn} type="text" className="btn--timer">Start</Button> */}

                    </div> : ""
            }
            {
                (status === 1) ?
                    < div >
                        <button className="btn--timer btn--pause--resume" onClick={handlePauseBtn}>Pause</button>
                        <button className="btn--timer btn--reset" onClick={handleReset}>Reset</button>
                    </div> : ""
            }

            {
                (status === 2) ?
                    < div >
                        <button className="btn--timer btn--pause--resume" onClick={handleResumeBtn}>Resume</button>
                        <button className="btn--timer btn--reset" onClick={handleReset}>Reset</button>
                    </div> : ""
            }





        </>
    );
}

export default Timer;