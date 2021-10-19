function Item(props) {
    const newItem = {
        margin: '-8px -2px'
    }
    const labelStyle = {
        width: '100%',
        height: '3.5rem',
        backgroundColor: `${props.bgNew}`,
        textAlign: 'center',
        color: '#ffffff'
    }
    const titleStyle = {
        fontWeight: '800',
        fontSize: '1.5rem',
        padding: '1rem 0'
    }

    return (
        <div style={newItem}>
            <div style={labelStyle}>
                <p style={titleStyle}>{props.titleNew}</p>
            </div>
            <div>
                <img src={props.imgNew} alt='img_new' style={{width: '100%'}}/>
            </div>
        </div>
    )
}

export default Item;