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
import pic from "../images/profile-pic.jpg"

import background from "../images/tech.jpg"

const Main = styled.main`
    padding-left: 350px;
    padding-right: 50px;
`;

const Icon = styled.img`
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

const Icons = styled.div`
    margin: 20px 15px 0px 15px;
    height: 50px
`
const Contacts = styled.a`
    text-align: center;
`

const Navbar = () => {
    const [activeEl, setActiveEl] = useState();
    const [openedIcon, setOpenedIcon] = useState('');
    const [info, setInfo] = useState('');

    const toggleSidenav = (event) => {
        event.preventDefault();
        if (activeEl) activeEl.classList.toggle('active')
        setActiveEl(event.target.parentNode)
        event.target.parentNode.classList.toggle('active')
    }

    const showInfo = (event) => {
        event.preventDefault();
        let selected = event.target.alt
        if (openedIcon === selected) {
            setInfo('')
            selected = ''
        }
        switch (selected) {
            case "email":
                setInfo(<div style={{textAlign : "center"}}>vicantlop@gmail.com</div>);
                break;
            case "phone":
                setInfo(<div style={{textAlign : "center"}}>(760) 562 - 5829</div>);
                break;
            case "github":
                setInfo(<Contacts href="https://github.com/vicantlop" target="_blank" rel="noreferrer">github.com/vicantlop</Contacts>)
                break;
            case "linkedIn":
                setInfo(<Contacts href="https://www.linkedin.com/in/victor-lopez-se/" target="_blank" rel="noreferrer">linkedin.com/in/victor-lopez-se/</Contacts>)
                break;
            case "instagram":
                setInfo(<Contacts href="https://www.instagram.com/victor_a_lopez/" target="_blank" rel="noreferrer">instagram.com/victor_a_lopez/</Contacts>)
                break;
            default:
                break;
        }

        setOpenedIcon(selected)
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
                            <a href="#user"><Img className="circle" src={pic} alt="user" style={{height: 100, width: 100}}/></a>
                            <a href="#name"><div style={{ fontSize: 40 }} className="black-text name">Victor Lopez</div></a>
                            <Icons>
                                <Icon src={email} alt="email" onClick={showInfo} />
                                <Icon src={phone} alt="phone" onClick={showInfo} />
                                <Icon src={github} alt="github" onClick={showInfo} />
                                <Icon src={linkedIn} alt="linkedIn" onClick={showInfo} />
                                <Icon src={instagram} alt="instagram" onClick={showInfo} />
                            </Icons>
                        </User>
                    </li>
                    {info ? <li style={{ height: 50 }}>
                        <div className="divider" style={{ margin: 0 }}></div>
                        {/* <Contacts className="subheader" style={{ height: 50 }}> */}
                            {info}
                        {/* </Contacts> */}
                        <div className="divider" style={{ margin: 0 }}></div>
                    </li> : null}

                    <li onClick={toggleSidenav}><a className="waves-effect" href="#about">About</a></li>
                    <li onClick={toggleSidenav}><a className="waves-effect" href="#projects">Projects</a></li>
                    <li onClick={toggleSidenav}><a className="waves-effect" href="#experience">Resume</a></li>
                </ul>
            </div>


            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

            <Main className="row">
                <div className="col s12 m9 l10">
                    <div id="about" className="section scrollspy">
                        <p><About /> </p>
                    </div>

                    <div id="projects" className="section scrollspy">
                        <p><Projects /></p>
                    </div>

                    <div id="resume" className="section scrollspy">
                        <p><Contact /> </p>
                    </div>
                </div>
            </Main>
        </>
    )
}

export default Navbar;