import React from 'react';
import "../styles/skills.css";
function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Programming Languages</strong></td>
            <td>Python, C, Java, MySQL</td>
          </tr>
          <tr>
            <td><strong>Web Development</strong></td>
            <td>HTML, CSS, JavaScript, React.js, Node.js, Express.js, Django, Flask</td>
          </tr>
          <tr>
            <td><strong>Tools</strong></td>
            <td>VS Code, Google Colab, GitHub, SQL Workbech, Eclipse</td>
          </tr>
          <tr>
            <td><strong>Libraries</strong></td>
            <td>Scikit-Learn, Pandas, NumPy, Matplotlib, PyTorch, Keras, Ultralytics, TensorFlow, OpenCV</td>
          </tr>
          <tr>
            <td><strong>Predictive Modeling</strong></td>
            <td>Regression, Classification, Clustering, Augmentation</td>
          </tr>
          <tr>
            <td><strong>Deep Learning</strong></td>
            <td>Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Transfer Learning, Data Preprocessing & Augmentation, Model Optimization</td>
          </tr>
          <tr>
            <td><strong>Soft Skills</strong></td>
            <td>Critical Thinking, Team Leadership & Coordination, Problem Solving, Communication Skills</td>
          </tr>
          <tr>
            <td><strong>APIs</strong></td>
            <td>OpenWeatherMap API, Google Maps API, REST APIs, GraphQL, TensorFlow.js</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Skills;


