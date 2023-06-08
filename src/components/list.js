import { useState } from "react";
import Item from "./item";

const List = () => {
    const [task1, setTask1] = useState({ val: "Homework", isDone: false });
    const [task2, setTask2] = useState({ val: "Housework", isDone: false });
    var notDoneTask = [task1, task2].filter(item => item.isDone === false);

    const setDoneTask1 = () => {
        setTask1({
            ...task1,
            isDone: true
        })
    }

    const setDoneTask2 = () => {
        setTask2({
            ...task2,
            isDone: true
        })
    }
    return (
        <div>
            <Item val={task1.val} isDone={task1.isDone} onClick={setDoneTask1} />
            <Item val={task2.val} isDone={task2.isDone} onClick={setDoneTask2} />

            <div>total left : {notDoneTask.length}</div>
        </div>
    )
}

export default List;