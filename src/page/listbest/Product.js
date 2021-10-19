import icon from '../../images/go-icon.png'

function Product(props) {
    const sectionStyle = {
        backgroundImage: `url("${props.bg}")`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        height: '25rem',
      };
    const imgStyle = {
        width: 'auto',
        height: 'auto',
        maxWidth: '4.5rem',
        maxHeight: '4.5rem',
        float: 'left',
        position: 'relative',
        top: '-2.25rem'
    }  
    const divStyle = {
        display: 'inline-flex',     
        border: 'solid 3px #020001',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        padding: '0 0.5rem 0 1.5rem',
        position: 'relative',
        top: '22.5rem',
        left: '-2.5rem'
    }
    const pStyle = {
        fontWeight: '800',
        color: '#222',
        width: '10rem',
        textAlign: 'left',
        marginRight: '3rem'
    }
    return (
        
        <section style={sectionStyle}>
            <img src={props.production} alt="production" style={imgStyle}/>
            <div style={divStyle}>
                <p style={pStyle}>How to create mobile-optimized</p>
                <img src={icon} alt="icon" style={{maxWidth: '3.5rem', maxHeight:'3.5rem'}}/>
            </div>
        </section>
    )
}

export default Product;