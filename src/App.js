import './App.css';
import Products from './components/products';
import Welcomes from './components/welcome';
import Home from './components/home';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router';
import Profile, { About, Coures } from './components/profile';
import ProductDetail from './components/productdetail';
function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} >
                    <Route path=":id" element={<ProductDetail />} />
                </Route>
                <Route path="/welcomes" element={<Welcomes />} />

                <Route path="/profile" element={<Profile />}>
                    <Route path="about" element={<About />} />
                    <Route path="coures" element={<Coures />} />
                </Route>

                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <footer>
                @Copryright
            </footer>
        </div>
    );
}

export default App;
