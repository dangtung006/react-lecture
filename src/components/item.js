const Item = (props) => {

    const styleDone = {
        textDecoration: "line-through",
        color: "red"
    }

    const makeJobDone = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    if (props.isDone === true) {
        return (
            <div style={styleDone}>{props.val}</div>
        )
    }
    return (
        <div onClick={makeJobDone}>{props.val}</div>
    )
}

export default Item;