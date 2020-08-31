import React from 'react';
import './VideoPlayer.css'
import RecommendedVideos from "../RecommendedVideos";

function VideoPlayer() {


    return (
        <div className="videoPlayer">
            <video autoPlay controls>

                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>
            <RecommendedVideos/>
        </div>
    );
}

export default VideoPlayer;
