import React from 'react';
import './ChannelRow.css';
import {Avatar} from "@material-ui/core";
import Verified from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({image, channelName, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channelName} src={image}/>
            <div className="channelRow__text">
                <h4>{channelName}{verified && <Verified/>}</h4>
                <p>{subs} Subscribers . {noOfVideos} Videos</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ChannelRow;
