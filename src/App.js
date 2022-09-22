import TopAppBar from "./components/TopAppBar";
import Slider from "./components/Slider";
import PageImage from "./components/PageImage";
import LogoTypes from "./components/LogoTypes";
import AdBoxA from "./components/AdBoxA";
import AdBoxB from "./components/AdBoxB";
import "./sass/main.scss";
import "./font/stylesheet.scss";

const App = () => {
  return (
    <div className="app-wrapper">
      <TopAppBar />
      <main>
        <section className="flex-main">
          <Slider />
          <PageImage />
        </section>
        <LogoTypes />
        <section className="flex-adbox">
          <AdBoxA />
          <AdBoxB />
        </section>
      </main>
    </div>
  );
};

export default App;
