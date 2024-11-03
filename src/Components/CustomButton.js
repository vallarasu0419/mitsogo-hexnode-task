import React from "react";
import styled, { css } from "styled-components";

const CustomButton = ({ lable, outlined, style }) => {
  return (
    <div>
      <TrialButton outlined={outlined} style={style}>
        {lable}
      </TrialButton>
    </div>
  );
};

export default CustomButton;

const TrialButton = styled.button`
  background-color: #d62027;
  color: #ffffff;
  padding: 15px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  float: right;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  line-height: 21px;
  max-width: 260px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c21825;
  }

  ${(props) =>
    props.outlined &&
    css`
      background-color: transparent;
      color: #d62027;
      border: 2px solid #fff;
      color: #ffffff;
      &:hover {
        background-color: transparent;
      }
    `}

  // Apply custom styles passed via props
  ${(props) => props.style && css(props.style)}


  @media (max-width: 600px) {
    max-width: 300px;
    margin-top: 10px;
  }
  @media (min-width: 601px) and (max-width: 960px) {
  }
  @media (min-width: 961px) {
  }
`;
