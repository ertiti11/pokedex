import { useState } from 'react'
import './App.css'
import PokeCard from './components/PokeCard/PokeCard'
import { Route } from 'wouter'
import Home from './pages/Home/Home'


function App() {

  const [name, setName] = useState('')
  const [keyword, setKeyword] = useState('morty')
  const handleChange = ({ target }) => {
    setName(target.value)  
    setKeyword(target.value)
  };
  return (
    <div className="App">
      {/* <input className='finder' placeholder='find character' value={name} onChange={handleChange}></input> */}
      <Route path="/pokemon/:keyword" component={PokeCard} />
      <Route path="/" component={Home} />
      {/* <PokeCard keyword="charizard"/> */}
    </div>
  );
}

export default App;