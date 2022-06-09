const Button = ({
  cursor,
  handleClick,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  padding,
  borderRadius,
  border,
  margin,
  width,
  height,
  text,
  hoverBackgroundColor,
  hoverColor,
}) => {
  return (
    <button
      onClick={handleClick}
      style={{
        cursor,
        backgroundColor,
        color,
        fontSize,
        fontWeight,
        padding,
        borderRadius,
        border,
        margin,
        width,
        height,
        hoverBackgroundColor,
        hoverColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
