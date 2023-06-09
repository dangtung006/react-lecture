import { useState } from "react"
var times = 0;
const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // if (!isLoggedIn) {
    //     return (<button onClick={() => {
    //         setIsLoggedIn(true)
    //     }}>LogOut</button>)
    // }
    // return (<button onClick={() => {
    //     setIsLoggedIn(false)
    // }}>LogIn</button>)
    const style = {
        backgroundColor: isLoggedIn ? "yellow" : "red"
    }
    return (<div>
        <button style={style} onClick={() => {
            times += 1;
            setIsLoggedIn(!isLoggedIn)
        }}> {isLoggedIn ? "Logout" : "LogIn"}</button>
        {isLoggedIn && <p>Welcome</p>}
        <p>click at {times} times</p>
    </div>)

}

export default Auth;