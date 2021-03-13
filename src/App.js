import React from 'react';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import HomePage from './components/Pages/homepage.jsx';
import About from './components/Aboutus/About.jsx';
import Contact from './components/contact/Contact';
import Heading from './components/Navbar/navbar.jsx';
import Join from './components/Join/join.jsx';
import video from './components/Video/video.jsx';

const App = () => {
    return (
        <div style={{padding:'0px'}}>
        <Router>
            <Heading />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/contactus" component={Contact}/>
                <Route path="/signin" component={Join} />
                <Route path="/:url" component={video} />
            </Switch>
        </Router>
        </div>
    )
}
export default App;
