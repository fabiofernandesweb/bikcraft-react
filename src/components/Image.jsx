
const Image = ({
  source, 
  alternative,
  cursor,
  borderRadius
}) => {

  const style = `
    ${cursor}
    ${borderRadius}
  `;

  return (
    <>
      <img className={style} src={source} alt={alternative} />
    </>
  );
}

export default Image;