import React from "react";
import { Route, Routes } from "react-router-dom";
import { Resume } from "./containers/Resume";
import { ShowList } from "./containers/ShowList";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/payment" element={<Resume />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
