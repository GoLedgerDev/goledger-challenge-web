import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AlbumListPage from '../Pages/AlbumListPage';
import ArtistListPage from '../Pages/ArtistListPage';
import StreamingListPage from '../Pages/StreamingListPage';
import NavBarComp from '../Components/NavBar';
import HomePage from '../Pages/HomePage';

const Routes = () => (
    <Router>
        <NavBarComp />
        <Route path="/" exact component={HomePage} />
        <Route path="/album" component={AlbumListPage} />
        <Route path="/artist" component={ArtistListPage} />
        <Route path="/streaming" component={StreamingListPage} />
    </Router>
)

export default Routes;