import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/welcomes")
    }
    useEffect(() => {
        setTimeout(() => {
            navigate("/welcomes")
        }, 1000)
    }, [navigate])


    return (
        <div>
            <h1>Home</h1>
            <a href="/product">View product</a>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Home;
