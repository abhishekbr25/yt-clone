import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PageHeader } from "./layouts/PageHeader";

function App() {
  return (
    <div className="max-h-screen">
      <PageHeader />
    </div>
  );
}

export default App;
