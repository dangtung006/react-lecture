import { useEffect, useState } from "react";

const Scrolling = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [count, setCount] = useState(0);
    const [isShowContent, setShowContent] = useState(true);

    // useEffect(() => {
    //     document.addEventListener("scroll", () => {
    //         console.log(document.documentElement.scrollTop);
    //     })
    // });

    const handleScrolling = () => {
        setScrollTop(document.documentElement.scrollTop);
    }

    useEffect(() => {
        console.log("run effect")
        document.addEventListener("scroll", handleScrolling);
        //effect with cleanUp;
        return () => {
            console.log("clean up");
            document.removeEventListener("scroll", handleScrolling);
        }
    }, []);

    useEffect(() => {
        document.title = `You have clicked ${count} times`
    }, [count, isShowContent]);

    return (
        <div>
            <div style={{ position: "fixed" }}> {scrollTop} </div>
            <div style={{ position: "relative", top: 20 }}>
                <button style={{ position: "fixed" }} onClick={() => {
                    setCount(count + 1)
                }}>Increase</button>
            </div>
            <div style={{ position: "relative", top: 40 }}>
                <button onClick={() => {
                    setShowContent(!isShowContent)
                }}>change visible</button>
            </div>
        </div>)
}

export default Scrolling;