const NameCard = (props) => {
    const { name, age, addr } = props;

    const styleNamecard = {
        width: 200,
        fontSize: 18,
        color: "black",
        backgroundColor: "brown",
        marginBottom: 5

    }

    return (
        <div className="name-card" style={styleNamecard}>
            <div className="name">
                <span>name : </span> {name}
            </div>
            <div className="age">
                <span>age : </span>{age}</div>
            <div className="addr">
                <span>addr : </span> {addr}
            </div>
        </div>
    )
}

export default NameCard;