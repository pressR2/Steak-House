import Header from "./components/Header";
import Slider from "./components/Slider";
import PageImage from "./components/PageImage";
import LogoTypes from "./components/LogoTypes";
import AdBoxA from "./components/AdBoxA";
import AdBoxB from "./components/AdBoxB";
import "./sass/global_styles.scss";
import "./font/stylesheet.scss";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
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
    </div>
  );
};

export default App;
