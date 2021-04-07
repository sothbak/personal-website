import React from 'react';
import Aux from '../../../hoc/Auxil';

const racing = (props) => {

    return (
        <Aux>
            <form onSubmit={props.test}>
                <label>
                    Type
                    <select value={props.betType} name="isBonus" onChange={props.handleChange}>
                        <option value={"bonus"}>Bonus Turnover</option>
                        <option value={"regular"}>Regular Arb</option>
                    </select>
                </label>
                <label>
                    State
                    <select value={props.raceCommision} name="raceCommision" onChange={props.handleChange}>
                        <option value={props.commisions.vicHorse}>Victoria</option>
                        <option value={props.commisions.nswHorse}>New South Wales</option>
                        <option value={props.commisions.saHorse}>South Australia</option>
                        <option value={props.commisions.qldHorse}>Queensland</option>
                        <option value={props.commisions.waHorse}>Western Australia</option>
                    </select>
                </label>
                <label>
                    Back stake
                    <input type="number" step="0.01" value={props.backStake} name="backStake" onChange={props.handleChange} />
                </label>
                <label>
                    Back odds
                    <input type="number" step="0.01" value={props.backOdds} name="backOdds" onChange={props.handleChange} />
                </label>
                <label>
                    Lay odds
                    <input type="number" step="0.01" value={props.layOdds} name="layOdds" onChange={props.handleChange} />
                </label>
                {/* <input type="submit" value="Calculate" /> */}
            </form>
            <p onClick={() => {navigator.clipboard.writeText(props.layAmount.toFixed(2))}}>Lay amount: ${props.layAmount.toFixed(2)}</p>
            <p>Lay liability: ${props.layLiability.toFixed(2)}</p>
        </Aux>
    )
}

export default racing;