import { useState } from 'react'
import './App.css'
import * as Env from "./environments.js"
import Parse from "parse"

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY)
Parse.serverURL = Env.SERVER_URL

function App() {
  
}

export default App
