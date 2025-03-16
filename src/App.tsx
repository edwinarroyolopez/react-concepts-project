import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  Suspense } from "react";
import MainRoutes from "@/components/routes/routes";

import "./App.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
