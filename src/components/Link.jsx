
const Link = ({
  text, 
  link, 
  fontSize, 
  fontWeight, 
  fontCase, 
  letterSpace,
  hover,
  transition
}) => {

  const style = `
    ${fontSize}
    ${fontWeight}
    ${fontCase}
    ${letterSpace}
    ${hover}
    ${transition}
  `;

  return (
    <>
      <a className={style} href={link}>{text}</a>
    </>
  );
}

export default Link;