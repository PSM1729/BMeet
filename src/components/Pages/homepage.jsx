import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Mpage from '../MainPage/mpage.jsx'
import Motive from '../Motive/Motive.jsx';

const HomePage= () => {
    return (
        <div>
            <BrowserRouter>
                <Mpage />
                <Motive />
            </BrowserRouter>
        </div>
    )
}
export default HomePage;
