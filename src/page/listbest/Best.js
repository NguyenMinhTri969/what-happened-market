import Product from "./Product";
import Grid from "@mui/material/Grid";

import bg1 from '../../images/best-image-01.png';
import bg2 from '../../images/best-image-02.png';
import bg3 from '../../images/best-image-03.png';
import production1 from '../../images/producticon-01.png';
import production2 from '../../images/producticon-02.png';
import production3 from '../../images/producticon-03.png';

function Best() {
    
    return (
        <section className="product__best">
            <div className="title__best">
                <p className="title">BEST PRODUCT</p>
                <p className="description">How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first 
                </p>
            </div>
            <div className="item__best">
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <Product bg={bg1} production={production1}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product bg={bg2} production={production2}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product bg={bg3} production={production3}/>
                    </Grid>
                </Grid>
            </div>
        </section>
    )   
}

export default Best;