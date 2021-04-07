import React, { Component } from 'react';
import styles from './Content.module.css';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

class MainContent extends Component {
    render() {

        return (
            <div>
                <h1 className={styles.h1}>Hello, I'm Sothea-Roth Bak</h1>
                <p className={styles.p}>
                    👋 I'm a software engineer based in Melbourne, Australia.
                    I'm currently studying a Master of Engineering (Software) at The University of Melbourne.
                </p>
                <h2>My projects 👇🏼</h2>
                <h2>My links 👇🏼</h2>
                <ul className={styles.ul1}>
                    <li><a href="https://www.github.com/sothbak">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/baksothearoth/">LinkedIn</a></li>
                </ul>
            </div>
        );
    }
}

export default MainContent;