import { useLocalStorage } from "../hooks/useLocalStorage";
const UseLocalStorage = () => {

    const [key1, setKey1] = useLocalStorage("key1");
    console.log(key1)
    const [key2, setKey2] = useLocalStorage("key2");

    const changeKey1 = () => {
        setKey1(key1 + "-other")
    }

    const changeKey2 = () => {
        setKey2(key2 + "-other")
    }

    return (
        <div>
            <p>
                {key1}
                <button onClick={changeKey1}>change 1</button>
            </p>
            <p>
                {key2}
                <button onClick={changeKey2}>change 2</button>
            </p>

        </div>
    )
}

export default UseLocalStorage