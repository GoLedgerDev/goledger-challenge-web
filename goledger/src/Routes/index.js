import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

const Routes = () => {
    <Router>
        <Route path="/" exact component={HomePage} />
    </Router>
}

export default Routes;