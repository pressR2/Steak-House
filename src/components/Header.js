import logoSmall from "../assets/l.png";
import logoBig from "../assets/l@2x.png";

const Header = () => {
  return (
    <header className="logo">
      <a href="/#">
        <picture>
          <source media="(min-width: 800px)" srcSet={`${logoBig} 2x`}></source>
          <img src={logoSmall} alt="Bull" />
        </picture>
      </a>
    </header>
  );
};

export default Header;
