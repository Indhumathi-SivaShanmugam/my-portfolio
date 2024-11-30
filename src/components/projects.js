import React from 'react';
import "../styles/project.css";
function Projects() {
  const projectData = [
    {
      name: "CropCare AI - AI-Driven Crop Disease Management",
      description: "Built an AI system using TensorFlow (VGG16) and OpenCV for crop disease prediction through image analysis. Integrated a weather API and a farmer-friendly HTML/CSS/JavaScript frontend for actionable insights.",
      link: "https://github.com/Indhumathi-SivaShanmugam/Cotton_cure"
    },
    {
      name: "SORTABOT - Mobile C&D Waste Processing Unit",
      description: "Proposed a mobile unit for sorting and recycling C&D waste using AI and IoT technologies. Powered by renewable energy, reducing transportation costs and promoting a circular economy.",
      link: "https://github.com/Indhumathi-SivaShanmugam/Sortabot-Mobile-C-D-Waste-Segregation-Unit.git"
    },
    {
      name: " Bud-dy Care: Your Gardening Companion",
      description: "Bud-dy Care is your all-in-one smart gardening solution!Combining advanced hardware sensors with a user-friendly mobile app",
      link: "https://github.com/Indhumathi-SivaShanmugam/Bud-dy_Care-Your_Gardening_Companion"
    },
    {
      name: "SpeedScan_OCR - Speed Violation and Number Plate Detection",
      description: "Developed a real-time system using YOLOv8 and PaddleOCR for speed violation detection. Integrated OpenCV for video processing and annotated frames with alerts for law enforcement.",
      link: "https://github.com/Indhumathi-SivaShanmugam/SpeedScan_OCR"
    },
    {
      name: "Farm to Table - AI-Driven Crop and Market Analysis",
      description: "Built a system for season and crop prediction using Random Forest and geospatial analysis. Predicted crop prices and identified nearby users to enhance local connectivity and resource sharing.",
      link: "https://github.com/Indhumathi-SivaShanmugam/farm-to-table-service"
    },
    {
      name: "Helmet Lens- Helmet Compliance and Automated Fine System",
      description: "A smart, automated system is needed to detect helmetless riders, identify their vehicle's number plate, and issue fines efficiently to encourage compliance with traffic safety laws.",
      link: "https://github.com/Indhumathi-SivaShanmugam/Helmet_Lens"
    },
    {
      name: "AuthenTICK-Fake News Detection and Credibility Checker",
      description: "This extension will assist users in navigating the vast pool of online content while ensuring they consume verified and accurate information.",
      link: "https://github.com/Indhumathi-SivaShanmugam/AuthenTICK"
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

