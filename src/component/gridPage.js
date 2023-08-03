import React from "react";
import "../styles/gridPage.css";
import VerticalChart from "./vertical";
import HorizontalChart from "./horizontal";
import AreaChart from "./area";
import LineChart from "./line";
import { useNavigate } from "react-router-dom";
export function GridPage() {
  const navigate = useNavigate()
  return (
       <div className="grid">
      <div className="item" onClick={()=>navigate("/horizontal")}>
        <HorizontalChart />
      </div>
      <div className="item" onClick={()=>navigate("/line1")}>
        <AreaChart />
      </div>
      <div className="item" onClick={()=>navigate("/line2")}>
        <LineChart  />
      </div>
      
      <div className="item" onClick={()=>navigate("/vertical")}>
        <VerticalChart />
      </div>
    </div>
  );
}
export default GridPage
