import { useState } from "react"

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([
        { id: 1, name: "Playing game" },
        { id: 2, name: "Cat" }
    ]);

    const removeHobbyOpt = (id) => {
        console.log(id);
        setHobbies((prev) => {
            const item = prev.filter(item => item.id !== id);
            return item;
        })
    }

    return (
        <div>
            <ul>
                {
                    hobbies.map(item => {
                        return (
                            <li key={item.id}>
                                <span>I </span>
                                <select>
                                    <option>Like</option>
                                    <option>love</option>
                                </select>
                                <span>{item.name}</span>
                                <button onClick={() => { removeHobbyOpt(item.id) }}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Hobbies