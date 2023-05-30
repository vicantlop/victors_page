// import { Outlet, Link } from "react-router-dom"

// import 'materialize-css/dist/css/materialize.min.css';
// import '../materialize';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Navbar = () => {
    return (
        <>
            <div class="row">
                <div class="col s12 m9 l10">
                    <div id="introduction" class="section scrollspy">
                        <p><About/> </p>
                    </div>

                    <div id="structure" class="section scrollspy">
                        <p><Projects /></p>
                    </div>

                    <div id="initialization" class="section scrollspy">
                        <p><Contact /> </p>
                    </div>
                </div>
                <div class="col hide-on-small-only m3 l2">
                    <ul class="section table-of-contents">
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#structure">Structure</a></li>
                        <li><a href="#initialization">Intialization</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;