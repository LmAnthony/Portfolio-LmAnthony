import React, { Component } from 'react';

// About component responsible for rendering the About Me section of the website
export default class About extends Component {
  render() {
    // Extracting resume data from props
    let resumeData = this.props.resumeData;

    return (
      // About Me section
      <section id="about">
         <div className="row">
            {/* Profile picture */}
            <div className="three columns">
               <img className="profile-pic" src="./images/profilepic.jpg" alt="PH Aboutme" />
            </div>
            {/* About me texts + contact */}
            <div className="nine columns main-col">
               <h2>About Me</h2>
               {/* First paragraph of about me */}
               <p>{resumeData.aboutme}</p>
               {/* Second paragraph of about me */}
               <p>{resumeData.aboutmetwo}</p>
               {/* Contact details section */}
               <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    {/* Address and website details */}
                    <p className="address">
       					<span>{resumeData.name}</span>
                     <br></br>
       					<span>{resumeData.address}</span>
                     <br></br>
                    <span>{resumeData.website}</span>
                     <br></br>
                    {/* Link to the CV with a button */}
                    <a href={`${resumeData.myCV}`} target="_blank" className='projectBtnCodeLive'><p>CV</p></a>
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
