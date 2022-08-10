const AdBox = (props) => {
    const { wrapperClassName, content, header, description, icons } = props;

    return (
        <div className={wrapperClassName}>
            <div className={content} role="image">
                <h2>{header}</h2>
                {description}
                <div className="icons-wrapper">
                    {icons?.map((item, index) => {
                        console.log(item);
                        console.log(index);
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

export default AdBox;
