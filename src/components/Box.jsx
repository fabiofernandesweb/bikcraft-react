
const Box = ({ 
  children, 
  display, 
  flexDirection, 
  justify, 
  gap, 
  width,
  paddingX,
  paddingY
}) => {

  const style = `
    ${display}
    ${flexDirection}
    ${justify}
    ${gap}
    ${width}
    ${paddingX}
    ${paddingY}
  `;
  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
} 

export default Box;