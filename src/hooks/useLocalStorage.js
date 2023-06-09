import { useEffect, useState } from "react"

const useLocalStorage = (name) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(localStorage.getItem(name) ? localStorage.getItem(name) : "val")
    }, [name]);

    useEffect(() => {
        localStorage.setItem(name, value)
    }, [value, name])

    return [value, setValue];
}

export { useLocalStorage }