import './App.css';
import Counter from './components/Counter';
import NameCard from './components/NameCard';
function App() {
  return (
    <div className="App">
      <NameCard name="Tung Dang" age={30} />
      <Counter />
    </div>
  );
}

export default App;
