
const Button = ({
  text, 
  Width, 
  backgroundColor, 
  color, 
  paddingX, 
  paddingY, 
  fontSize, 
  fontWeight, 
  fontCase, 
  borderRadius, 
  hover, 
  transition, 
  cursor
}) => {

  const style = `
    ${Width}
    ${backgroundColor}
    ${color}
    ${paddingX}
    ${paddingY}
    ${fontSize}
    ${fontWeight}
    ${fontCase}
    ${borderRadius}
    ${hover}
    ${transition}
    ${cursor}
  `;

  return (
    <>
      <button className={style}>{text}</button>
    </>
  );
}

export default Button;