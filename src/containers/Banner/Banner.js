import React, { Component } from 'react';
import axios from '../../axios-backend';
import classes from './Banner.module.css';
import Version from '../../components/Version/Version';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Banner extends Component {

    state = {
        version: ""
    }

    componentDidMount() {
        axios.get('/version')
            .then(response => this.setState({ version: response.data.version }))
            .catch(error => console.log(error));
    }

    render() {
        return <div className={classes.Banner}>
            <div className={classes.Title}><h1>ChordTransposer</h1></div>
            <Version version={this.state.version} />
        </div>
    }
}

export default withErrorHandler(Banner, axios)