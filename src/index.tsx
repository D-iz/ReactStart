import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./scss/index.scss";
import App1 from "./components/App1";
import { store } from "redux/store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App1 />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
