import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    {/* <a href="/">Home</a> */}
                </li>
                <li>
                    <Link to="/products">products</Link>

                    {/* <a href="/products">Products</a> */}
                </li>
                <li>
                    <Link to="/welcomes">Welcomes</Link>
                    {/* <a href="/welcomes">Welcomes</a> */}
                </li>
                <li>
                    <Link to="/profile">Profiles</Link>
                    {/* <a href="/welcomes">Welcomes</a> */}
                </li>
            </ul>
        </div>
    )
}
export default Navbar;