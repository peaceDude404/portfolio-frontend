import { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experience from './components/Experience';
import Skill from './components/Skill';

function App() {

  const experienceRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   <>
   <Router>
      <NavigationBar onPressSkill={() => scrollToSection(skillRef)} onPressHeader={() => scrollToSection(homeRef)} onPressExperience={() => scrollToSection(experienceRef)}/>
      <div className="content">
        <Header headerRef={homeRef}></Header>
        <Experience experienceRef={experienceRef}></Experience>
        <Skill skillRef={skillRef}></Skill>
      </div>
    </Router>
   </>
  )
}

export default App
