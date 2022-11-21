import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import team from "./Team.png";
const Home = ({ el }) => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Work Sans"
        rel="stylesheet"
      ></link>
      <div class="Home">
        <Link to="LogIn">Login</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Products">Products</Link>
        <Link to="Services">Services</Link>
        <button class="io">Get Access</button>
      </div>
      <img className="hfef" src={team} />
      <div class="fj">Instant collaborations for remote teams</div>
      <div className="mf">
        All in one for your remote team chats, collaboration and track projects
      </div>
    </div>
  );
};

export default Home;
