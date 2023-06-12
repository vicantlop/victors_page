import { useState } from "react";

import styled from "styled-components";

import About from "./About";
import Projects from "./Projects";
import SideNav from "./SideNav";

const Main = styled.main`
    padding-left: 350px;
    padding-right: 50px;
`;

const Home = () => {
    return (
        <>
            <SideNav />

            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

            <Main className="row">
                <div className="col s12 m9 l10">
                    <div id="about" className="section scrollspy">
                        <p><About /> </p>
                    </div>
                    <div id="projects" className="section scrollspy">
                        <p><Projects /></p>
                    </div>
                </div>
            </Main>
        </>
    )
};

export default Home;