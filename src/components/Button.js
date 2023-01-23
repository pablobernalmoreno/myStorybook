function Button({
  label,
  backgroundColor = "#6B4EFF",
  color = "white",
  borderRadius = "48px",
  border = "none",
}) {
  const style = {
    backgroundColor,
    padding: "0.5rem 1rem",
    color,
    borderRadius,
    border,
  };
  return (
    <button style={style}>
            {label}
          
    </button>
  );
}
export default Button;
