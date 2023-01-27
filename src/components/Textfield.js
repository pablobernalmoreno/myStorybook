import { useState } from "react";
import styled, { css } from "styled-components";

const InputContainer = styled.div`
  &.input-container {
    height: 50px;
    position: relative;
    width: 200px;
  }
  &.ic1 {
    margin-top: 40px;
  }
  &.cut {
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }
`;

const MyInput = styled.input`
  ${({ type }) => {
    switch (type) {
      case "text":
        return css`
          &.input {
            box-sizing: border-box;
            font-size: 18px;
            height: 100%;
            outline: 0;
            padding: 4px 20px 0;
            width: 100%;
          }
          &:focus ~ .cut,
          &:not(:placeholder-shown) ~ .cut {
            transform: translateY(8px);
          }
          &:focus ~ .placeholder,
          &:not(:placeholder-shown) ~ .placeholder {
            transform: translateY(-35px) translateX(10px) scale(0.75);
          }
          &:focus ~ .placeholder {
            color: #457dff;
          }
        `;
      default:
        return css``;
    }
  }}
  ${({ variant }) => {
    switch (variant) {
      case "filled":
        return css`
          &.input {
            background-color: white;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 18px;
            height: 100%;
            outline: 0;
            padding: 4px 20px 0;
            width: 100%;
            border: none;
            background-color: #d6d2d2;
          }
        `;
      case "outlined":
        return css`
          &.input {
            background-color: white;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 18px;
            height: 100%;
            outline: 0;
            padding: 4px 20px 0;
            width: 100%;
            border: solid 2px #457dff;
          }
        `;
      default:
        return css`
        &.input {
            background-color: white;
            box-sizing: border-box;
            font-size: 18px;
            height: 100%;
            outline: 0;
            padding: 4px 20px 0;
            width: 100%;
            border: none;
            border-bottom: 1px solid #457dff;
            `;
    }
  }}
`;

const MyLabel = styled.label`
  &.placeholder {
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms;
    top: 20px;
  }
  ${({ variant }) => {
    switch (variant) {
      case "filled":
        return css`
          color: #807e7e;
        `;
      case "outlined":
        return css`
          color: #a6a6a6;
        `;
      default:
        return css`
          color: #a6a6a6;
        `;
    }
  }}
`;

const Textfield = ({
  label,
  variant,
  onChange,
  labelCustomStyles,
  inputCustomStyles,
  labelOtherProps,
  inputOtherProps,
}) => {
  return (
    <InputContainer className="input-container ic1">
      <MyInput
        className="input"
        type="text"
        placeholder=" "
        variant={variant}
        onChange={onChange}
        style={inputCustomStyles}
        {...inputOtherProps}
      />
      <InputContainer className="cut"></InputContainer>
      <MyLabel
        className="placeholder"
        variant={variant}
        style={labelCustomStyles}
        {...labelOtherProps}
      >
        {label}
      </MyLabel>
    </InputContainer>
  );
};

export default Textfield;
