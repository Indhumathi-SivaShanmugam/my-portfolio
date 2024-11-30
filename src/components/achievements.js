import React from 'react';
import "../styles/achievements.css";

function Achievements() {
  return (
    <section className="achievements">
      <h2>Achievements & Certifications</h2>
      
      <h3>Achievements</h3>
      <ul>
        <li><strong>Envithon Winner:</strong> Created an AI-driven crop disease prediction system using TensorFlow (VGG16) and OpenCV.</li>
        <li><strong>SheFi Scholar:</strong> Awarded a full scholarship for academic and extracurricular excellence.</li>
      
      </ul>

      <h3>Certifications</h3>
      <ul>
        <li><strong>Artificial Intelligence and Machine Learning:</strong> Remarkskill Education</li>
        <li><strong>Postman API Fundamentals Student Expert:</strong> Remarkskill Education</li>
        <li><strong>Web Development:</strong> Remarkskill Education</li>
      </ul>
    </section>
  );
}

export default Achievements;

