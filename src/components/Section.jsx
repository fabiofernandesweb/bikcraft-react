
const Section = ({
  children, 
  display, 
  gap, 
  height, 
  paddingX, 
  backgroundColor, 
  color
}) => {

  const style = `
    ${display}
    ${gap}
    ${height}
    ${paddingX}
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