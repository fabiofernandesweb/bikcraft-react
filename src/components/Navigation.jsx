
const Navigation = ({
  children, 
  display, 
  justify, 
  align, 
  height
}) => {

  const style = `
      ${display}
      ${justify}
      ${align}
      ${height}
  `;

  return (
    <>
      <nav className={style}>{children}</nav>
    </>
  );
}

export default Navigation;
