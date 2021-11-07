import icon from '../../images/hearticon.png'
import { Link } from 'react-router-dom'

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
        textAlign: 'left',
        textDecoration: 'none',
        color: '#222222'
        
    } 
    const labelStyle = {
        display:'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }


    return (
        <div style={divStyle}>
            <Link to = "/"><img src={props.value} alt="img-item" style={imgStyle}/></Link>
            {/* <img src={props.value} alt="img-item" style={imgStyle}/> */}
            {/* <Link to ="/"><p style={pStyle}>[what happen] How to create </p></Link> */}

            <Link to = "/" style={{textDecoration: "none" }} ><p style={pStyle}>[what happen] How to create </p></Link>
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
