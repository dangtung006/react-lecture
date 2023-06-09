import { useEffect, useRef, useState } from "react"

const useHover = () => {
    const [isHover, setHover] = useState(false);
    const elRef = useRef(null)

    useEffect(() => {
        const node = elRef.current;
        node.addEventListener("mouseenter", () => {
            setHover(true);
        });

        node.addEventListener("mouseleave", () => {
            setHover(false);
        })
    }, []);

    return [elRef, isHover];
}
export { useHover }