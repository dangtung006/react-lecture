import { useState } from "react";

const List = () => {
    const [todoItems, setTodoItems] = useState(["Homework", "Play baseball"]);
    const addTodo = () => {
        setTodoItems([...todoItems, "Other"])
    }

    // const itemEl = [];
    // todoItems.forEach(item => itemEl.push(<li>{item}</li>));
    // console.log(itemEl);

    return (
        <div>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todoItems.map((item, idx) => <li key={idx}> {idx} : {item}</li>)}
            </ul>
        </div>
    )
}

export default List;