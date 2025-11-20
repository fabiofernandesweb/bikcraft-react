
const Paragraph = ({
  text, 
  fontSize, 
  color,
  marginB
}) => {

  const style = `
    ${fontSize}
    ${color}
    ${marginB}
  `;

  return (
    <>
      <p className={style}>{text}</p>
    </>
  );
}

export default Paragraph;