import Description from "../../components/description/Description2";
import Button from '../../components/button/Button';
import { Grid } from "@mui/material";
import Item from './item';

import bgNew1 from "../../images/news-img-05.png"
import bgNew2 from "../../images/news-img-03.png"
import bgNew3 from "../../images/news-img-04.png"
import bgNew4 from "../../images/news-img-05.png"
import bgNew5 from "../../images/news-img-01.png"

import objNew1 from "../../images/news-object-02.png"
import objNew2 from "../../images/news-object-03.png"
import objNew3 from "../../images/news-object-03_2.png"
import objNew4 from "../../images/news-object-04.png"
import objNew5 from "../../images/news-object-05.png"

function Issue() {
    const sectionStyle = {
        backgroundColor: '#fccb05',
        with: '100%',
        display: 'flow-root',
        textAlign: 'center',
        paddingTop: '8%',
        paddingBottom: '8%',
        position: 'relative'
    }
    const buttonStyle = {
        marginTop: '3rem',
        marginBottom: '6rem'
    }
    const newItem = {
        backgroundColor: '#ff5500',
        width: '100%',
        margin: '1rem 0',
        padding: '3.9rem 0'
    }
    return (
        <section style={sectionStyle}>
            <Description color={'#110e03'} title={"HAPPEND'S ISSUE"} des={"모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."}/>
            <div style={buttonStyle}>
                <Button/>
            </div>
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={2.4}>
                        <div style={newItem}>
                            <div>
                                <p style={{width: '57%', fontWeight: '800', fontSize:'3rem', wordBreak: 'break-word', margin: '0 auto'}}>WHPNISSUE</p>
                                <img src={bgNew5} alt='new_img' style={{width: '35%', marginTop: '1.5rem'}}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2.4}>
                        <Item imgNew={bgNew1} bgNew={'#110e03'} titleNew={'B BRAND'}/>
                    </Grid>
                    <Grid item xs={2.4}>
                        <Item imgNew={bgNew2} bgNew={'#110e03'} titleNew={'C BRAND'}/>
                    </Grid>
                    <Grid item xs={2.4}>
                        <Item imgNew={bgNew3} bgNew={'#ff5500'} titleNew={'D BRAND'}/>
                    </Grid>
                    <Grid item xs={2.4}>
                        <Item imgNew={bgNew4} bgNew={'#110e03'} titleNew={'E BRAND'}/>
                    </Grid>
                </Grid>
            </div>
            <img src={objNew1} alt="obj_new" style={{position: 'absolute',top: '10rem',right: '5rem' }}></img>
            <img src={objNew2} alt="obj_new" style={{position: 'absolute',bottom: '5rem',left: '13rem',width: '8%' }}></img>
            <img src={objNew3} alt="obj_new" style={{position: 'absolute', top: '3rem', right: '5rem'}}></img>
            <img src={objNew4} alt="obj_new" style={{position: 'absolute',top: '31.5rem', left: '22rem', width: '6%'}}></img>
            <img src={objNew5} alt="obj_new" style={{position: 'absolute', bottom: '5.5rem', right: '17.5rem', width: '7%'}}></img>
        </section>
    )
}

export default Issue;