
const Section = ({
  children, 
  display, 
  gap, 
  height, 
  paddingX, 
  paddingT,
  paddingB,
  backgroundColor, 
  color,
}) => {

  const style = `
    ${display}
    ${gap}
    ${height}
    ${paddingX}
    ${paddingT}
    ${paddingB}
    ${backgroundColor}
    ${color}
  `;

  return (
    <>
      <section className={style}>{children}</section>
    </>
  );
}

export default Section;