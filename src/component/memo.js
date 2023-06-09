import { useState, memo } from "react"

const Memo = () => {

    const [person, setPerson] = useState({
        name: "Tung Dang",
        age: 30
    });

    const changePerson = () => {
        setPerson({ ...person });
    }

    const changeName = () => {
        setPerson({
            ...person,
            name: "other_" + person.name
        })
    }

    const changeAge = () => {
        setPerson({
            ...person,
            age: person.age + 1
        })
    }

    return (
        <div>
            <button onClick={changePerson}>change</button>
            <button onClick={changeName}>change name</button>
            <button onClick={changeAge}>change age</button>
            <Peron name={person.name} age={person.age} />
            <MemoziedPerson name={person.name} age={person.age} />
        </div>
    )
}

const Peron = (props) => {
    console.log("change person_1");
    return (
        <div>
            info : {props.name} , {props.age}
        </div>
    )
}

const NotChangePerson = (props) => {
    console.log("change person_2");
    return (
        <div>
            info not change : {props.name} , {props.age}
        </div>
    )
}

const MemoziedPerson = memo(NotChangePerson, (prev, next) => {
    return prev.name === next.name;
});

export default Memo;