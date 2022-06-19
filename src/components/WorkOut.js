import './style.css'

function WorkOut(props) {
    return (
        <div className='each--work--out'>
            <div className='howManyForWorkOut'>
                <h1 >{props.howMany} {props.workOutName}</h1>
            </div>
            <div className="div--h1">
                <h1 className='h1--count'>{props.countFromState}</h1>
            </div>
            <div className="div--contaier--button">
                <button onClick={props.handleSubtract} type="text" className="btn">subtract</button>
                <button onClick={props.handleAdd} type="text" className="btn">add</button>
            </div>
        </div>
    )

}


export default WorkOut;