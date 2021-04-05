import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import {useStateValue} from "./StateProvider"
function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
               <SearchIcon />
               <input />
            </div>
            <div className="header_middle">
                    <div className="header_option">
                      <HomeTwoToneIcon  fontSize="large"/>
                    </div>
                    <div className="header_option">
                        <FlagTwoToneIcon fontSize="large"/>
                    </div>
                    <div className="header_option">
                        < SubscriptionsOutlinedIcon  fontSize="large"/>
                    </div>
                    <div className="header_option">
                        <StorefrontOutlinedIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <StorefrontOutlinedIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <SupervisedUserCircleOutlinedIcon fontSize="large" />
                    </div>
            </div>
            <div className="header_right">
                  < div className="header_info">
                      <Avatar src={user.photoURL} /> 
                      <h4>{user.displayName}</h4>
                      </ div>
                      <IconButton>
                          <AddIcon />
                      </IconButton>
                      <IconButton>
                          <ForumIcon />
                      </IconButton>
                      <IconButton>
                          <NotificationsActiveIcon />
                      </IconButton>
                      <IconButton>
                         <ExpandMoreIcon />
                      </IconButton>
            </div>
            
        </div>
    )
}

export default Header
