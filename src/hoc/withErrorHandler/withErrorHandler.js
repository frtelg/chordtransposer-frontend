import React, { Component } from 'react';

import Error from '../../components/Error/Error';
import Aux from '../Aux/Aux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            })
            axios.interceptors.response.use(null
            , error => {
                this.setState({ error: error })
            })
        }

        closedHandler = () => this.setState({ error: null })

        render() {
            return (
                <Aux>
                    <Error show={this.state.error !== null} clickHandler={this.closedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Error>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        };
    }
}

export default withErrorHandler;