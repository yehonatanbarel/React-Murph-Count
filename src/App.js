import React from "react";
import './components/style.css'
import WorkOut from './components/WorkOut'
import RunCheckBox from './components/RunCheckBox'
import Timer from './components/Timer'
import BtnForTimer from './components/BtnForTimer'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  // ========================= SQUAT =========================

  const [countSquat, setCountSquat] = React.useState(0);

  function addSquat() {
    setCountSquat(prev => prev + 1);
    console.log("add squat")
  }
  function subtractSquat() {
    setCountSquat(prev => prev - 1);
    console.log("sub squat")
  }

  // ========================= PUSH UP =========================
  const [countPushUp, setCountPushUp] = React.useState(0);

  function addPushUp() {
    setCountPushUp(prev => prev + 1);
    console.log("add push up")
  }
  function subtractPushUp() {
    setCountPushUp(prev => prev - 1);
    console.log("sub push up")
  }


  // ========================= PULL UP =========================
  const [countPullUp, setCountPullUp] = React.useState(0);

  function addPullUp() {
    setCountPullUp(prev => prev + 1);
    console.log("add pull up")
  }
  function subtractPullUp() {
    setCountPullUp(prev => prev - 1);
    console.log("sub pull up")
  }


  // ******************* IN HERE I WORK ON THE STOPWATCH *******************

  const [time, setTime] = React.useState({ ms: 0, s: 0, m: 0, h: 0 });



  // ========================= RENDER ALL =========================


  return (
    <>
      <h1 className="header">Murph Count</h1>
      <div className="div--container">



        <RunCheckBox />

        <WorkOut handleAdd={addPullUp}
          handleSubtract={subtractPullUp}
          countFromState={countPullUp}
          workOutName='Pull Up'
          howMany={100} />


        <WorkOut handleAdd={addPushUp}
          handleSubtract={subtractPushUp}
          countFromState={countPushUp}
          workOutName='Push Up'
          howMany={200} />

        <WorkOut handleAdd={addSquat}
          handleSubtract={subtractSquat}
          countFromState={countSquat}
          workOutName='Squat'
          howMany={300} />



        <RunCheckBox />

        {/* // ========= WORK IN PROGRESS ======== */}

      </div>

      {/* // ========= I PUT THAT (Timer & BtnForTimer) IN HERE (OUTSIDE OF THE DIV ABOVE) SO ======== */}
      {/* // ========= IT WILL NOT GET THE AFFECT OF ALL THE STYLE OF THE DIV ABOVE ======== */}
      {/* // ========= AND WILL HAVE IT'S OWN DIV CSS STYLE ======== */}

      <div className="main--div--for--stop--watch">
        <Timer time={time} />
        <BtnForTimer />
      </div>

    </>
  )
}

export default App;
