import './App.css';
import Pokemon from './components/Pokemon';
import { useState } from "react";


function App() {

  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <Pokemon pokemon={pokemon} setPokemon={setPokemon}></Pokemon>
    </div>
  );
}

export default App;