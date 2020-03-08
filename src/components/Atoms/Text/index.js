import React from "react";
import styled, { css } from "styled-components";

export default function Text(props) {
  const { children, fontSize } = props;
  return <Component fontSize={fontSize}>{children}</Component>;
}

const Component = styled.p`
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
`;
