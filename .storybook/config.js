// 参考
// https://qiita.com/ozaki25/items/255390a3f5c8e89125c7
import { addDecorator, configure } from "@storybook/react";
import "../src/App.css";

// import { withKnobs } from "@storybook/addon-knobs";
// import { withInfo } from "@storybook/addon-info";

// addDecorator(withKnobs);
// addDecorator(withInfo);

// src/components配下のxxx.stories.jsというファイルを対象とする
const req = require.context("../src/components/", true, /stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
