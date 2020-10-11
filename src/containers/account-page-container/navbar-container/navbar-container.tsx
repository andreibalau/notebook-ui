import "./navbar-container.css";
import React from "react";
import RoundAvatar from "../../../components/account-page-components/navbar-components/round-avatar/round-avatar";
import Menu from "../../../components/account-page-components/navbar-components/menu/menu";
import FooterList from "../../../components/account-page-components/navbar-components/footerlist/footerlist";
import Profile from "../../../model/Profile";
import { ProfileApi } from "../../../api/profile-api";

interface MediaTypeIconItems{
    tablet:string[],
    laptop:string[],
    s4k:string[]
}
interface NavBarProps {}
interface NavBarState {
    screenWidth: number
}

class NavBarContainer extends React.Component<NavBarProps, NavBarState> {
  private screenWidth: number=window.innerWidth;
  private avatar: string;
  private readonly mediatTypeTablet_menuIconList:string[] = [`${process.env.PUBLIC_URL}/icons/favorite-black-14dp.svg`,
                                                            `${process.env.PUBLIC_URL}/icons/description-black-14dp.svg`,
                                                            `${process.env.PUBLIC_URL}/icons/menu_book-black-14dp.svg`,
                                                            `${process.env.PUBLIC_URL}/icons/groups-black-14dp.svg`];
  private readonly mediatTypeLaptop_menuIconList:string[] = [`${process.env.PUBLIC_URL}/icons/favorite-black-18dp.svg`,
                                                            `${process.env.PUBLIC_URL}/icons/description-black-18dp.svg`,
                                                            `${process.env.PUBLIC_URL}/icons/menu_book-black-18dp.svg`,
                                                            `${process.env.PUBLIC_URL}/icons/groups-black-18dp.svg`];
  private readonly mediaType4k_menuIconList:string[] = [`${process.env.PUBLIC_URL}/icons/favorite-black-24dp.svg`,
                                                        `${process.env.PUBLIC_URL}/icons/description-black-24dp.svg`,
                                                        `${process.env.PUBLIC_URL}/icons/menu_book-black-24dp.svg`,
                                                        `${process.env.PUBLIC_URL}/icons/groups-black-24dp.svg`];
  private readonly mediaTypeIconItems:MediaTypeIconItems = {
    tablet: this.mediatTypeTablet_menuIconList,
    laptop: this.mediatTypeLaptop_menuIconList,
    s4k: this.mediaType4k_menuIconList,
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateScreenWidthDimension);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenWidthDimension);
  }
  private updateScreenWidthDimension = () => {
    this.setState(()=>{ this.screenWidth= window.innerWidth});
  };

  private responsiveFetchOfMenuIcons = (iconItems:MediaTypeIconItems):string[] => {
    if(this.screenWidth<768){
      return iconItems.tablet;
    }else if(this.screenWidth<=1920 && this.screenWidth>=768){
      return iconItems.laptop;
    }else if(this.screenWidth>1920){
      return iconItems.s4k;
    } else {
        return [];
    }
  }

  render() {
    let profile: Profile = ProfileApi.getProfile();
    this.avatar = profile.avatar ? profile.avatar : profile.defaultAvatar;
    const menuItemList = ["Favorites","Notes","Notebooks","Groups"];
                
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
          <div id="menuList">
            <Menu items={menuItemList} itemslogo={this.responsiveFetchOfMenuIcons(this.mediaTypeIconItems)}/>{/*do a menu component in such a way to take logo and text beside other optional props*/}
          </div>
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
