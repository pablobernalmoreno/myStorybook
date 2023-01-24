import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  ${({ type }) => {
    switch (type) {
      case "Primary":
        return css`
          background-color: #457dff;
          color: #ffffff;
        `;
      case "Secondary":
        return css`
          background-color: #FFC745;
          color: #ffffff;
        `;
      case "Tertiary":
        return css`
        background-color: #8C70FF;
        color: #ffffff;
        `;
      default:
        return css`
          background-color: #bfbfbf;
        `;
    }
  }}
`;

function MyButton({ label, type }) {
  return <Button type={type}>{label}</Button>;
}
export default MyButton;
