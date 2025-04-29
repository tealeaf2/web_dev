import Home from "./Home/Home"
import Trips from "./Trips/Trips"
import Scrapbook from "./Scrapbook/Scrapbook"
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import AuthModule from "./Auth/Auth";
import ProtectedRoute from "../Common/ProtectedRoute";
import Base from "./Base/Base"
import Editor from "./Editor/Editor"
import SearchTrips from "./Trips/SearchTrips";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/auth/login" element={<AuthLogin/>} />
        <Route path="/auth/register" element={<AuthRegister/>} />
        <Route path="/auth" element={<AuthModule />} />

        <Route element={<ProtectedRoute header={true}/>}> <Route path="/home" element={<Home />} /> </Route>
        <Route element={<ProtectedRoute header={true}/>}> <Route path="/trips" element={<Trips />} /> </Route>
        <Route element={<ProtectedRoute header={true}/>}> <Route path="/trips/:placeId" element={<SearchTrips />} /> </Route>

        <Route element={<ProtectedRoute header={true}/>}> <Route path="/scrapbooks" element={<Scrapbook />} /> </Route>
        <Route element={<ProtectedRoute header={false}/>}> <Route path="/editor/:scrapbookId" element={<Editor />} /> </Route>  
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}