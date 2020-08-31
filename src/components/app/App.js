import React from 'react';
import './App.css';
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import RecommendedVideos from "../recommended/RecommendedVideos";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from "../search/SearchPage";
import VideoPlayer from "../recommended/videoplayer/VideoPlayer";

function App() {
    return (
        <div className="app">

            <Router>
                <Header/>
                <Switch>
                    <Route path="/search/:searchTerm">
                        <div className="app__page">
                            <SideBar/>
                            <SearchPage/>
                        </div>
                    </Route>
                    <Route path="/video/:videoUrl" component={VideoPlayer}>
                        <div className="app__page">
                            <SideBar/>
                            <VideoPlayer/>
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="app__page">
                            <SideBar/>
                            <RecommendedVideos/>
                        </div>
                    </Route>
                </Switch>
            </Router>


        </div>
    );
}

export default App;
