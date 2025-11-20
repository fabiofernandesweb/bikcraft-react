
const Image = ({
  source, 
  alternative,
  cursor,
  borderRadius,
  margin,
  width
}) => {

  const style = `
    ${cursor}
    ${borderRadius}
    ${margin}
    ${width}
  `;

  return (
    <>
      <img className={style} src={source} alt={alternative} />
    </>
  );
}

export default Image;