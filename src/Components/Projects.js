import React from 'react';
import '../CSS/Projects.css';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project">
        <img src={require('../images/dontwait.png')} alt="DontWait App" />
        <h2>DontWait App</h2>
        <p>
          An Android app for PMT officers and travellers, developed using Firebase and Android Studio. Allows users to check the availability of buses and plan their travels accordingly. This app helps to reduce the time spent waiting at bus stops, and makes it easier for users to find and book the right bus for their travels.
        </p>
      </div>
      <div className="project">
        <img src={require('../images/findnpark.png')} alt="FindNPark App" />
        <h2>FindNPark App</h2>
        <p>
          An Android app for finding parking nearby, developed using the Google Maps API and Android Studio. Allows users to search for parking based on their location and availability. This app helps drivers to save time and frustration when trying to find a parking spot, and can also help to reduce traffic congestion in busy areas.
        </p>
      </div>
      <div className="project">
        <img src={require('../images/bookquery.png')} alt="Book Query App" />
        <h2>Book Query App</h2>
        <p>
          A Python application that queries a database of books using an API. Allows users to search for books by title, author, or ISBN, and displays the results in a user-friendly interface. This app can be used by book lovers to discover new books and authors, or by students and researchers to find relevant literature for their studies.
        </p>
      </div>
      <div className="project">
        <img src={require('../images/savemotivations.png')} alt="SaveMotivations App" />
        <h2>SaveMotivations App</h2>
        <p>
          A web app developed using React, Firebase, and Bootstrap, which allows users to save their motivations and view the motivations of others. This app can be used as a tool for self-improvement and inspiration, as users can share their goals and motivations with a community of like-minded individuals.
        </p>
      </div>
    </div>
  );
};

export default Projects;

