import ThemeContext from "./ThemeContext"
import { useContext } from "react"
const Products = () => {
    const value = useContext(ThemeContext);
    return (

        <div >
            {/* <ThemeContext.Consumer>
                {
                    (value) => {
                        return <div>[{value.theme}]</div>
                    }
                }
            </ThemeContext.Consumer> */}
            <div>[{value.theme}]</div>
        </div>
    )
}
export default Products