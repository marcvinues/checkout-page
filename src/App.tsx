import React from "react";
import { Route, Routes } from "react-router-dom";
import { Payment } from "./components/Payment";
import { ShowList } from "./containers/ShowList";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
