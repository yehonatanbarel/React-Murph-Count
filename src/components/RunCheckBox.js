import './style.css'

function RunCheckBox() {
    return (
        <table>
            <tbody>
                <tr >
                    <td className="checkRun">
                        <label >
                            <span>1.6 kilometers</span>
                            <input type="checkbox" id='runText' />
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default RunCheckBox;