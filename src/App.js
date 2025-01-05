import { Header } from './Header.js'
import { Map } from './Map.js'
import { Contact } from './Contact.js'
import { Social } from './Social.js'

import './App.css';

function App() {
  return (
    <div className="app-main">
        <Header/>
        <Contact />
        <Map />
        <Social /> 
    </div>
  );
}

export default App;