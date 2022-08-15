import "./main.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import PageImage from "./components/PageImage";
import LogoTypes from "./components/LogoTypes";
import AdBoxA from "./components/AdBoxA";
import AdBoxB from "./components/AdBoxB";

const App = () => {
    return (
        <div className="app-wrapper">
            <Nav />
            <div className="flex-main">
                <Slider />
                <PageImage />
            </div>
            <LogoTypes />
            <div className="flex-adbox">
                <AdBoxA />
                <AdBoxB />
            </div>
        </div>
    );
};

export default App;
