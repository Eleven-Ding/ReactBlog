import React from "react";
import store from "./store";
import DSYMain from "./pages/main/index";
import { Provider } from "react-redux";

function App() {
  window.addEventListener("visibilitychange", function (e) {
    if (document.visibilityState === "hidden") {
      document.title = "呜呜呜,不要走!!∠( ᐛ 」∠)＿";
    } else {
      document.title = "嘿嘿,你回来啦~~╭（′▽‵）╭";
    }
  });
  return (
    <Provider store={store}>
      <DSYMain />
    </Provider>
  );
}

export default App;
