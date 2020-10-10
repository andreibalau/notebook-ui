import "./navbar-container.css";
import React from "react";
import RoundAvatar from "../../../components/account-page-components/navbar-components/round-avatar/round-avatar";
import Menu from "../../../components/account-page-components/navbar-components/menu/menu";
import FooterList from "../../../components/account-page-components/navbar-components/footerlist/footerlist";
import Profile from "../../../model/Profile";
import { ProfileApi } from "../../../api/profile-api";

interface NavBarProps {}
interface NavBarState {}

class NavBarContainer extends React.Component<NavBarProps, NavBarState> {
    private avatar: string;

  render() {
    let profile: Profile = ProfileApi.getProfile();
    this.avatar = profile.avatar ? profile.avatar : profile.defaultAvatar;
    const menuItemList = ["Favorites","Notes","Notebooks","Groups"];
    const menuIconList = [`${process.env.PUBLIC_URL}/icons/favorite-black-18dp.svg`,
                          `${process.env.PUBLIC_URL}/icons/description-black-18dp.svg`,
                          `${process.env.PUBLIC_URL}/icons/menu_book-black-18dp.svg`,
                          `${process.env.PUBLIC_URL}/icons/groups-black-18dp.svg`];
    return (
      <div className="navigationBarElementsWrapper">
        <div className="headerNavBar">
          <div className="avatarWrapper">
            <RoundAvatar avatar={this.avatar} />
          </div>
          <div className="headerFooter">
            <div id="profile">Profile</div>
            <div id="notifications">N</div>{/*do dumb component do process bell img and total nr of notifications */}
          </div>
        </div>
        <div className="menuListNavBar">
          <Menu items={menuItemList} itemslogo={menuIconList}/>{/*do a menu component in such a way to take logo and text beside other optional props*/}
        </div>
        <div className="footerNavBar">
          <hr />
          <FooterList />
        </div>
      </div>
    );
  }
}

export default NavBarContainer;
