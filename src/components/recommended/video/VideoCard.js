import React from 'react';
import './VideoCard.css'
import {Avatar} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReportIcon from '@material-ui/icons/Report';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {Link} from "react-router-dom";

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
const videoUrl='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'

    return (
        <div className="videoCard">
            <Link style={{color: 'inherit', textDecoration: 'none'}} to={`/video/${videoUrl}`}>
                <img className="videoCard__thumbnail" src={image}/>
            </Link>
            <div className="videoCard__info">

                <Avatar className="videoCard__avatar"
                        alt={channel}
                        src={channelImage}/>
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>

                <MoreVertIcon className="videoCard__text__menu" onClick={handleClick}/>

                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}>

                    <MenuItem onClick={handleClose}>
                        <div className="menu__item">
                            <AddToQueueIcon/><span>Watch Later</span>
                        </div>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <div className="menu__item">
                            <PlaylistAddIcon/><span>Save To Playlist</span>
                        </div>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <div className="menu__item">
                            <NotInterestedIcon/><span>Not Interested</span>
                        </div>
                    </MenuItem>

                    <hr/>

                    <MenuItem onClick={handleClose}>
                        <div className="menu__item">
                            <RemoveCircleOutlineIcon/><span>Don't Recommend</span>
                        </div>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <div className="menu__item">
                            <ReportIcon/><span> Report</span>
                        </div>
                    </MenuItem>

                </Menu>

            </div>


        </div>
    );
}

export default VideoCard;
