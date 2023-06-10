import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PokeMonDetail from './components/PokemonDetail';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<PokeMonDetail />} />
            </Routes>
        </div>
    );
}

export default App;
