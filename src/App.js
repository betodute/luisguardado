import { Header } from './Header.js'
import { Portrait } from './Portrait.js'
import { Content } from './Content.js'
import { Map } from './Map.js'
import { Social } from './Social.js'
import { Contact } from './Contact.js'
import { Beto } from './Beto.js'

import './App.css';

function App() {
  return (
    <div className="app-main">
        <Header/>
        <Portrait />
        <Content />
        <Map />
        <Social /> 
        <Contact />
        <Beto />
    </div>
  );
}

export default App;