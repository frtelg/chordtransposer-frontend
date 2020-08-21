import React from 'react';
import classes from './TextArea.module.css';

export default props => <div className={classes.TextArea} >
    <textarea
        rows={25}
        cols={100}
        value={props.inputText}
        onChange={props.changeHandler}
        disabled={props.changeHandler == null}
    />
    </div>