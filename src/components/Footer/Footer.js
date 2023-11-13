import React, { Component } from 'react';

// Footer component responsible for rendering the footer section of the website
export default class Footer extends Component {
  render() {
    // Extracting resume data from props
    let resumeData = this.props.resumeData;

    return (
      // Footer section
      <footer>
        <div className="row">
          <div className="twelve columns">
            {/* Social links */}
            <ul className="social-links">
              {
                // Mapping through social links and rendering each
                resumeData.socialLinks && resumeData.socialLinks.map((item, index)=>{
                  return(
                    // Individual social link
                    <li key={index}>
                      <a href={item.url}>
                        {/* Social media icon */}
                        <i className={item.className} />
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* Scroll to top button */}
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}
