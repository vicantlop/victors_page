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
    padding-left: 350px;
    padding-right: 50px;
`;

const Icons = styled.img`
    width: 24px;
    height: 24px;
    margin: 8px;
`;

const User = styled.div`
    margin: auto;
    width: 100%;
    text-align: center;
`;

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
`

const Contacts = styled.div`
    margin: 20px 15px 0px 15px;
    height: 50px
`

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
            <div id="slide-out" className="sidenav sidenav-fixed">
                <ul>
                    <li>
                        <User className="user-view">
                            {/* <div className="background">
                                <img src={background} alt="tech background" />
                            </div> */}
                            <a href="#user"><Img className="circle" src={avatar} alt="user" /></a>
                            <a href="#name"><div style={{ fontSize: 40 }} className="black-text name">Victor Lopez</div></a>
                            <Contacts>
                                <a href="#email"><Icons src={email} alt="email" /></a>
                                <a href="#phone"><Icons src={phone} alt="phone" /></a>
                                <a href="#github"><Icons src={github} alt="github" /></a>
                                <a href="#linkedIn"><Icons src={linkedIn} alt="linkedIn" /></a>
                                <a href="#instagram"><Icons src={instagram} alt="instagram" className="icons" /></a>
                            </Contacts>

                        </User>
                    </li>
                    <li onClick={toggleSidenav}><a className="waves-effect" href="#about">About</a></li>
                    <li onClick={toggleSidenav}><a className="waves-effect" href="#projects">Projects</a></li>
                    <li onClick={toggleSidenav}><a className="waves-effect" href="#experience">Resume</a></li>
                </ul>
            </div>


            <a href="#!" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

            <Main class="row">
                <div class="col s12 m9 l10">
                    <div id="about" class="section scrollspy">
                        <p><About /> </p>
                    </div>

                    <div id="projects" class="section scrollspy">
                        <p><Projects /></p>
                    </div>

                    <div id="resume" class="section scrollspy">
                        <p><Contact /> </p>
                    </div>
                </div>
            </Main>
        </>
    )
}

export default Navbar;