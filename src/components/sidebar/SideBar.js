import React, {useState} from 'react';
import './SideBar.css';
import SideBarRow from "./sidebarrow/SideBarRow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Constants from '../../models/sidebarrmenu/SideBarMenu'
import {Link} from "react-router-dom";

function SideBar() {

    const [active, setActive] = useState([])
    const switchSelectedFlag = (e, element) => {

        let tab = []
        switch (element) {

            case Constants.menuElement.HOME:
                tab[0] = true;
                setActive(tab)
                console.log(tab)

                break;

            case Constants.menuElement.TRENDING:
                tab[1] = true;
                setActive(tab)
                break;

            case Constants.menuElement.SUB:

                tab[2] = true;
                setActive(tab)
                break;

            case Constants.menuElement.VIDS:
                tab[3] = true;
                setActive(tab)
                break;

            case Constants.menuElement.HISTORY:

                tab[4] = true;
                setActive(tab)
                break;
            case Constants.menuElement.MY_VIDS:

                tab[5] = true;
                setActive(tab)
                break;
            case Constants.menuElement.MORE:
                tab[6] = true;
                setActive(tab)
                break;

        }
    }


    return (
        <div className="sidebar">
            <Link style={{ color: 'inherit', textDecoration: 'none'}} to="/">
                <div onClick={(e) => switchSelectedFlag(e, Constants.menuElement.HOME)}>
                    <SideBarRow selected={active[0]} Icon={HomeIcon} title={Constants.menuElement.HOME}/>
                </div>
            </Link>
            <div onClick={(e) => switchSelectedFlag(e, Constants.menuElement.TRENDING)}>
                <SideBarRow selected={active[1]} Icon={WhatshotIcon} title={Constants.menuElement.TRENDING}/>
            </div>

            <div onClick={(e) => switchSelectedFlag(e, Constants.menuElement.SUB)}>
                <SideBarRow selected={active[2]} Icon={SubscriptionsIcon} title={'Subscription'}/>
            </div>

            <div onClick={(e) => switchSelectedFlag(e, Constants.menuElement.VIDS)}>
                <SideBarRow selected={active[3]} Icon={VideoLibraryIcon} title={'Videos'}/>
            </div>

            <hr className="separator"/>

            <div onClick={(e) => switchSelectedFlag(e, Constants.menuElement.HISTORY)}>
                <SideBarRow selected={active[4]} Icon={HistoryIcon} title={'History'}/>
            </div>

            <div onClick={(e) => switchSelectedFlag(e, Constants.menuElement.MY_VIDS)}>
                <SideBarRow selected={active[5]} Icon={PlayCircleOutlineIcon} title={'My Videos'}/>
            </div>

            <div onClick={(e) => switchSelectedFlag(e, Constants.menuElement.MORE)}>
                <SideBarRow selected={active[6]} Icon={ExpandMoreIcon} title={'More'}/>
            </div>

        </div>
    );
}

export default SideBar;
