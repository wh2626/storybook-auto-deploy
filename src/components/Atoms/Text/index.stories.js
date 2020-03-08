import React from "react";
import { storiesOf } from "@storybook/react";
import Text from ".";

const stories = storiesOf("atoms/Text", module);

stories.add("default", () => <Text>Text</Text>);
