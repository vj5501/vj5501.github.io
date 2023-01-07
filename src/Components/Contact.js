import React from 'react';
import '../CSS/Contact.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact">
        <img src={require('../images/github.png')} alt="GitHub" />
        <h2>GitHub</h2>
        <a href="https://github.com/vj5501">vj5501</a>
      </div>
      <div className="contact">
        <img src={require('../images/leetcode.png')} alt="LeetCode" />
        <h2>LeetCode</h2>
        <a href="https://leetcode.com/vj5501/">vj5501</a>
      </div>
      <div className="contact">
        <img src={require('../images/email.png')} alt="Email" />
        <h2>Email</h2>
        <a href="mailto:vishnujadhav5501@gmail.com">vishnujadhav5501@gmail.com</a>
      </div>
      <div className="contact">
        <img src={require('../images/linkedin.png')} alt="LinkedIn" />
        <h2>LinkedIn</h2>
        <a href="https://linkedin.com/in/vishnujadhav">vishnujadhav</a>
      </div>
      <div className="contact">
        <img src={require('../images/medium.png')} alt="Medium" />
        <h2>Medium</h2>
        <a href="https://medium.com/@vj5501">vj5501</a>
</div>
        <div className="contact">
        <img src={require('../images/instagram.png')} alt="Instagram" />
        <h2>Instagram</h2>
        <a href="https://instagram.com/vj_5501">vj_5501</a>
      </div>
      <div className="contact">
        <img src={require('../images/twitter.png')} alt="Twitter" />
        <h2>Twitter</h2>
        <a href="https://twitter.com/vj5501">vj5501</a>
      </div>
    </div>
  );
};

export default Contact;
