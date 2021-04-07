import React, { Component } from 'react';

import Sport from '../../../Components/Calculators/Sport/Sport';

class EarlyPayoutCalculator extends Component {

    state = {
        backStake: 0,
        backOdds: 2,
        layOdds: 2,
        layAmount: 0,
        layLiability: 0,
        winProfit: 0,
        loseProfit: 0,
        sportCommision: 0.025,
        pinged: false,
        hedgeOdds: 1,
        hedgeAmount: 0,
        hedgeWinProfit: 0,
        hedgeLoseProfit: 0,
    };

    test = () => {
        alert("submitted");
    };

    handleChange = this.handleChange.bind(this);
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.setState({layAmount: this.layAmountCalculator()[0], layLiability: this.layAmountCalculator()[1]}, () => {
                this.setState({winProfit: this.profitCalculator()[0], loseProfit: this.profitCalculator()[1]}, () => {
                });
            });
        });
    };

    handleHedgeChange = this.handleHedgeChange.bind(this);

    handleHedgeChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.setState({hedgeAmount: this.optimalHedgeAmount()[0], hedgeWinProfit: this.optimalHedgeAmount()[1],
                hedgeLoseProfit: this.optimalHedgeAmount()[2]})
        });
    };

    layAmountCalculator = () => {
        const backOdds = this.state.backOdds;
        const layAmount = (this.state.backStake * backOdds)/(this.state.layOdds - this.state.sportCommision);
        const liabilityAmount = layAmount * (this.state.layOdds - 1);
        return [layAmount, liabilityAmount];
    };

    profitCalculator = () => {
        const winAmount = (this.state.backStake * (this.state.backOdds - 1)) - this.state.layLiability;
        const loseAmount = (this.state.layAmount * (1 - this.state.sportCommision)) - this.state.backStake;
        return [winAmount, loseAmount]; 
    }

    optimalHedgeAmount = () => {
        // if (this.state.pinged) {
            const hedgeOdds = this.state.hedgeOdds;
            const earlyPayoutProfit = ((this.state.backOdds - 1) * this.state.backStake);
            var hedgeAmount = 0;
            const min = this.state.backStake * this.state.backOdds * 10;
            var winProfit = 0;
            var loseProfit = 0;
            for (var i = 0; i < (this.state.backStake * this.state.backOdds); i += 0.5) {
                var WPtemp = earlyPayoutProfit - this.state.layLiability + (i * (hedgeOdds - 1) * (1 - this.state.sportCommision));
                var LPtemp = earlyPayoutProfit + (this.state.layAmount * (1 - this.state.sportCommision)) - i;
                if (Math.round(WPtemp) === Math.round(LPtemp)) {
                    hedgeAmount = i;
                    winProfit = WPtemp;
                    loseProfit = LPtemp;
                    return [hedgeAmount, winProfit, loseProfit];
                }
                if (Math.round(WPtemp) - Math.round(LPtemp) < min) {
                    hedgeAmount = i;
                    winProfit = WPtemp;
                    loseProfit = LPtemp;
                }
            }
            return [hedgeAmount, winProfit, loseProfit];
        // }
        // else {
        //     return [0, 0, 0];
        // }
    }
    
    render() {
        return (
            <Sport
                sport={this.state.sportCommision}
                backStake={this.state.backStake}
                backOdds={this.state.backOdds}
                layOdds={this.state.layOdds}
                layAmount={this.state.layAmount}
                layLiability={this.state.layLiability}
                winProfit={this.state.winProfit}
                loseProfit={this.state.loseProfit}
                handleChange={this.handleChange}
                handleHedgeChange={this.handleHedgeChange}
                pinged={this.state.pinged}
                hedgeOdds={this.state.hedgeOdds}
                hedgeAmount={this.state.hedgeAmount}
                hedgeWinProfit={this.state.hedgeWinProfit}
                hedgeLoseProfit={this.state.hedgeLoseProfit} />
        );
    };
};

export default EarlyPayoutCalculator;