import React from "react";
import "./account-page-container.css";
class AccountPageContainer extends React.Component {
  render() {
    return (
        <div className="accountContainer">
            <div className="navigationBar">
                Account Page Container
                Nav Bar
            </div>
            <div className="accountContent">content</div>
        </div>
        );
  }
}

export default AccountPageContainer;