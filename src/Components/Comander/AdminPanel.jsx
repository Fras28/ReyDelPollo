import React, { useState } from "react";

import Dashboard from "./DashBoard/DashBoard";
import ComandasComponent from "./General/Comander";


export const AdminPanel = () => {
  const [panel, setPanel] = useState("General");
  
  return (
    <div>
      <div style={{padding:"1rem",display:"flex", justifyContent:"center" ,gap:"1rem"}}>
      <button onClick={() => setPanel("General")}>General</button>
      <button onClick={() => setPanel("Estadisticas")}>Estadisticas</button>
      <button onClick={() => setPanel("Otros")}>Otros</button>
      </div>
      
      {/* Aquí puedes renderizar el panel según el estado "panel" */}
      {panel === "General" && <ComandasComponent />}
      {panel === "Estadisticas" && <Dashboard />}
      {panel === "Otros" && <Dashboard />}
    </div>
  );
};
