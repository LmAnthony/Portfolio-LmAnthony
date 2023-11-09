import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            {/* Profile picture */}
            <div className="three columns">
               <img className="profile-pic" src="./images/profilepic.jpg" alt="PH Aboutme" />
            </div>
            {/* About me texts + contact */}
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{resumeData.aboutme}</p>
               <p>{resumeData.aboutmetwo}</p>
               <div className="row">
                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}