import React, { useContext } from 'react';
import { About, ContactHome, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Footer} from "../components";
import Achievements from "./Achievements";
import { Context } from '../App';
import Upcoming from '../components/upcoming';
import MemberHome from '../components/memberHome';
import MediaQuery from "react-responsive";
const Home = () => {
  const titleBLOG = "Blogs";
  const titleAchievement = "Achievements";
  const [banner,BLOG,activities,achievements] = useContext(Context);
  return (
    <div>
       <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <Navbar /> */}
          <Hero />
        </div>
        <About />
        <Upcoming/>
        {/* <Tech /> */}
        <Works/>
        <MediaQuery query="(min-width: 1024px)">
        <MemberHome/>
         </MediaQuery>
   
        <Feedbacks />
       
        <div className='relative z-0'>
          <ContactHome />
          <MediaQuery query="(min-width: 1024px)">

          <StarsCanvas />
          </MediaQuery>
        
         
         
          
        </div>
        {/* <Footer/> */}
    </div>
  );
};

export default Home;