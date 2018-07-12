import {connect} from "react-redux";

import {saveValue} from "actions/actions";
import SomeComponent from "components/someBaseComponentGrouping/some_component";


const mapStateToProps = (state, ownProps) => {
    let number = 0;
    if (state.someValues && state.someValues.value) {
        number = state.someValues.value;
    }
    return {
        aNumber: number
    };
};

const mapDispatchToProps = {
    onSaveValue: saveValue,
};

const SomeComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SomeComponent);

export default SomeComponentContainer;