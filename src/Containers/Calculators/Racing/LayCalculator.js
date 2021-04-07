import React, { Component } from 'react';

import Racing from '../../../Components/Calculators/Racing/Racing';

const COMMISIONS = {
    vicHorse : 0.06,
    nswHorse : 0.10,
    saHorse : 0.05,
    waHorse : 0.08,
    qldHorse : 0.06,
    afl: 0.025,
    nrl: 0.10,
    otherSport: 0.05,
};

class LayCalculator extends Component {

    state = {
        backStake: 0,
        backOdds: 2,
        layOdds: 2,
        layAmount: 0,
        layLiability: 0,
        raceCommision: 0.06,
        isBonus: "bonus",
    };

    test = () => {
        alert("submitted");
    };

    handleChange = this.handleChange.bind(this);
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.setState({layAmount: this.layAmountCalculator()[0], layLiability: this.layAmountCalculator()[1]}, () => {
                // console.log(this.state);
            });
        });
    };

    layAmountCalculator = () => {
        const backOdds = this.state.isBonus === "regular" ? this.state.backOdds : (this.state.backOdds - 1);
        const layAmount = (this.state.backStake * backOdds)/(this.state.layOdds - this.state.raceCommision);
        const liabilityAmount = layAmount * (this.state.layOdds - 1);
        return [layAmount, liabilityAmount];
    };
    
    render() {
        return (
            <Racing
                betType={this.state.isBonus}
                raceCommision={this.state.raceCommision}
                commisions={COMMISIONS}
                backStake={this.state.backStake}
                backOdds={this.state.backOdds}
                layOdds={this.state.layOdds}
                layAmount={this.state.layAmount}
                layLiability={this.state.layLiability}
                handleChange={this.handleChange} />
        );
    };
};

export default LayCalculator;