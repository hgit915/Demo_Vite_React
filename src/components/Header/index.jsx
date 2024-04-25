import React, { memo, useEffect, useState } from "react";
import { HeaderWrapper } from "./style";
import logoImg from "assets/svg/logoDark.svg";
import menu from "assets/svg/ic_menu.svg";
import profile from "assets/svg/ic_Profile.svg";

const Header = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const windowHandleClick = () => {
      setShowPanel(false);
    };
    window.addEventListener("click", windowHandleClick);
    return () => {
      window.removeEventListener("click", windowHandleClick);
    };
  }, []);

  const handleShowPanel = (e) => {
    e.stopPropagation(); // 阻止事件向上冒泡到 window
    setShowPanel(true);
  };

  return (
    <>
      <HeaderWrapper>
        <div className="appHeader">
          <div className="left">
            <a href="https://google.com" target="blank">
              <img alt="hotel logo" src={logoImg} />
            </a>
          </div>
          {/* <div className="center"></div> */}
          <div className="right">
            <div>訂個好房！</div>
            <div>註冊</div>
            <div>登入</div>
            <div className="profile" onClick={handleShowPanel}>
              <img className="info" src={profile} />
              <img className="menu" src={menu} />
              {showPanel && (
                <div className="panel">
                  <div className="top">
                    <div className="item">註冊</div>
                    <div className="item">登入</div>
                  </div>
                  <div className="bottom">
                    <div className="item">查詢房型</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
});

export default Header;
