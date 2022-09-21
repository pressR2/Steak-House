import pageImageBig from "../assets/Bitmap@2x.png";
import pageImageSmall from "../assets/Bitmapv.png";

const PageImage = () => {
  return (
    <figure className="page-image">
      <picture>
        <source
          media="(min-width: 475px)"
          srcSet={`${pageImageBig} 2x`}
        ></source>
        <img src={pageImageSmall} alt="Men cutting a steak" />
      </picture>
    </figure>
  );
};

export default PageImage;
