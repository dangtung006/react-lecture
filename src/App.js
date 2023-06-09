import './App.css';
import UseRef from './component/UseRef';
import Count from './component/Count';
import Memo from './component/memo';
import UseMemo from './component/useMemo';
import UseCallback from './component/useCallback';
function App() {
    return (
        <div className="App" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <UseRef />
            <UseRef />
            <UseRef /> <hr></hr>
            <Count /> <hr></hr>
            <Memo /> <hr></hr>
            <UseMemo /> <hr></hr>
            <UseCallback />
        </div>
    );
}

export default App;
