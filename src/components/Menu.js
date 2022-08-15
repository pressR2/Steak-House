import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="links">
            <li><a to="/#">Steaks</a></li>
            <li><a to="/#">Burgers</a></li>
            <li><a to="/#">French fries</a></li>
            <li><a to="/#">Drinks</a></li>
            <li><a to="/#">Gdzie dowozimy?</a></li>
            <li><a to="/#">Kontakt</a></li>
        </ul>
    );
};

export default Menu;
