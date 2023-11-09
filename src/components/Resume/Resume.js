import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         {/* Section SKILLS */}
         <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                  {
                    resumeData.skills && resumeData.skills.map((item, index) => {
                      return(
                        <li key={index} >
                        <img src={`${item.logo}`} className="item-img" alt="logo skills"/>
                        <p>{item.skillname}</p>
                        </li>
                      )
                    })
                  }
              </ul>
            </div>
          </div>
         </div>
      </section>
    );
  }
}