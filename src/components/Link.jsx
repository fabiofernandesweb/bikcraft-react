
const Link = ({
  text, 
  link, 
  fontSize, 
  fontWeight, 
  fontCase, 
  color,
  letterSpace,
  hover,
  transition,
  margin,
  cursor,
  underline
}) => {

  const style = `
    ${link}
    ${fontSize}
    ${fontWeight}
    ${fontCase}
    ${letterSpace}
    ${color}
    ${hover}
    ${transition}
    ${margin}
    ${cursor}
    ${underline}
  `;

  return (
    <>
      <a className={style} href={link}>{text}</a>
    </>
  );
}

export default Link;