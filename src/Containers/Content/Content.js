import React, { Component } from 'react';
import styles from './Content.module.css';

class Content extends Component {
    render() {
        return (
            <div className={styles.Content}>
                <p className={styles.p}>epic</p>
            </div>
        )
    }
}

export default Content;