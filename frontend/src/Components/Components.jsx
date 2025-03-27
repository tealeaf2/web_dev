import Home from "./Home/Home"
import Trips from "./Trips/Trips"
import Header from "./Header/Header"
import Scrapbook from "./Scrapbook/Scrapbook"
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "../Common/ProtectedRoute";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthLogin/>} />
        <Route path="/register" element={<AuthRegister/>} />

        <Route path="/trips" element={<Trips />} />
        {/* <Route element={<ProtectedRoute />}> <Route path="/trips" element={<Trips />} /> </Route> */}
        <Route path="/scrapbooks" element={<Scrapbook />} />
        {/* <Route element={<ProtectedRoute />}> <Route path="/scrapbooks" element={<Scrapbook />} /> </Route> */} 

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}