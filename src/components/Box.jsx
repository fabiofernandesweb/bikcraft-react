
const Box = ({ 
  children, 
  display, 
  flexDirection, 
  justify, 
  gap, 
  width 
}) => {

  const style = `
    ${display}
    ${flexDirection}
    ${justify}
    ${gap}
    ${width}
  `;
  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
} 

export default Box;