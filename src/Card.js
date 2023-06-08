const Card = (props) => {
    const styleCard = {
        margin: "0 auto",
        width: 800,
        border: "1px solid black",
        borderRadius: 5,
        padding: 10
        //display: "flex",
    }
    return (
        <div className="card" style={styleCard}>
            {props.children}
        </div>
    )
}
export default Card;