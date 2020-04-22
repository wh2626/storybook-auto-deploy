import React, { Component, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Atoms/Button";

export default class App extends Component {
  render() {
    return (
      <Com>
        <div>
          <Button>app</Button>
        </div>
        <div>
          <Button>Button</Button>
        </div>
      </Com>
    );
  }
}

const Com = styled.div``;
