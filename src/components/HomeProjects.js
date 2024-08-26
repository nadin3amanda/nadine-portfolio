import React from "react";
import '../styles/Home.css';
import SoarLanding from '../assets/iMac_Front-Soar Landing Page.png'
import { Link } from "react-router-dom";

export default function HomeProjects() {
    return (
        <Link to="/" target="_blank" rel="nofollow">
            <img src={SoarLanding} alt="Soar Landing Page mockup" />
        </Link>
    );
}
