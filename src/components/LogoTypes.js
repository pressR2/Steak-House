import PysznePl from "../assets/Bitmap-4.png";
import DeliGoo from "../assets/e.png";
import Glovo from "../assets/Bitmap.png";
import UberEats from "../assets/Bitmap-2.png";
import BoltFood from "../assets/Bitmap-3.png";

const LogoTypes = () => {
  return (
    <ul className="logo-types-list">
      <li>
        <img src={PysznePl} alt="PysznePl logo" />
      </li>
      <li>
        <img src={DeliGoo} alt="DeliGoo logo" />
      </li>
      <li>
        <img src={Glovo} alt="Glovo logo" />
      </li>
      <li>
        <img src={UberEats} alt="UberEats logo" />
      </li>
      <li>
        <img src={BoltFood} alt="BoltFood logo" />
      </li>
    </ul>
  );
};

export default LogoTypes;
