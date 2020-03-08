import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <Component>{props.children}</Component>;
}

const Component = styled.button`
  border-radius: 3px;
  border: 1px solid #ccc;
  height: 28px;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
