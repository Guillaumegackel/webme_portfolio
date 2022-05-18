import React from 'react'
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import OneMoreThing from "./OneMoreThing";


const HomePage = () => {


  return (
	<div>
	<Navbar/>
	<Home />
	<About />
	<Skills />
	<Work />
	<OneMoreThing/>
	<Contact />
	</div>
  )
}

export default HomePage