import Home from "./Home/Home"
import Trips from "./Trips/Trips"
import Header from "./Header/Header"
import Scrapbook from "./Scrapbook/Scrapbook"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/scrapbooks" element={<Scrapbook />} />
      </Routes>
    </Router>
  )
}