import pageImage from "../assets/Bitmapv.png";
import MediaQuery from "react-responsive";

const PageImage = () => {
    return (
        <>
            <MediaQuery minWidth={1022}>
                <div className="page-image" role="image"></div>
            </MediaQuery>
            <MediaQuery maxWidth={1021}>
                <div className="page-mobile-image" role="image">
                    <img src={pageImage} alt="" />
                </div>
            </MediaQuery>
        </>
    );
};

export default PageImage;
