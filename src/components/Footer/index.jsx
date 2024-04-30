import React, { memo } from "react";
import { FooterWrapper } from "./style";

const Footer = memo(() => {
  return (
    <>
      <FooterWrapper>
        <div className="top">
          <div className="footerLogo" />
          <div className="info1">
            <div className="field">
              TEL
              <p>+886-7-1234567</p>
            </div>
            <div className="field">
              FAX
              <p>+886-7-1234567</p>
            </div>
          </div>
          <div className="info2">
            <div className="field">
              MAIL
              <p>elh@hexschool.com</p>
            </div>

            <div className="field">
              WEB
              <p>www.elhhexschool.com.tw</p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <span>806023 台灣高雄市新興區六角路123號</span>
          <span>© 享樂酒店 2023 All Rights Reserved.</span>
        </div>
      </FooterWrapper>
    </>
  );
});

export default Footer;
