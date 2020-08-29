import * as React from "react";
import "./styles.scss";

import SideMenu from "./components/sidemenu/sidemenu";
import Content from "./components/content/content";

export default function App() {
  return (
    <div className="App">
      <SideMenu />
      <hr className="separator" />
      <Content />
    </div>
  );
}
