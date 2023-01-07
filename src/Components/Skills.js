import React from 'react';
import '../CSS/Skills.css';

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <div className="skill">
        <img src={require('../images/html.png')} alt="HTML" />
        <h2>HTML</h2>
      </div>
      <div className="skill">
        <img src={require('../images/css.png')} alt="CSS" />
        <h2>CSS</h2>
      </div>
      <div className="skill">
        <img src={require('../images/javascript.png')} alt="JavaScript" />
        <h2>JavaScript</h2>
      </div>
      <div className="skill">
        <img src={require('../images/python.png')} alt="Python" />
        <h2>Python</h2>
      </div>
      <div className="skill">
        <img src={require('../images/react.png')} alt="React" />
        <h2>React</h2>
      </div>
      <div className="skill">
        <img src={require('../images/firebase.png')} alt="Firebase" />
        <h2>Firebase</h2>
      </div>
      <div className="skill">
        <img src={require('../images/bootstrap.png')} alt="Bootstrap" />
        <h2>Bootstrap</h2>
      </div>
      <div className="skill">
        <img src={require('../images/android.png')} alt="Android" />
        <h2>Android</h2>
      </div>
    </div>
  );
};

export default Skills;
