import React from "react";
import "./App.css";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
    return (
        <DashboardContextProvider>
            <Router>
              <Sidebar />
              <Routes>
                  <Route path="/" element={<DashboardFinance />} />
                  <Route
                      path="/DashboardEmployees"
                      element={<DashboardEmployees />}
                  />
              </Routes>
            </Router>
        </DashboardContextProvider>
    );
}
