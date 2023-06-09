import { useState } from "react";

const gemnerateId = _ => Math.floor(Math.random() * 10000);

const Input = () => {
    const [inputs, setInput] = useState([]);

    const append = () => {
        setInput((prev) => {
            return [...prev, gemnerateId()]
        })
    }

    const prepend = () => {
        setInput((prev) => {
            return [gemnerateId(), ...prev]
        })
    }

    return (
        <div>
            <button onClick={append}>append</button>
            <button onClick={prepend}>prepend</button>
            {
                inputs.map(input => {
                    return (<li key={input}>
                        <label>{input}<input /></label>
                    </li>)
                })
            }
        </div>
    )
}

export default Input;