import MediaQuery from "react-responsive";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import logoSmall from "../assets/l.png";
import logoBig from "../assets/l@2x.png";
import basket from "../assets/koszyk.svg";
import user from "../assets/mojekonto.svg";
import order from "../assets/zamow_ikona.svg";

const Header = () => {
  return (
    <>
      <MediaQuery maxWidth={1199}>
        <div className="header">
          <div className="logo-with-menu">
            <MenuMobile />
            <div className="logo">
              <img src={logoSmall} alt="Bull" />
            </div>
          </div>
          <ul className="header-items-container">
            <li>
              <a href="/#" className="account-info">
                <span>
                  <img src={user} alt="" />
                </span>
                <span>Moje konto</span>
              </a>
            </li>
            <li>
              <a href="/#" className="basket">
                <span>
                  <img src={basket} alt="" />
                </span>
                <span>Koszyk</span>
              </a>
            </li>
            <li>
              <a href="/#" className="order-btn">
                <span>
                  <img src={order} alt="" />
                </span>
                <span>Zamów</span>
              </a>
            </li>
          </ul>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <div className="header">
          <div className="logo-with-menu">
            <div className="logo">
              <img src={logoBig} alt="Bull" />
            </div>
            <Menu />
          </div>
          <ul className="header-items-container">
            <li>
              <a href="/#" className="account-info">
                <span>
                  <img src={user} alt="" />
                </span>
                <span>Moje konto</span>
              </a>
            </li>
            <li>
              <a href="/#" className="basket">
                <span>
                  <img src={basket} alt="" />
                </span>
                <span>Koszyk</span>
              </a>
            </li>
            <li>
              <a href="/#" className="order-btn">
                <span>
                  <img src={order} alt="" />
                </span>
                <span>Zamów</span>
              </a>
            </li>
          </ul>
        </div>
      </MediaQuery>
    </>
  );
};

export default Header;
