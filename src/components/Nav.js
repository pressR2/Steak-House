import MediaQuery from "react-responsive";
import Menu from "./Menu";
import logo from "../assets/l.png";
import basket from "../assets/koszyk.svg";
import user from "../assets/mojekonto.svg";
import order from "../assets/zamow_ikona.svg";

const Nav = () => {
    return (
        <>
            <MediaQuery maxWidth={550}>
                <div className="nav-menu">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="links-with-icons">
                        <li>
                            <a to="/#" className="link-and-icon">
                                <span>
                                    <img src={user} alt="" />
                                </span>
                                <span>Moje konto</span>
                            </a>
                        </li>
                        <li>
                            <a to="/#" className="link-and-icon">
                                <span>
                                    <img src={basket} alt="" />
                                </span>
                                <span>Koszyk</span>
                            </a>
                        </li>
                        <li>
                            <a to="/#" className="order-btn">
                                <span>
                                    <img src={order} alt="" />
                                </span>
                                <span>Zamów</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Menu />
            </MediaQuery>
            <MediaQuery minWidth={551}>
                <div className="nav-menu">
                    <div className="logo-with-links">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <Menu />
                    </div>
                    <ul className="links-with-icons">
                        <li>
                            <a to="/#" className="link-and-icon">
                                <span>
                                    <img src={user} alt="" />
                                </span>
                                <span>Moje konto</span>
                            </a>
                        </li>
                        <li>
                            <a to="/#" className="link-and-icon">
                                <span>
                                    <img src={basket} alt="" />
                                </span>
                                <span>Koszyk</span>
                            </a>
                        </li>
                        <li>
                            <a to="/#" className="order-btn">
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

export default Nav;
