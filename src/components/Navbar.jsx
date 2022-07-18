import React from 'react'
import {Link} from "react-router-dom"
import { FaTwitter,FaFacebookSquare,FaLinkedin,FaBehance} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState,useEffect,useRef } from 'react';
import links from "../helper/data"


const Navbar = () => {
    const [isVisible,setIsVisible]=useState(false)
    const pagesDiv=useRef(null)
    const linksDiv=useRef(null)

    // console.log(links);

    useEffect(() => {
      const linkDivHeight=linksDiv.current.getBoundingClientRect().height;
      // console.log(linkDivHeight);
    // console.log(pagesDiv.current.style.h eight);
      if(isVisible){
        pagesDiv.current.style.maxHeight=`${linkDivHeight}px`
      }else{
           pagesDiv.current.style.maxHeight="0px"
      }
    }, [isVisible])
     
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>Coding <span>Addict</span></h2>
            <div className='hamburger'>
            <button onClick={()=>setIsVisible(!isVisible)} className={`${isVisible && "rotate" }`}><GiHamburgerMenu/></button> 
        </div>
        </div>
        <div className= "pages" ref={pagesDiv}>
            <ul className="links" ref={linksDiv}>
              {
                links.map((item)=>{
                  const {id,text,url}=item;
                  return(
                    <li key={id}> <Link to={url}>{text.toUpperCase()}</Link> </li>
                  )
                  
                })
              }
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/profile">Profile</Link> */}
            </ul>
        </div>
        <div className="icons">
            <Link to="//www.linkedin.com/in/mehmet%C3%A7ak%C4%B1r43"><FaTwitter/></Link>
            <Link to="//www.linkedin.com/in/mehmet%C3%A7ak%C4%B1r43"><FaFacebookSquare/></Link>
            <Link to="//www.linkedin.com/in/mehmet%C3%A7ak%C4%B1r43"><FaLinkedin/></Link>
            <Link to="//www.linkedin.com/in/mehmet%C3%A7ak%C4%B1r43"><FaBehance/></Link>
        </div>

    </div>
  )
}

export default Navbar

