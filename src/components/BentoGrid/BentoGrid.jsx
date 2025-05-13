import React from "react";
import "./BentoGrid.scss";

const BentoGrid = ({ projects }) => {
  return (
    <div className="bento-grid">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`bento-item ${project.size || "default"}`}
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        >
          <div className="bento-overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="bento-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
