import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

const MyDragableItems = styled.span`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  ${({ variant }) => {
    switch (variant) {
      case "Primary":
        return css`
          border: 1px solid #6393ff;
          background-color: #457dff;
          color: #ffffff;
          &:hover {
            background-color: #3663c9;
          }
        `;
      case "Secondary":
        return css`
          border: 1px solid #ffd269;
          background-color: #ffc745;
          color: #ffffff;
          &:hover {
            background-color: #d4a844;
          }
        `;
      case "Tertiary":
        return css`
          border: 1px solid #9d85ff;
          background-color: #8c70ff;
          color: #ffffff;
          &:hover {
            background-color: #6c56c7;
          }
        `;
      default:
        return css`
          border: 1px solid #cccaca;
          background-color: #bfbfbf;
          &:hover {
            background-color: #8a8888;
          }
        `;
    }
  }}
`;

const DragNDrop = ({ items, variant, customStyles, ...otherProps }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(items);

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      {list?.map((item, index) => (
        <MyDragableItems
          data-testid={`styled-draggable-${index}`}
          variant={variant}
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          key={index}
          draggable
          style={customStyles}
        >
          {item}
        </MyDragableItems>
      ))}
    </>
  );
};

export default DragNDrop;
