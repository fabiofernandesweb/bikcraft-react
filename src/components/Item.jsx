
const Item = ({
  children,
  display,
  width,
  list,
  cursor,
  fontCase
}) => {

  const style = `
    ${display}
    ${width}
    ${list}
    ${cursor}
    ${fontCase}
  `;

  return (
    <>
      <li className={style}>{children}</li>
    </>
  );
}

export default Item;