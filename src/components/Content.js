import { useContext } from "react";
import Products from "./Products";
import ThemeContext from "./ThemeContext";
const Content = () => {
    const themeCtx = useContext(ThemeContext);
    return (
        <div className="center black-border" style={{
            flex: 2,
            backgroundColor: themeCtx.theme === 'light' ? 'white' : 'black',
            color: themeCtx.theme === 'light' ? 'black' : 'white',
            transition: "ease-in-out 0.5"
        }}>
            Content
            <Products />
        </div>
    )
}
export default Content;