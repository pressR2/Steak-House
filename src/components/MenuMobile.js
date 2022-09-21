import { useState } from "react";
import Menu from "./Menu";
import closeIcon from "../assets/close.svg";
import menuIcon from "../assets/menu.svg";

const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <aside>
      <button className="menu-toggle" onClick={handleMenu} type="button">
        <img src={menuIcon} alt="Hamburger menu button" />
        <span>Menu</span>
      </button>
      <div className={openMenu ? "menu" : "menu hide"}>
        <button className="close-btn" onClick={handleMenu} type="button">
          <img src={closeIcon} alt="Close menu button" />
        </button>
        <Menu />
      </div>
    </aside>
  );
};

export default MenuMobile;
