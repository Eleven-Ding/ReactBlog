import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
//导入normalize
import "@/assets/css/normalize.css";
import App from "./App";
import './utils/diylog'
import { reportLog } from './utils/report'
//监听页面刷新或者关闭，再进行一次数据的上报
// window.addEventListener("onbeforeunload", function () {
//   reportLog()
// })
ReactDOM.render(< App />, document.getElementById("root"));