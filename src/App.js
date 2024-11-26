import React from "react";
import { Layout, Content } from "react-mdl";
import Main from "./pages/Main";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    /* Hide the top part of the header when scrolling down */
    <div className="demo-big-content">
      <Layout>
        <SearchBar />
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
