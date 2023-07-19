import React from "react";
import { createRoot } from "react-dom/client";
// react 18버전 부터
// react-dom/client에서 createRoot 사용하라고 권장함

import App from "./app";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
