import React from 'react';
import './styles/Myservice.css'


const Myservice = () => {
  const services = [
    {
      title: "Ui/UX Designer",
      description: "Je crée des expériences utilisateur intuitives et visuellement captivantes, en me concentrant sur l'optimisation de l'interface et de l'interaction pour améliorer l'engagement et la satisfaction des utilisateurs."
    },
    {
      title: "Web Designer",
      description: "Je conçois des sites web esthétiquement agréables et fonctionnellement robustes, garantissant une navigation intuitive et une expérience utilisateur optimale, adaptées à chaque marque et ses besoins spécifiques."
    },
    {
      title: "Front-End dévéloppeur",
      description: "Spécialiste du développement front-end, je transforme les designs en sites web fonctionnels et réactifs, en utilisant les dernières technologies HTML, CSS, et JavaScript pour assurer une expérience utilisateur fluide sur tous les appareils."
    }
  ];

  return (
    <div className='service-section'>
        <h3>My Service</h3>
      <h2>What I Do</h2>
      <div className='services'>
        {services.map((service, index) => (
          <div key={index} className='service-card'>
            <div className='service-icon'>
              {/* Icône dynamique pour chaque service */}
              <img src={`/path/to/${service.title.toLowerCase().replace(/ /g, '-')}-icon.png`} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myservice;