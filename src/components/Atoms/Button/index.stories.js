import React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";

const stories = storiesOf("atoms/Button", module);

stories.add("default", () => <Button>Button</Button>);
