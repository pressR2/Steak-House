import pageImageBig from "../assets/Bitmap@2x.png";
import pageImageSmall from "../assets/Bitmapv.png";

const PageImage = () => {
  return (
    <div className="page-image">
      <img
        src={pageImageSmall}
        srcSet={`${pageImageSmall} 1x, ${pageImageBig} 2x`}
        alt="Men cutting a steak"
      />
    </div>
  );
};

export default PageImage;