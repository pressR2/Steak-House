import PysznePl from "../assets/Bitmap-4.png";
import DeliGoo from "../assets/e.png";
import Glovo from "../assets/Bitmap.png";
import UberEats from "../assets/Bitmap-2.png";
import BoltFood from "../assets/Bitmap-3.png";

const LogoTypes = () => {
  return (
    <div className="logo-types-list">
      <img src={PysznePl} alt="PysznePl logo" />
      <img src={DeliGoo} alt="DeliGoo logo" />
      <img src={Glovo} alt="Glovo logo" />
      <img src={UberEats} alt="UberEats logo" />
      <img src={BoltFood} alt="BoltFood logo" />
    </div>
  );
};

export default LogoTypes;
