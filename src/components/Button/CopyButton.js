import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from './Button.module.css';

const determineClasses = isGreen => isGreen ? `${classes.Button} ${classes.Green}` : classes.Button;

export default props => <CopyToClipboard text={props.copyText}
                                         onCopy={props.clickedHandler}
>
    <button disabled={props.disabled}
            className={determineClasses(props.isCopied)}
    >
        {props.text}
    </button>
</CopyToClipboard>