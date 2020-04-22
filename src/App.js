import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Atoms/Button";
import Text from "./components/Atoms/Text";

export default class App extends Component {
  render() {
    return (
      <Wrap>
        <Inner>
          <Text>テキスト</Text>
          <Button>app</Button>
        </Inner>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  padding: 0 16px;
`;
const Inner = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;
