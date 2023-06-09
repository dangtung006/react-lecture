import { useEffect, useState, useMemo } from "react";

const UseMemo = () => {

    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [isShowNumbers, setIsShowNumbers] = useState(true);
    const doubleINumbers = numbers.map(number => number * 2);
    const memonsizeDoubleNumbers = useMemo(() => numbers.map(number => number * 2), [numbers]);

    const changeNumbers = () => {
        setNumbers([...numbers, numbers.length + 1])
    }

    const changeVisible = () => {
        setIsShowNumbers(!isShowNumbers);
    }

    useEffect(() => {
        console.log("change numbers")
    }, [doubleINumbers])

    useEffect(() => {
        console.log("change memnosize numbers")
    }, [memonsizeDoubleNumbers])

    return (
        <div>
            <button onClick={changeNumbers}>change</button>
            <button onClick={changeVisible}>change visible</button>
            {
                isShowNumbers && <div>
                    <p>{numbers.join(",")}</p>
                    <p>{doubleINumbers.join(",")}</p>
                    <p>{memonsizeDoubleNumbers.join(",")}</p>
                </div>
            }

        </div>
    )
}

export default UseMemo;