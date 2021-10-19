import Description from "../../components/description/Description2";
import Button from '../../components/button/Button';

// imgages
import imgbgBrand from '../../images/window.png';
import obj1 from '../../images/object-01.png'
import obj2 from '../../images/object-02.png'
import obj3 from '../../images/object-03.png'
import obj4 from '../../images/object-04.png'
import obj5 from '../../images/object-05.png'
import obj6 from '../../images/object-06.png'
import obj7 from '../../images/object-07.png'

function Brand() {
    const sectionStyle = {
        backgroundColor:'#0565bb',
        textAlign: 'center',
        paddingTop: '8%',
        paddingBottom: '8%',
        position: 'relative'
    }
    const divStyle = {
        backgroundImage:`url(${imgbgBrand})`,
        width: '70%',
        height: '25rem',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '5% auto',
        position: 'relative',
        zIndex: '100'
    }
    const contentStyle = {
        marginLeft: '50%',
        width: '50%',
        padding: '2.5rem 0 0 2.5rem',
        textAlign: 'left'
    }
    const titleStyle = {
        fontWeight: '800',
        fontSize: '1.3rem',
        float: 'left',
        color: '#222',
    }
    const desStyle = {
        fontWeight: '300',
        fontSize: '0.9rem',
        lineHeight: '1.88',
        width: '85%',
        display: 'flex'

    }
    return (
        <section style={sectionStyle}>
            <Description color={'#fcd32a'} title={'BRAND STORY'} des={"모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."}/>
            <div style={divStyle}>
                <div style={contentStyle}>
                    <p style={titleStyle}>WHAT HAPPENED'S BRAND STORY</p>
                    <p style={desStyle}>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </p>
                    <Button/>
                </div>
            </div>
            <img src={obj1} alt="object"style={{position: 'absolute',
                top: '19rem',
                left: '8rem', width: '8%'}}/>
            <img src={obj2} alt="object" style={{position: 'absolute',
                top: '5rem',
                right: '9rem', width: '8%', zIndex: '1'}}/>
            <img src={obj3} alt="object" style={{position: 'absolute',
                top: '6.5rem',
                right: '5rem', zIndex:'2', width: '8%'}}/>
            <img src={obj4} alt="object" style={{position: 'absolute',
                top: '21rem',
                right: '-5rem', zIndex: '1', width: '16%'}}/>
            <img src={obj5} alt="object" style={{width: '17%',
                position: 'absolute',
                top: '40rem',
                right: '-1.2rem', zIndex: '2'}}/>
            <img src={obj6} alt="object" style={{width: '9%',
                position: 'absolute',
                top: '35rem',
                left: '0rem'}}/>
            <img src={obj7} alt="object"style={{width: '9%',
                position: 'absolute',
                top: '38rem',
                left: '9rem',
                zIndex: '1'}}/>
        </section>
    )
}

export default Brand;