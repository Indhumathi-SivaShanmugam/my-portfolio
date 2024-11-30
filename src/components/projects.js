import React from 'react';
import "../styles/project.css";
function Projects() {
  const projectData = [
    {
      name: "CropCare AI - AI-Driven Crop Disease Management",
      description: "Built an AI system using TensorFlow (VGG16) and OpenCV for crop disease prediction through image analysis. Integrated a weather API and a farmer-friendly HTML/CSS/JavaScript frontend for actionable insights.",
      link: "https://github.com/Harinee2501/Cotton_cure"
    },
    {
      name: "SORTABOT - Mobile C&D Waste Processing Unit",
      description: "Proposed a mobile unit for sorting and recycling C&D waste using AI and IoT technologies. Powered by renewable energy, reducing transportation costs and promoting a circular economy.",
      link: "https://github.com/Harinee2501/Sortabot"
    },
    {
      name: "LPG Gas Sensing, Control, and Alert System",
      description: "Created an IoT system with an MQ-5 sensor to detect gas leaks, shut off supply, and alert users. Included a servo motor for automated safety measures and a manual override for user control.",
      link: "https://github.com/Harinee2501/LPG_Alert"
    },
    {
      name: "SpeedScan_OCR - Speed Violation and Number Plate Detection",
      description: "Developed a real-time system using YOLOv8 and PaddleOCR for speed violation detection. Integrated OpenCV for video processing and annotated frames with alerts for law enforcement.",
      link: "https://github.com/Harinee2501/SpeedScan_OCR"
    },
    {
      name: "Farm to Table - AI-Driven Crop and Market Analysis",
      description: "Built a system for season and crop prediction using Random Forest and geospatial analysis. Predicted crop prices and identified nearby users to enhance local connectivity and resource sharing.",
      link: "https://github.com/Harinee2501/farm-to-table-service"
    },
    {
      name: "Road Accident Severity Prediction",
      description: "Designed a machine learning system using Random Forest to predict accident severity. Utilized SMOTE for data balancing, providing insights to improve road safety.",
      link: "https://github.com/Harinee2501/AccidentPredictor"
    },
    {
      name: "WeatherWhirl - Your Personalized Weather Companion",
      description: "Created a React-based weather app with geolocation, real-time updates, and dynamic backgrounds. Integrated OpenWeatherMap and VisualCrossing APIs for accurate forecasts.",
      link: "https://github.com/Harinee2501/Weather_whirl"
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

