import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./ApiData.js";
import CountryManagement from "./Management.js";
export default function App() {
  return(
    <div className="App">
      <main className="App-main">
        <CountryManagement />
      </main>
    </div>
  ); 
};