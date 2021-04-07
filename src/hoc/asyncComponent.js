import React, { Component } from "react";

// for lazy loading, components that may be visited quite rarely and do not need to be immediately rendered at the start, only rendered when needed, makes the rest of the
// application faster

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;