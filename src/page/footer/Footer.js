import DescriptionBig from "../../components/description/DescriptionBig";
import Button from '../../components/button/Button';
import imgbgFooter from "../../images/video.png";

// images object
import objVideo1 from '../../images/video-object-01.png'
import objVideo2 from '../../images/video-object-02.png'
import objVideo3 from '../../images/video-object-03.png'
import objVideo4 from '../../images/video-object-04.png'
import objVideo5 from '../../images/video-object-05.png'
import objVideo6 from '../../images/video-object-06.png'
import objVideo7 from '../../images/video-object-07.png'
import objVideo8 from '../../images/video-object-08.png'
import objVideo9 from '../../images/video-object-09.png'

function Footer() {
    const sectionStyle = {
        width: '100%',
        display: 'flow-root',
        textAlign: 'center',
        paddingTop: '8%',
        paddingBottom: '8%',
        position: 'relative',
      };
    const buttonStyle = {
        marginTop: '3rem',
        marginBottom: '6rem'
    }
    const divStyle = {
        backgroundImage:`url(${imgbgFooter})`,
        width: '70%',
        height: '46rem',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '5% auto',
        position: 'relative',
        zIndex: '100'
    }
    const lineStyle = {
        width: '90%',
        height: '1px',
        backgroundColor: '#f4f4f4',
        margin: '1px auto',
    }
    const footerStyle = {
            display:'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'
    }
    return (
        <section style={sectionStyle}>
            <DescriptionBig title={'WHAT HAPPENED'} des={'How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first '}/>
            <div style={buttonStyle}>
                <Button/>
            </div>
            <div style={divStyle}>
            </div>
            {/* objects */}
            <img src={objVideo1} alt="obj_vi" style={{position: 'absolute',bottom: '2rem',left: '15rem', width: '19%', zIndex:'2' }}></img>
            <img src={objVideo2} alt="obj_vi" style={{position: 'absolute',bottom: '6rem',right: '30rem', width: '6%' }}></img>
            <img src={objVideo3} alt="obj_vi" style={{position: 'absolute',bottom: '10rem',left: '1rem' }}></img>
            <img src={objVideo4} alt="obj_vi" style={{position: 'absolute',top: '25rem',left: '-14rem', width: '25%' }}></img>
            <img src={objVideo5} alt="obj_vi" style={{position: 'absolute',top: '0rem',left: '9rem' }}></img>
            <img src={objVideo6} alt="obj_vi" style={{position: 'absolute',top: '18rem',right: '10rem', zIndex: '2' }}></img>
            <img src={objVideo7} alt="obj_vi" style={{position: 'absolute',top: '12rem',right: '3rem' }}></img>
            <img src={objVideo8} alt="obj_vi" style={{position: 'absolute',bottom: '5rem',right: '-13rem', zIndex: '2', width: '32%' }}></img>
            <img src={objVideo9} alt="obj_vi" style={{position: 'absolute',bottom: '22rem',right: '-16rem' }}></img>
            {/* objects */}

            <div style={lineStyle}></div>

            {/* nav footer */}
            <div style={footerStyle}>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}
export default Footer;