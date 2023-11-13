import React, { Component } from 'react';

// Portfolio component responsible for rendering a section with works/projects
export default class Portfolio extends Component {
  render() {
    // Extracting portfolio data from props
    let resumeData = this.props.resumeData;

    return (
      // Portfolio section
      <section id="portfolio">
        <div className="row">
          <h1>Works</h1>
          {/* Portfolio items grid */}
          <div className="twelve columns collapsed">
            {/* Mapping through portfolio items and rendering each */}
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, index) => {
                return (
                  // Portfolio item
                  <div key={index} className="columns portfolio-item">
                    {/* Item wrap with image and overlay */}
                    <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img" alt="profile aboutme" />
                      <div className="overlay">
                        {/* Meta data for the portfolio item */}
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    {/* Buttons for GitHub and Live Website (if available) */}
                    <div className='centerbtngithub'>
                      {/* GitHub button */}
                      <a href={`${item.link}`} className="projectBtnCodeLive" target="_blank" rel="noopener noreferrer">
                        <p>Github</p>
                      </a>
                      {/* Live Website button (conditionally rendered) */}
                      {item.livewebsite && (
                        <a href={`${item.livewebsite}`} className="projectBtnCodeLive" target="_blank" rel="noopener noreferrer">
                          <p>Page</p>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
