
function Button() {

    const buttonStyle = {
        border: 'solid 3px #020001',
        backgroundColor: 'transparent',
        fontWeight: '800',
        fontSize: '1rem',
        padding: '0.8rem 1.8rem',
        lineHeight: '1rem',
        borderRadius: '3px',
        cursor: 'pointer'
    }
    const divStyle = {
        with: '100%',
    }

    return (
        <div style={divStyle}>
            <button style={buttonStyle}>SEE MORE</button>
        </div>
    )
}
export default Button;