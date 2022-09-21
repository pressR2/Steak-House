import MediaQuery from "react-responsive";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Header from "./Header";

const TopAppBar = () => {
  return (
    <>
      <MediaQuery maxWidth={1199}>
        <div className="top-app-bar">
          <Header />
          <MenuMobile />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <div className="top-app-bar">
          <Header />
          <Menu />
        </div>
      </MediaQuery>
    </>
  );
};

export default TopAppBar;