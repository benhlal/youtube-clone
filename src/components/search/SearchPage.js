import React from 'react';
import './SearchPage.css';
import {TuneOutlined} from "@material-ui/icons";
import ChannelRow from "../channel/ChannelRow";
import VideoRow from "../channel/videorow/VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
                image={"https://yt3.ggpht.com/a/AATXAJzNvwShqAXWgyOy3UWrum4dAF49r5jH9PrrBTPiRg=s144-c-k-c0xffffffff-no-rj-mo"}
                channelName={"youness"}
                verified
                subs={"234K"}
                noOfVideos={300}
                description={"Don't forget to subscribe for more covers and tutorials !"}
            />
            <hr/>

            <VideoRow
                views={"213k"}
                timestamp={"3 weeks ago"}
                image={'https://i.ytimg.com/vi/2cRfJOSHexQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNTAWNQlFWNz9_Jh8kLvKZD-hvDA'}
                title={'This is a title'}
                description={'Don\'t forget to subscribe for more covers and tutorials'}
                channelName={'MyChannel'}
                subs={'2334'}
            />

            <VideoRow
                views={"213k"}
                timestamp={"3 weeks ago"}
                image={'https://i.ytimg.com/vi/2cRfJOSHexQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNTAWNQlFWNz9_Jh8kLvKZD-hvDA'}
                title={'This is a title'}
                description={'Don\'t forget to subscribe for more covers and tutorials'}
                channelName={'MyChannel'}
                subs={'2334'}
            />

            <VideoRow
                views={"213k"}
                timestamp={"3 weeks ago"}
                image={'https://i.ytimg.com/vi/2cRfJOSHexQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNTAWNQlFWNz9_Jh8kLvKZD-hvDA'}
                title={'This is a title'}
                description={'Don\'t forget to subscribe for more covers and tutorials'}
                channelName={'MyChannel'}
                subs={'2334'}
            />

            <VideoRow
                views={"213k"}
                timestamp={"3 weeks ago"}
                image={'https://i.ytimg.com/vi/2cRfJOSHexQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNTAWNQlFWNz9_Jh8kLvKZD-hvDA'}
                title={'This is a title'}
                description={'Don\'t forget to subscribe for more covers and tutorials'}
                channelName={'MyChannel'}
                subs={'2334'}
            />
        </div>
    );
}

export default SearchPage;
