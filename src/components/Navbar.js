// import { Outlet, Link } from "react-router-dom"
// import 'materialize-css/dist/css/materialize.min.css';
// import '../materialize';

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

const Main = styled.main`
    padding-left: 310px;
    padding-right: 300px;
`;

const Navbar = () => {
    return (
        <>
            <ul id="slide-out" class="sidenav sidenav-fixed">
                <li><div class="user-view">
                    <div class="background">
                        {/* <img src="../public/profile-avatar.png" alt="office" /> */}
                    </div>
                    {/* <a href="#user"><img class="circle" src={avatar} alt="user" /></a>
                    <a href="#name"><span class="black-text name">John Doe</span></a>
                    <a href="#email"><span class="black-text email">jdandturk@gmail.com</span></a> */}
                </div></li>
                <li><a href="#about"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                <li class="active"><a href="#projects">Second Link</a></li>
                {/* <li><div class="divider"></div></li> */}
                {/* <li><a class="subheader" href="#!">Subheader</a></li> */}
                <li><a class="waves-effect" href="#experience">Third Link With Waves</a></li>
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