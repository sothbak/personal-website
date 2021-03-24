import React, { Component } from 'react';
import styles from './Content.module.css';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className={styles.Content}>
                <h1 className={styles.h1}>Sothea-Roth Bak</h1>
                <p className={styles.p}>  
                    Hello 👋 I'm a software engineering student based in Melbourne, Australia.
                </p>
                <h2>My projects 👇🏼</h2>
                <h2>My links 👇🏼</h2>
                <ul>
                    <li><Link to="github.com/sothbak">GitHub</Link></li>
                    <li><Link to="https://www.linkedin.com/in/baksothearoth/">LinkedIn</Link></li>
                </ul>
            </div>
        )
    }
}

export default Content;