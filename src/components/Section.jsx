
const Section = ({
  children, 
  display, 
  gap, 
  height, 
  paddingX, 
  paddingB,
  backgroundColor, 
  color
}) => {

  const style = `
    ${display}
    ${gap}
    ${height}
    ${paddingX}
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