import React from 'react';
import './Home.css';
import profileImage from './assets/photo.webp'; // if in src/assets

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <img src={profileImage} alt="My Profile" className="home-img" />
      <div className='home-box1'>
        Welcome to my personal portfolio website! I'm a BCA student and aspiring full-stack web developer.
        I enjoy turning ideas into beautiful, functional, and responsive websites.
      </div>
      <div className='home-box2'>
        I have a strong passion for front-end development using React.js, and I love solving coding challenges to improve my skills.
      </div>
      <div className='home-box3'>
        Feel free to explore my work, learn more about me, and get in touch through the contact page.
      </div>
    </div>
  );
}

