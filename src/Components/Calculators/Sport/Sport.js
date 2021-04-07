import React from 'react';
import Aux from '../../../hoc/Auxil';

const racing = (props) => {
    const newBet = (
        <div>
            <form onSubmit={props.test}>
                <label>
                    Hedge Odds
                    <input type="number" step="0.01" value={props.hedgeOdds} name="hedgeOdds" onChange={props.handleHedgeChange} />
                </label>
            </form>
            <p>You should bet: ${props.hedgeAmount.toFixed(2)}</p>
            <p>Profit if team wins: ${props.hedgeWinProfit.toFixed(2)}</p>
            <p>Profit if team loses: ${props.hedgeLoseProfit.toFixed(2)}</p>
        </div>
    );

    return (
        <Aux>
            <form onSubmit={props.test}>
                <label>
                    Sport
                    <select value={props.sport} name="sportCommision" onChange={props.handleChange}>
                        <option value={0.025}>AFL</option>
                        <option value={0.1}>NRL</option>
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
            </form>
            <p onClick={() => {navigator.clipboard.writeText(props.layAmount.toFixed(2))}}>Lay amount: ${props.layAmount.toFixed(2)}</p>
            <p>Lay liability: ${props.layLiability.toFixed(2)}</p>
            <p>Profit if team wins: ${props.winProfit.toFixed(2)}</p>
            <p>Profit if team loses: ${props.loseProfit.toFixed(2)}</p>

            <label>
                Early payout achieved?
                <select value={props.pinged} name="pinged" onChange={props.handleHedgeChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>
            </label>
            {newBet}
            
        </Aux>
    )
}

export default racing;