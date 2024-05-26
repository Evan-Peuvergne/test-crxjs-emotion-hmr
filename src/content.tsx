import { createRoot } from "react-dom/client";

import { App } from "./app";

const $root = document.createElement("div");
document.body.append($root);
createRoot($root).render(<App />);