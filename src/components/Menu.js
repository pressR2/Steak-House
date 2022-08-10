import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="links">
            <Link to="/#">Steaks</Link>
            <Link to="/#">Burgers</Link>
            <Link to="/#">French fries</Link>
            <Link to="/#">Drinks</Link>
            <Link to="/#">Gdzie dowozimy?</Link>
            <Link to="/#">Kontakt</Link>
        </ul>
    );
};

export default Menu;
