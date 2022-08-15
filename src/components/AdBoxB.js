import appStoreIcon from "../assets/App_Store_(iOS).svg";
import playStoreIcon from "../assets/Group 4.svg";
import huaweiIcon from "../assets/huawei-app-badge-9757fa 2.svg";

const AdBoxB = () => {
    const iconsArray = [playStoreIcon, appStoreIcon, huaweiIcon];

    return (
        <div className="adBox-container-b">
            <div className="adBox-content-b">
                <h2>UberEats</h2>
                <p>
                    Zamawiaj w aplikacji <span>10% taniej.</span> Pobierz UberEats już dziś.
                </p>
                <div className="icons-wrapper">
                    {iconsArray?.map((item, index) => {
                        return (
                            <span key={index}>
                                <img src={item} alt="" />
                            </span>
                        );
                    })}
                </div>
                <button type="button">Zamów online</button>
            </div>
        </div>
    );
};

export default AdBoxB;