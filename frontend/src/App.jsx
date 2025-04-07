import './App.css'
import Env from "./environments.js"
import Components from './Components/Components.jsx'
import Parse from 'parse';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY)
Parse.serverURL = Env.SERVER_URL

function App() {
  return (
      <Components/>
  )
}

export default App
