import React from "react";
import PropTypes from "prop-types";


const propTypes = {
    onSaveValue: PropTypes.func.isRequired,
    aNumber: PropTypes.number
};

/*
This is making assumptions that there will need to be routing
*/
class SomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSomeUserInteractionThatEffectsTheStore(value) {
        this.props.onSaveValue(value);
    }

    render() {
        let someStaticValue = 9;
        return (<div
            onClick={this.handleSomeUserInteractionThatEffectsTheStore.bind(this, someStaticValue)}>Hi! {this.props.aNumber}</div>);
    }
}

SomeComponent.propTypes = propTypes;
export default SomeComponent;