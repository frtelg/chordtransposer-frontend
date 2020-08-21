import React from 'react';

import classes from './CloseIcon.module.css';
import icon from '../../../assets/icons/close.png'

export default props => <div className={classes.CloseIcon} onClick={props.clickHandler}>
    <img src={icon} alt={"Close"} />
</div>
