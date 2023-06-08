import './App.css';
import NameCard from './NameCard';
import Card from './Card';
function App() {
    return (
        <div className="App">
            <Card>
                <NameCard name="Tung Dang" age="30" addr="Ha noi" />
                <NameCard name="Thanh Nguyen" age="30" addr="Hai Phong" />
                <NameCard name="Son Tranf" age="30" addr="Ninh Binh" />
            </Card>
        </div>
    );
}

export default App;
