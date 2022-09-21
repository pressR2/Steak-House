import basket from "../assets/koszyk.svg";
import user from "../assets/mojekonto.svg";
import order from "../assets/zamow_ikona.svg";

const Menu = () => {
  return (
    <nav>
      <div className="nav-bar">
        <ul className="main-list">
          <li className="category-link">
            <a href="/#">Steaks</a>
          </li>
          <li className="category-link">
            <a href="/#">Burgers</a>
          </li>
          <li className="category-link">
            <a href="/#">French fries</a>
          </li>
          <li className="category-link">
            <a href="/#">Drinks</a>
          </li>
          <li className="category-link">
            <a href="/#">Gdzie dowozimy?</a>
          </li>
          <li className="category-link">
            <a href="/#">Kontakt</a>
          </li>
        </ul>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
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
    </nav>
  );
};

export default Menu;
