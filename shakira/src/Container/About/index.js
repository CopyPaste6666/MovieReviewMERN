import React from 'react';
import Container from 'react-bootstrap/Container';
import './style.css';
const ContactContainer = () => {
  return (
    <Container>
      <section className="about">
        <h1>About Us</h1>
        <h5>Welcome to Review Radar - Your Ultimate Source for Movie and TV Show Reviews!</h5>

          <p>At Review Radar, our mission is to provide you with insightful and honest reviews of the latest movies and TV shows. We understand that choosing what to watch can be a daunting task in today's media-saturated world. That's why we've assembled a dedicated team of movie enthusiasts and critics to help you make informed decisions about your entertainment choices. </p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <ul>
          <li className="team-member">
            <h3 className="team-member-name">Sandrup</h3>
            <p className="team-member-details">super star</p>
          </li>
          <li className="team-member">
            <h3 className="team-member-name">Ruhul</h3>
            <p className="team-member-details">Game Streamer</p>
          </li>
          <li className="team-member">
            <h3 className="team-member-name">Niresh</h3>
            <p className="team-member-details">Gambler</p>
          </li>
          {/* Add more team members as needed */}
        </ul>
      </section>
    </Container>
  );
}

export default ContactContainer;
