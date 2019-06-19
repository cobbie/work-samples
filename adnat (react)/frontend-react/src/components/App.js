import React, { Component } from 'react';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup'
import JoinCreateOrg from '../pages/JoinCreateOrg/JoinCreateOrg'
import OrgActions from '../pages/OrgActions/OrgActions'
import ShiftPage from '../pages/ShiftPage/ShiftPage';

class App extends Component {
    render() {
        return(
        <div>
            <ShiftPage /> 

        </div>
        )
    }
}
export default App;