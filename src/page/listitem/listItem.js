import { Grid } from "@mui/material";
import Item from './item';
import Button from '../../components/button/Button';

import img1 from '../../images/img-01.png'
import img2 from '../../images/img-02.png'
import img3 from '../../images/img-03.png'
import img4 from '../../images/img-04.png'
import img5 from '../../images/img-05.png'
import img6 from '../../images/img-06.png'
import img7 from '../../images/img-07.png'
import img8 from '../../images/img-08.png'
import img9 from '../../images/img-09.png'
import img10 from '../../images/img-10.png'
import img11 from '../../images/img-11.png'
import img12 from '../../images/img-12.png'
import img13 from '../../images/img-13.png'
import img14 from '../../images/img-14.png'
import img15 from '../../images/img-15.png'
import img16 from '../../images/img-16.png'
import img17 from '../../images/img-17.png'
import img18 from '../../images/img-18.png'
import img19 from '../../images/img-19.png'
import img20 from '../../images/img-20.png'
import img21 from '../../images/img-21.png'
import img22 from '../../images/img-22.png'
import img23 from '../../images/img-23.png'
import img24 from '../../images/img-24.png'
import img25 from '../../images/img-25.png'

function ListItem () {
    const sectionStyle = {
        backgroundColor: '#ffffff',   
        width: '80%',
        margin: ' 8% 10%',
        textAlign: 'center'
      };
    const img = [img1, 
        img2, 
        img3, 
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22, 
        img23,
        img24,
        img25]
    return (
        <section style={sectionStyle}>
            <Grid container spacing={1.5} rowSpacing={4} style={{marginBottom:'7%'}}>
                {img.map((value) => (
                    <Grid item xs={2.4}>
                        <Item value={value}/>
                    </Grid>
                ))}
            </Grid>
            <Button/>
        </section>
    )
}

export default ListItem;