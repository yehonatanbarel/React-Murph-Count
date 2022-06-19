import './style.css'

function RunCheckBox() {
    return (
        <table>
            <tr>
                <td class="checkRun">
                    <label for='run'>
                        <span>1.6 kilometers</span>
                        <input type="checkbox" id='runText' />
                    </label>
                </td>
            </tr>
        </table>
    )
}

export default RunCheckBox;