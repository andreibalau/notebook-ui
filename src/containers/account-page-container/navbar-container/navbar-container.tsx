import './navbar-container.css';
import React from 'react';

import Avatar from '../../../components/account-page-components/navbar-components/avatar/avatar';
import MenuList from '../../../components/account-page-components/navbar-components/menulist/menulist';
import FooterList from '../../../components/account-page-components/navbar-components/footerlist/footerlist';
import {ProfileService} from '../../../service/profile-service'
import Profile from '../../../model/Profile';

interface NavBarProps{}
interface NavBarState{}

class NavBarContainer extends React.Component<NavBarProps,NavBarState>{
    private profileService:ProfileService = new ProfileService();
    private avatar:string;

    constructor(props:any){
        super(props);
        this.avatar='';
    }

    render(){
        let profile:Profile = this.profileService.getProfile();
        this.avatar = profile.avatar ? profile.avatar : profile.defaultAvatar;
        console.log(this.avatar)
        return (
            <div className="navigationBarElementsWrapper">
                <div className="headerNavBar">
                        <div className="avatarWrapper">
                            <Avatar avatar={this.avatar}/>
                        </div>
                        <div className="headerFooter">
                            <div id="profile">Profile</div>
                            <div id="notifications">N</div>
                        </div>
                </div>
                <div className="menuListNavBar">
                    <MenuList/>
                </div>
                <div className="footerNavBar">
                    <hr/>
                    <FooterList />
                </div>
            </div>
        );
    }
}

export default NavBarContainer