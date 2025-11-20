
const Price = ({
    text, 
    fontSize,
    fontWeight, 
    color
}) => {

    const style = `
        ${fontSize}
        ${fontWeight}
        ${color}
    `;

    return (

        <h3 className={style}>{text}</h3>
    );
}

export default Price;