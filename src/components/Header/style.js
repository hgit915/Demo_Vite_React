import styled from "styled-components";
import bannerImg from "assets/png/banner.png";

export const HeaderWrapper = styled.div`
  color: white;
  font-size: 14px;

  .banner {
    display: flex;
    height: 40px;
  }

  .left {
    flex: 1;
    img {
      height: 100%;
      cursor: pointer;
      padding-top: 2px;
      margin-left: 20px;
    }
  }

  .center {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color.primaryTint};
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    > div {
      margin: auto 10px;
    }
  }

  .profile {
    display: flex;
    justify-content: space-around;
    width: 60px;
    padding: 3px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 18px;
    cursor: pointer;
    ${(props) => props.theme.mixins.boxShadow}
    position: relative
  }

  .panel {
    position: absolute;
    color: ${(props) => props.theme.textColor.black80};
    font-weight: bold;
    width: 100px;
    background-color: white;
    border-radius: 10px;
    top: 40px;
    right: 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

    .item {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.color.primaryBase};
      }
    }

    .top,
    .bottom {
      padding: 5px 10px;
    }

    .bottom {
      border-top: 1px solid #ddd;
    }
  }

  .carousel {
    height: 400px;
    background-image: url(${bannerImg});
    background-size: cover;
  }
`;
