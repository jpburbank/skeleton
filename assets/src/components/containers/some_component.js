import {connect} from "react-redux";

import {saveValue} from "actions/actions";
import SomeComponent from "components/someBaseComponentGrouping/some_component";


const mapStateToProps = (state, ownProps) => {
    return {
        aNumber: 4
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