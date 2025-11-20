
const Heading = ({ 
  children, 
  fontSize, 
  fontWeight,
  fontCase,
  letterSpace,
  color,
  margin,
  paddingX,
  paddingT
}) => {

  const style = `
    ${fontSize}
    ${fontWeight}
    ${fontCase}
    ${letterSpace}
    ${color}
    ${margin}
    ${paddingX}
    ${paddingT}
  `;

  return (
    <>
      <h1 className={style}>{children}</h1>
    </>
  );
}

export default Heading;