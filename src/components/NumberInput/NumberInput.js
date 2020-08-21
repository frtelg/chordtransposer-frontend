import React from 'react';
import classes from './NumberInput.module.css';

export default props =>
    <div>{props.label}: <input
            className={classes.NumberInput}
            type="number"
            value={parseInt(props.value)}
            onChange={event => props.changeHandler(parseInt(event.target.value))}
        />
    </div>
