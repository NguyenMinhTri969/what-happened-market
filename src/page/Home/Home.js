
import './Home.css'

import Nav from '../../components/Nav/Nav';
import Introduction from '../../components/Introduction/Introduction';
import Best from "../listbest/Best";
import ListItem from '../listitem/listItem';
import Brand from '../brand/Brand';
import Issue from '../issue/Issue';
import Video from '../videofooter/Video';
import Footer from '../footer/Footer';

function Home() {
    return (
        <div className="app">
            {/* Nav */}
            <Nav/>
            {/* End Nav */}
            <div className="main-banner">
            </div>
            <Introduction/>
            <Best/>
            {/* List Item */}
            <ListItem/>
            {/* End List Item */}

            {/* BRAND STORY */}
            <Brand/>
            {/* END BRAND STORY */}

            {/* HAPPEND'S ISSUE */}
            <Issue/>
            {/* END HAPPEND'S ISSUE */}

            {/* FOOTER */}
            <Video/>
            <Footer/>
            {/* END FOOTER */}
        </div>

    )
} 
//export Home component.
export default Home;