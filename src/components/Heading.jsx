
const Heading = ({ 
  children, 
  fontSize, 
  fontWeight,
  margin
}) => {

  const style = `
    ${fontSize}
    ${fontWeight}
    ${margin}
  `;

  return (
    <>
      <h1 className={style}>{children}</h1>
    </>
  );
}

export default Heading;