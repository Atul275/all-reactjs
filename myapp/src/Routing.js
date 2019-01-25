import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class Routing extends Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Routing;