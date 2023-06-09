import { useInput } from "../hooks/input"
const UseInput = () => {
    const input1 = useInput();
    const input2 = useInput();
    const getValue = () => {
        console.log(input1.value);
        console.log(input2.value);
    }
    return (
        <div>
            <input value={input1.value} onChange={input1.handleChange} /><button onClick={getValue}>Get value</button>
            <input value={input2.value} onChange={input2.handleChange} /><button onClick={getValue}>Get value</button>
        </div>
    )
}

export default UseInput