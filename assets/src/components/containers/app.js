import {withRouter} from "react-router";
import {connect} from "react-redux";

import App from "components/app";


const mapStateToProps = (state, ownProps) => {
    return {

    };
};

const mapDispatchToProps = {
    
};

const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));

export default AppContainer;