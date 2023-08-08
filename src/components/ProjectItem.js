import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, skills }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="projectItem"
      // onClick={() => {
      //   navigate("/project/" + id);
      // }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      {isHovered && <div className="skills">{skills}</div>}
    </div>
  );
}

export default ProjectItem;
