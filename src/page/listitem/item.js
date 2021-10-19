import icon from '../../images/hearticon.png'

function Item(props) {
    console.log(props.value)
    const divStyle = {
        width: '100%',
      };
    const imgStyle = {
        width: '100%',
        height: '14.5rem',
    }
    const pStyle = {
        fontWeight: '600',
        fontSize: '0.9rem',
        lineHeight: '1.94',
        marginBottom: '0.3rem',
        textAlign: 'left'
    } 
    const labelStyle = {
        display:'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }


    return (
        <div style={divStyle}>
            <img src={props.value} alt="img-item" style={imgStyle}/>
            <p style={pStyle}>[what happen] How to create </p>
            <div style={labelStyle}>
                <p>2,500 won</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img style={{marginRight: '0.3rem'}}src={icon} alt="icon"/>
                    <p>236</p>
                </div>
            </div>
        </div>
    )
};

export default Item;
