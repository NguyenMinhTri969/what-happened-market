import "./Nav.css"
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <section className="top-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-logo">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div className="col-link">
                            <ul className="top-bar__links">
                                <li><Link to="/">INTRODUCTION</Link></li>
                                <li><Link to="/">SOLUTION</Link></li>
                                <li><Link to="/">RATE PLAN</Link></li>
                                <li><p>|</p></li>
                                <li><Link to="/">LOGIN</Link></li>
                                <li><Link to="/">APPLY FOR FREE USE</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
// export Nav component
export default Nav;