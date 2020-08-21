import React from 'react';
import classes from './ResetButtons.module.css';
import Button from "../Button/Button";
import buttonClasses from "../Button/Button.module.css";

export default props => {
    return <div className={classes.ResetButtons}>
        <Button text="Reset"
                additionalClasses={[buttonClasses.Red]}
                disabled={props.disableResetButton}
                clickedHandler={props.resetStepsHandler}
        />
        <Button text="Clear all"
                additionalClasses={[buttonClasses.Red]}
                disabled={props.disableClearAllButton}
                clickedHandler={props.clearAllHandler}
        />
    </div>
}