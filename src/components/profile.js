import { NavLink, Outlet } from "react-router-dom";
const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <ul>
                <li>
                    <NavLink to="/profile/about">Abouts</NavLink>
                </li>
                <li>
                    <NavLink to="/profile/coures">Coures</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

const About = () => {
    return <h1>About</h1>
}

const Coures = () => {
    return <h1>Coures</h1>
}

export { About, Coures };
export default Profile;