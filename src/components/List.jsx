
const List = ({
  children, 
  display, 
  gap,
  cursor
}) => {

  const style = `
    ${display}
    ${gap}
    ${cursor}
  `;

  return (
    <>
      <ul className={style}>{children}</ul>
    </>
  );
}

export default List;