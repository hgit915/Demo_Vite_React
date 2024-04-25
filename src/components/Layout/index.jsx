import { LayoutWrapper } from "./style";

const Layout = (props) => {
  return (
    <>
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </>
  );
};

export default Layout;
