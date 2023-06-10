import './App.css';
import Products from './components/products';
import Welcomes from './components/welcome';
import Home from './components/home';
function App() {
    return (
        <div className="App">
            <Home />
            <Products />
            <Welcomes />
        </div>
    );
}

export default App;
