import React from "react";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";

const App: React.FC = () => {
  return (
    <>
      <Search />
      <List />
    </>
  );
};

export default App;

