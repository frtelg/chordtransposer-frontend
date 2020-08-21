import React from 'react';
import classes from './Error.module.css';
import CloseIcon from "../Icon/CloseIcon/CloseIcon";

const determineClasses = props => {
    const visibilityClass = props.show ? classes.Show : classes.Hidden;

    return `${classes.Error} ${visibilityClass}`;
}

export default props =>
    <div className={determineClasses(props)}>
        <CloseIcon clickHandler={props.clickHandler} />
        <p>An Exception occurred: {props.children}</p>
    </div>