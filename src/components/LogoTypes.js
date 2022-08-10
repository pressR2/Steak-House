import { Link } from "react-router-dom";
import PysznePl from "../assets/Bitmap-4.png";
import DeliGoo from "../assets/e.png";
import Glovo from "../assets/Bitmap.png";
import UberEats from "../assets/Bitmap-2.png";
import BoltFood from "../assets/Bitmap-3.png";

const LogoTypes = () => {
    return (
        <div className="logo-types-container">
            <ul className="logo-types-list">
                <Link to="/#">
                    <span>
                        <img src={PysznePl} alt="" />
                    </span>
                </Link>
                <Link to="/#">
                    <span>
                        <img src={DeliGoo} alt="" />
                    </span>
                </Link>
                <Link to="/#">
                    <span>
                        <img src={Glovo} alt="" />
                    </span>
                </Link>
                <Link to="/#">
                    <span>
                        <img src={UberEats} alt="" />
                    </span>
                </Link>
                <Link to="/#">
                    <span>
                        <img src={BoltFood} alt="" />
                    </span>
                </Link>
            </ul>
        </div>
    );
};

export default LogoTypes;
