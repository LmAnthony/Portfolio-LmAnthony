import React, { Component } from 'react';
import { getBaseUrlMedia } from "../../utils/utils";

// Header component responsible for rendering the header section of the website
export default class Header extends Component {
  render() {
    // Extracting resume data from props
  let resumeData = this.props.resumeData;

  return (
    // Fragment to group multiple elements without introducing an extra node in the DOM
    <React.Fragment>
    
    {/* Header section with background image */}
    <header style={{backgroundImage: `url(${getBaseUrlMedia().concat('/header-background.jpg')})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} id="home">
       {/* Navigation bar */}
       <nav id="nav-wrap">
          {/* Mobile navigation buttons */}
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          {/* Navigation links */}
          <ul id="nav" className="nav">
             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#portfolio">Works</a></li>
             <li><a className="smoothscroll" href="#resume">Skills</a></li>
          </ul>
       </nav>

       {/* Banner section */}
       <div className="row banner">
          <div className="banner-text">
             {/* Name and role of the resume owner */}
             <h1 className="responsive-headline">{resumeData.name}</h1>
             <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.role}{resumeData.roleDescription}</h3>
             <hr/>
             {/* Social links */}
             <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                    return(
                            <li key={item.name}>
                              {/* Social media icons with links */}
                              <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                            </li>
                          )
                        })}
             </ul>
          </div>
       </div>

       {/* Scroll down indicator */}
       <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
       </p>

    </header>
    </React.Fragment>
  );
}
}
