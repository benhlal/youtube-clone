import React, {useState} from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import {Search} from "@material-ui/icons";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";


function Header() {

    const [inputSearch, setInputSearch] = useState("")
    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header__logo" src={'https://cdn.worldvectorlogo.com/logos/youtube-2.svg'}/>
                </Link>
            </div>


            <div className="header__center">

                <input type="text" placeholder={'Search ...'}
                       onChange={(e => setInputSearch(e.target.value))}
                       value={inputSearch}/>

                <Link to={`/search/${inputSearch}`}>
                    <div className="header__center__button__container">
                        <Search className="header__search_button"/>
                    </div>
                </Link>
            </div>


            <div className="header__right">
                <VideoCallOutlinedIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsActiveOutlinedIcon className="header__icon"/>
                {null ? (
                        <div className="app__login__avatar">
                            <Button onClick={''}>Logout</Button>
                            <Avatar className="header__icon"/>

                        </div>
                    )
                    : (<div className="app__signup__container">
                        <Button type="button" onClick={''}>Sign In</Button>
                    </div>)
                }
            </div>


        </div>
    );
}

export default Header;
