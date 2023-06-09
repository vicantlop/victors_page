import { useState } from "react";

import styled from "styled-components";

import email from "../images/envelope.png"
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linkedin.png"
import phone from "../images/smartphone-call.png"
import pic from "../images/profile-pic.jpg"
import background from "../images/tech.jpg"


const Icon = styled.img`
    width: 40px;
    height: 40px;
    padding: 8px;
    &:hover {
        cursor: pointer;
        background-color: #eeeeee;
    }
    &.active {
        background-color: #eeeeee;
    }
    &.active:hover {
        background-color: #e0e0e0;
    }
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

const SideNav = () => {
    const [activeEl, setActiveEl] = useState();
    const [openedIcon, setOpenedIcon] = useState('');
    const [info, setInfo] = useState('');
    const [activeIcon, setActiveIcon] = useState()

    const toggleSidenav = (event) => {
        event.preventDefault();
        if (activeEl) activeEl.classList.toggle('active')
        setActiveEl(event.target.parentNode)
        event.target.parentNode.classList.toggle('active')
    }

    const showInfo = (event) => {
        event.preventDefault();
        if (activeIcon) activeIcon.classList.toggle('active')
        setActiveIcon()
        if (activeIcon !== event.target) {
            setActiveIcon(event.target)
            event.target.classList.toggle('active');
        }

        let selected = event.target.alt
        if (openedIcon === selected) {
            setInfo('')
            selected = ''
        }
        switch (selected) {
            case "email":
                setInfo(<div style={{ textAlign: "center" }}>vicantlop@gmail.com</div>);
                break;
            case "phone":
                setInfo(<div style={{ textAlign: "center" }}>(760) 562 - 5829</div>);
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
            <div id="slide-out" className="sidenav sidenav-fixed">
                <ul>
                    <li>
                        <User className="user-view">
                            {/* <div className="background">
                                <img src={background} alt="tech background" />
                            </div> */}
                            <Img className="circle" src={pic} alt="user" style={{ height: 100, width: 100 }} />
                            <div style={{ fontSize: 40 }} className="black-text name">Victor Lopez</div>
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
                        {info}
                        <div className="divider" style={{ margin: 0 }}></div>
                    </li> : null}

                    <li onClick={toggleSidenav}><a className="waves-effect" href="#about">About</a></li>
                    <li onClick={toggleSidenav}><a className="waves-effect" href="#projects">Projects</a></li>
                    <li><a className="waves-effect" href="resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </div>

    )
}

export default SideNav;