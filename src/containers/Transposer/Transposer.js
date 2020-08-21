import React, { Component } from 'react';
import classes from './Transposer.module.css';
import TextArea from "../../components/TextArea/TextArea";
import axios from '../../axios-backend';
import NumberInput from "../../components/NumberInput/NumberInput";
import TransposerButtons from "../../components/TransposerButtons/TransposerButtons";
import ResetButtons from "../../components/ResetButtons/ResetButtons";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Transposer extends Component {
    state = {
        steps: 0,
        inputText: "",
        outputText: "",
        copied: false
    }

    handleInputChange = event => {
        this.setState({ inputText: event.target.value },
            () => {
            if (this.state.inputText === "") {
                this.setState({ steps: 0 })
            }
        });
    }

    handleOutputChange = () => {
        this.setState({ copied: false });
    }

    handleStepsChange = steps => {
        this.setState({ steps: steps })
    }

    handleSingleStepChange = steps => {
        this.setState(
            prevState => ({ steps: prevState.steps + steps }),
            () => this.handleInputSubmit()
        );
    }

    handleAddedStep = () => this.handleSingleStepChange(1);

    handleRemovedStep = () => this.handleSingleStepChange(-1);

    handleInputSubmit = () => {
        this.setState({ copied: false });
        axios.post('/transpose/' + this.state.steps, { text: this.state.inputText })
            .then(response => this.setState({ outputText: response.data.transposedText }))
            .catch(error => console.log(error));
    }

    handleCopyButtonClick = () => {
        this.setState({ copied: true })
    }

    resetButtonHandler = () => {
        this.setState({ copied: false, steps: 0, outputText: '' })
    }

    clearAllButtonHandler = () => {
        this.setState({ inputText: "" }, () => this.resetButtonHandler())
    }

    render() {
        return (
            <div className={classes.Transposer}>
                <h1>Chord transposer</h1>
                <p>Paste in any text containing (guitar) chords and easily transpose chords by pressing some buttons :)</p>
                <TextArea inputText={this.state.inputText}
                          changeHandler={this.handleInputChange}
                />
                <NumberInput label="Steps"
                             value={this.state.steps}
                             changeHandler={this.handleStepsChange} />
                <TransposerButtons submitHandler={this.handleInputSubmit}
                                   disableTransposeButton={this.state.steps === 0}
                                   disableAllButtons={this.state.inputText === ""}
                                   stepAddedHandler={this.handleAddedStep}
                                   stepRemovedHandler={this.handleRemovedStep}
                                   copyButtonHandler={this.handleCopyButtonClick}
                                   copyText={this.state.outputText}
                                   copied={this.state.copied}
                />
                <ResetButtons resetStepsHandler={this.resetButtonHandler}
                              clearAllHandler={this.clearAllButtonHandler}
                              disableResetButton={this.state.steps === 0}
                              disableClearAllButton={this.state.inputText === ""}
                />
                <TextArea inputText={this.state.outputText}
                          changeHandler={this.handleOutputChange}
                />
            </div>
        )
    }
}

export default withErrorHandler(Transposer, axios);