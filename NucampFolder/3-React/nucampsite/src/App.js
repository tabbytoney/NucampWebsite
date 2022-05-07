import React from "react";
import "./App.css";
import CampsiteCard from "./features/campsites/CampsiteCard";
import { CAMPSITES } from "./app/shared/CAMPSITES";

function App() {
  return (
    <div className='App'>
      <CampsiteCard campsite={CAMPSITES[0]} />
    </div>
  );
}

export default App;
