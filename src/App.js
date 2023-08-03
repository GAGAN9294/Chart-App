import React from "react";
import GridPage from './component/gridPage'
import VerticalChart from "./component/vertical";
import HorizontalChart from "./component/horizontal";
import AreaChart from "./component/area";
import LineChart from "./component/line";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GridPage />} />
        <Route exact path="/horizontal" element={<HorizontalChart />} />
        <Route exact path="/line1" element={<AreaChart />} />
        <Route exact path="/vertical" element={<VerticalChart />} />
        <Route exact path="/line2" element={<LineChart />} />
      </Routes>
    </Router>
  );
}

