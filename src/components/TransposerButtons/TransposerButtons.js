import React from 'react';
import classes from './TransposerButtons.module.css';
import Button from "../Button/Button";
import CopyButton from "../Button/CopyButton";

const copyButtonText = isCopied => isCopied ? "Copied!" : "Copy transposed text";

export default props => {
    return <div className={classes.TransposerButtons}>
        <Button text="Transpose!"
                clickedHandler={props.submitHandler}
                disabled={props.disableTransposeButton || props.disableAllButtons}
        />
        <Button text="+"
                clickedHandler={props.stepAddedHandler}
                disabled={props.disableAllButtons}
        />
        <Button text="-"
                clickedHandler={props.stepRemovedHandler}
                disabled={props.disableAllButtons}
        />
        <CopyButton text={copyButtonText(props.copied)}
                    clickedHandler={props.copyButtonHandler}
                    copyText={props.copyText}
                    isCopied={props.copied}
                    disabled={props.disableCopyButton}
        />
    </div>
}