import React from 'react'
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import OneMoreThing from "./OneMoreThing";
import useKonamiCode from '../KonamiCode/useKonamiCode';
import sound from '../KonamiCode/sound';

const HomePage = () => {
	const konami = useKonamiCode();
	if (konami) {
		sound();
	}

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