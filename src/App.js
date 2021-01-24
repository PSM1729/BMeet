import React from 'react';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import HomePage from './components/Pages/homepage.jsx';
import About from './components/Pages/about.jsx';
import Heading from './components/Navbar/navbar.jsx';
import Join from './components/Join/join.jsx';

const App = () => {
    return (
        <div style={{padding:'0px'}}>
        <Router>
            <Heading />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/signin" component={Join}/>
            </Switch>
        </Router>
        </div>
    )
}
export default App;
