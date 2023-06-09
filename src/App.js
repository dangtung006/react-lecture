import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import ThemeContext from './components/ThemeContext';
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="App" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                <Header />
                <div className='wrapper'>
                    <Sidebar />
                    <Content />
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
