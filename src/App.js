import { BrowserRouter as Router } from "react-router-dom";
import "./main.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import PageImage from "./components/PageImage";
import LogoTypes from "./components/LogoTypes";
import AdBox from "./components/AdBox";
import appStoreIcon from "./assets/App_Store_(iOS).svg";
import playStoreIcon from "./assets/Group 4.svg";
import huaweiIcon from "./assets/huawei-app-badge-9757fa 2.svg";

const App = () => {
    const headerLeft = "Zestaw dla 3 osób";
    const headerRight = "UberEats";
    const descriptionLeft = (
        <p>Razem smakuje lepiej! Zamów zestawy obiadowe dla 3 osób już od </p>
    );
    const innerDescription = <span>10% taniej.</span>;
    const descriptionRight = (
        <p>
            Zamawiaj w aplikacji {innerDescription} Pobierz UberEats już dziś.
        </p>
    );
    const iconsArray = [playStoreIcon, appStoreIcon, huaweiIcon];

    return (
        <div className="app-wrapper">
            <Router>
                <Nav />
                <div className="flex-main">
                    <Slider />
                    <PageImage />
                </div>
                <LogoTypes />
                <div className="flex-adbox">
                    <AdBox
                        wrapperClassName="adBox-container-left"
                        content="adBox-content-left"
                        header={headerLeft}
                        description={descriptionLeft}
                    />
                    <AdBox
                        wrapperClassName="adBox-container-right"
                        content="adBox-content-right"
                        header={headerRight}
                        description={descriptionRight}
                        icons={iconsArray}
                    />
                </div>
            </Router>
        </div>
    );
};

export default App;
