import React, { Component } from 'react';
import styles from './Content.module.css';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import LayCalculator from "../Calculators/Racing/LayCalculator";
import EarlyPayoutCalculator from "../Calculators/Sport/EarlyPayoutCalculator";
import MainContent from "./MainContent";

class Content extends Component {
    render() {

        return (
            <div className={styles.Content}>
                <header className={styles.header}>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <li><NavLink 
                                to="/" 
                                exact
                                >Home</NavLink></li> {/* to is always an absolute path, to build a relative path need to use this.props.match.url + '/...' */}
                            <li><NavLink 
                                to="/lay-calculator" 
                                exact
                                >Lay Calculator</NavLink></li>
                            {/* Link makes it so the page rerenders, but doesn't reload */}
                            <li><NavLink 
                                to="/early-payout-calculator" 
                                exact
                                >Early Payout Calculator</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/lay-calculator" component={LayCalculator} />
                    <Route path="/early-payout-calculator" component={EarlyPayoutCalculator} />
                    <Route path="/" component={MainContent} />
                    <Route render={() => <h1>Not Found</h1>}/> {/* will catch all unknown 404 errors (routes without a path), won't work with redirects */}
                </Switch> {/* Switch makes sure that only one Route, the first one that matches, is executed at a time */}
            </div>
        );
    }
}

export default Content;