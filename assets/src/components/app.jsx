import React from "react";
import {Switch, Route} from "react-router-dom";

import someComponent from "components/containers/some_component";

const propTypes = {};

/*
This is making assumptions that there will need to be routing
*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderRouting() {
        return (<Switch>
            <Route 
                path="/" 
                component={someComponent}
                key="component"/>
        </Switch>);
    }

    render() {
        let routing = this.renderRouting();
        return (<div>
            {routing}
        </div>);
    }
}

App.propTypes = propTypes;
export default App;