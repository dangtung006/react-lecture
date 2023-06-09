import './App.css';
import List from './components/list';
import Hobbies from './components/hobbies';
import Input from './components/inputs';
import Auth from './components/auth';
function App() {
    return (
        <div className="App">
            <List /> <hr></hr>
            <Hobbies /> <hr></hr>
            <Input />  <hr></hr>
            <Auth />
        </div>
    );
}

export default App;
