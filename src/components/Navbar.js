// import { Outlet, Link } from "react-router-dom"
// import 'materialize-css/dist/css/materialize.min.css';
// import '../materialize';
import { useState } from "react";

import styled from "styled-components";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import avatar from "../images/profile-avatar.png"
import email from "../images/envelope.png"
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linkedin.png"
import phone from "../images/smartphone-call.png"

import background from "../images/tech.jpg"

const Main = styled.main`
    padding-left: 310px;
    padding-right: 300px;
`;

const Icons = styled.img`
    width: 24px;
    height: 24px;
    margin: 5px
`;

const User = styled.div`
    margin: auto;
    width: 50%;
`;

const Navbar = () => {
    const [activeEl, setActiveEl] = useState();

    const toggleSidenav = (event) => {
        event.preventDefault();
        if (activeEl) activeEl.classList.toggle('active')
        setActiveEl(event.target.parentNode)
        event.target.parentNode.classList.toggle('active')
    }

    return (
        <>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                    <User className="user-view">
                        {/* <div className="background">
                            <img src={background} alt="tech background" />
                        </div> */}
                        <a href="#user"><img className="circle" src={avatar} alt="user" /></a>
                        <a href="#name"><span className="black-text name">Victor Lopez</span></a>
                    </User>
                </li>
                <li onClick={toggleSidenav}><a className="waves-effect" href="#about">About</a></li>
                <li onClick={toggleSidenav}><a className="waves-effect" href="#projects">Projects</a></li>
                {/* <li><div class="divider"></div></li> */}
                {/* <li><a class="subheader" href="#!">Subheader</a></li> */}
                <li onClick={toggleSidenav}><a className="waves-effect" href="#experience">Experience</a></li>

                <li>
                    <div>
                        <a href="#email"><Icons src={email} alt="email" /></a>
                        <a href="#phone"><Icons src={phone} alt="phone" /></a>
                        <a href="#github"><Icons src={github} alt="github" /></a>
                        <a href="#linkedIn"><Icons src={linkedIn} alt="linkedIn" /></a>
                        <a href="#instagram"><Icons src={instagram} alt="instagram" className="icons" /></a>
                    </div>
                </li>
                
                {/* <footer class="page-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="white-text">Footer Content</h5>
                                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="white-text">Links</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2014 Copyright Text
                            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer> */}
            </ul>


            <a href="#!" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

            <Main class="row">
                <div class="col s12 m9 l10">
                    <div id="about" class="section scrollspy">
                        <p><About /> </p>
                    </div>

                    <div id="projects" class="section scrollspy">
                        <p><Projects /></p>
                    </div>

                    <div id="experience" class="section scrollspy">
                        <p><Contact /> </p>
                    </div>
                </div>
            </Main>
        </>
    )
}

export default Navbar;