import React from "react";
import './components/style.css'
import WorkOut from './components/WorkOut'
import RunCheckBox from './components/RunCheckBox'

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

      </div>

    </>
  )
}

export default App;
