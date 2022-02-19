import React from "react";
import store from "./store";
import DSYMain from "./pages/main/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <DSYMain />
    </Provider>
  );
}

export default App;
