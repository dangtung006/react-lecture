import { useHover } from "../hooks/useHover";
const UseHover = () => {

    const [elRef1, isHover1] = useHover();
    const [elRef2, isHover2] = useHover();
    return (
        <div>

            <div style={{ height: 100, width: 100, border: "1px solid black" }} ref={elRef1}>
                {isHover1 ? "hovering" : "left"}
            </div>
            <div style={{ height: 100, width: 100, border: "1px solid black" }} ref={elRef2}>
                {isHover2 ? "hovering" : "left"}
            </div>
        </div>
    )
}

export default UseHover