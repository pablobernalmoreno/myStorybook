import styled, { css } from "styled-components";

const MyButton = styled.button`
  position: relative;
  border: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  color: #ffffff;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  overflow: hidden;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  ${({ variant }) => {
    switch (variant) {
      case "Primary":
        return css`
          background-color: #457dff;
          color: #ffffff;
          &:hover {
            background-color: #3052a1;
          }
          &:after {
            background: #5c8bf7;
          }
        `;
      case "Secondary":
        return css`
          background-color: #ffc745;
          color: #ffffff;
          &:hover {
            background-color: #d9a427;
          }
          &:after {
            background: #fac64b;
          }
        `;
      case "Tertiary":
        return css`
          background-color: #8c70ff;
          color: #ffffff;
          &:hover {
            background-color: #6551b8;
          }
          &:after {
            background: #7f6cd4;
          }
        `;
      default:
        return css`
          background-color: #bfbfbf;
          &:hover {
            background-color: #6b6b6b;
          }
          &:after {
            background: #e6e1e1;
          }
        `;
    }
  }}
`;

const Button = ({ label, variant, customStyles, onClick, ...otherProps }) => {
  return (
    <MyButton
      variant={variant}
      style={customStyles}
      onClick={onClick}
      {...otherProps}
    >
      {label}
    </MyButton>
  );
};
export default Button;
