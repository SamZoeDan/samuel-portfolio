import React from 'react'
import Slider from 'react-slick';
import  './styles/Projet.css'

const Projet = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    
      // Remplacez les images et descriptions avec vos projets réels
      const projects = [
        { img: '/path/to/project1.png', description: 'Project 1 Description' },
        { img: '/path/to/project2.png', description: 'Project 2 Description' },
        { img: '/path/to/project3.png', description: 'Project 3 Description' }
      ];
    
      return (
        <div className='recent-projects'>
          <h2>Recent Projects</h2>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className='project'>
                <img src={project.img} alt={`Project ${index + 1}`} />
                <p>{project.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
    
    // Custom arrow components for the slider
    const NextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        />
      );
    }
    
    const PrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        />
      );
    }

export default Projet