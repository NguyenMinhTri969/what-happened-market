function DescriptionBig(props) {
    const divStyle = {

    }
    const titleStyle = {
        color: `${props.color}`,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
    }
    const desStyle = {
        color: `${props.color}`,
        fontWeight: '300',
        fontSize: '1rem',
        lineHeight: '1.88',
        width: '35%',
        margin: '0 auto'
    }
    
    return (
        <div style={divStyle}>
            <p style={titleStyle}>{props.title}</p>
            <p style={desStyle}>{props.des}</p>
        </div>
    )
}

export default DescriptionBig;