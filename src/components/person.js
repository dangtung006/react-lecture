import { useState } from "react";

const Person = () => {
    const [person, setPerson] = useState({ name: "Tung Dang", age: 30 })
    const increaseAge = () => {
        // person.age = person.age + 1;
        // setPerson(person);
        setPerson({ ...person, age: person.age + 1 })
    }

    const decreaseAge = () => {
        setPerson((prev) => {
            if (prev.age === 0) return prev;
            return { ...prev, age: prev.age - 1 }
        })
    }

    return (
        <div>
            <p> Hello. I am {person.name} and {person.age} years old </p>
            <button onClick={increaseAge}>increase age</button>
            <button onClick={decreaseAge}>decrease age</button>
        </div>
    )
}

export default Person;