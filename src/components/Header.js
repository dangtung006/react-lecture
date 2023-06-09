import ThemeContext from "./ThemeContext";

const Header = () => {
    return (
        <div className="center black-border" style={{ height: 50 }}>
            Header
            <ThemeContext.Consumer>
                {
                    (value) => {
                        return <div>[{value.theme}]</div>
                    }
                }
            </ThemeContext.Consumer>
        </div>
    )
}
export default Header;