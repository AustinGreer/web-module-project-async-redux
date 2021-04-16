import Header from './components/Header';
import PokeList from './components/PokeList'

function App() {
  return (
    <div>
      <Header />
      <PokeList />
    </div>
  );
}

export default App;

// GEN 1 URL - https://pokeapi.co/api/v2/pokemon?limit=151
// GEN 2 URL - https://pokeapi.co/api/v2/pokemon?offset=151&limit=151