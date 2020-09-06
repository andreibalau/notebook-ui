import './navbar-container.css';
import React from 'react';

import Avatar from '../../../components/account-page-components/navbar-components/avatar/avatar';
import MenuList from '../../../components/account-page-components/navbar-components/menulist/menulist';
import FooterList from '../../../components/account-page-components/navbar-components/footerlist/footerlist';

class NavBarContainer extends React.Component{
    render(){
        return (
            <div className="navigationBarElementsWrapper">
                <div className="headerNavBar">
                        <div className="avatarPosition">
                            <Avatar />
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