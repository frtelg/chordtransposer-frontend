import React from 'react';
import classes from './Button.module.css';

const determineClasses = props => {
    if (props.additionalClasses) {
        return `${classes.Button}${props.additionalClasses.map(c => ` ${c}`)}`
    }
    return classes.Button
}

export default props => <button className={determineClasses(props)}
                                onClick={props.clickedHandler}
                                disabled={props.disabled} >
    {props.text}
</button>