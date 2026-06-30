import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./src/app/App"
import "./index.scss"

const root = ReactDOM.createRoot(document.querySelector("#root")!)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)