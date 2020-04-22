import React, { Component, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Atoms/Button";

export default class App extends Component {
  render() {
    return (
      <Com>
        <Button>app</Button>
        <Button>Button</Button>
      </Com>
    );
  }
}

const Com = styled.div``;
