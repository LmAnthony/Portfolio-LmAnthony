import React, { Component } from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    // Configuration du carrousel
    // const settings = {
    //   dots: true, // Afficher les points de navigation
    //   infinite: true, // Activer la navigation infinie
    //   speed: 800, // Vitesse de transition
    //   slidesToShow: 1, // Nombre d'éléments à afficher à la fois
    //   slidesToScroll: 1, // Nombre d'éléments à faire défiler à la fois
    // };

    return (
      <section id="portfolio">
        <div className="row">
            <h1>Works</h1>
          <div className="twelve columns collapsed">
            {/* <Slider {...settings}> */}
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div key={index} className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" alt="profile aboutme" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className='centerbtngithub'>
                        <a href={`${item.link}`} className="btnlive_style" target="_blank" rel="noopener noreferrer">
                          <p>Github code</p>
                        </a>
                      </div>
                    </div>
                  );
                })}
            {/* </Slider> */}
          </div>
        </div>
      </section>
    );
  }
}
