import appStoreIcon from "../assets/App_Store_(iOS).svg";
import playStoreIcon from "../assets/Group 4.svg";
import huaweiIcon from "../assets/huawei-app-badge-9757fa 2.svg";

const AdBoxB = () => {
  const iconsArray = [
    [playStoreIcon, "Play Store logo"],
    [appStoreIcon, "App Store logo"],
    [huaweiIcon, "Huawei logo"],
  ];

  return (
    <section className="adBox-container-b">
      <div className="adBox-content-b">
        <h2>UberEats</h2>
        <p className="inner-content">
          <span>
            Zamawiaj w aplikacji <span className="bg-red">10% taniej.</span>
          </span>
          <span>Pobierz aplikację UberEats już dziś.</span>
        </p>
        <div className="icons-wrapper">
          {iconsArray.map((item, index) => {
            return (
              <a href="/#">
                <figure key={index}>
                  <img src={item[0]} alt={item[1]} />
                </figure>
              </a>
            );
          })}
        </div>
        <button type="button">Zamów online</button>
      </div>
    </section>
  );
};

export default AdBoxB;