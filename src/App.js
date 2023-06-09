import './App.css';
// import CountTitle from './components/CountTitle';
import { useState } from 'react';
import Scrolling from './components/Scrolling';
function App() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div className="App" style={{ minHeight: 2000 }}>
            <button onClick={() => {
                setIsVisible(!isVisible);
            }}>Change Scrolling Visible</button>
            {/* <CountTitle /> */}
            {isVisible && <Scrolling />}
        </div>
    );
}

export default App;
