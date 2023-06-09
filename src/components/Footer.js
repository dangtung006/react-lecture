import { useContext } from "react";
import ThemeContext from "./ThemeContext";
const Footer = () => {
    const theme = useContext(ThemeContext);
    const changeTheme = (event) => {
        theme.setTheme(event.target.value)
    }
    return (
        <div className="center black-border" style={{ height: 50 }}>
            Footer
            <select value={theme.value} onChange={changeTheme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>)
}
export default Footer;