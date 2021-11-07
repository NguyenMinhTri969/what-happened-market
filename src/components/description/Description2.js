import './Description.css'

function Description(props) {
    const divStyle = {

    }
    const titleStyle = {
        color: `${props.color}`,
        fontWeight: 'bold',
        fontSize: '2.3rem',
        marginBottom: '1.5rem',
    }
    const desStyle = {
        color: `${props.color}`,
        fontWeight: '300',
        fontSize: '0.9rem',
        lineHeight: '1.75',
        width: '35%',
        margin: '0 auto',
    }
  
    return (
        <div style={divStyle}>
            <p style={titleStyle}>{props.title}</p>
            <p className="description2" style={desStyle}>{props.des}</p>
        </div>
    )
}

export default Description;