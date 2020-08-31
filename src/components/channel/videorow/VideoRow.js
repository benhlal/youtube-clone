import React from 'react';
import './VideoRow.css';

function VideoRow({image, channelName, views, subs, timestamp, description, title}) {
    return (
        <div className="videoRow">
            <img src={image} alt={''}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__text__headline">
                    {channelName} .
                    <span className="videoRow__text__subs">
                      <span className="videoRow__text__subsNumber">{subs}</span>Subscribers
                    </span>
                    . {views} Views
                    . {timestamp}</p>
                <p className="videoRow__text__desc">{description}</p>
            </div>

        </div>
    );
}

export default VideoRow;
