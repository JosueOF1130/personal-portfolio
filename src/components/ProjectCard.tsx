import { Link } from "react-router-dom";
import ArrowRight from "../components/icons/ArrowRight";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onMouseEnter: (e: React.MouseEvent<HTMLLIElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export default function ProjectCard({
  project,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  return (
    <li
      className={`card ${project.cardClass}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={`/projects/${project.slug}`} className="project-link">
        <div className="body">
          <div className="header">
            <h2>{project.name}</h2>
            <div className="tags">
              {project.tags.map((tag) => (
                <p key={tag.label} className={`tag ${tag.className}`}>
                  {tag.label}
                </p>
              ))}
            </div>
          </div>
          <div className="content">
            <p>{project.description}</p>
          </div>
          <div className="footer">
            <span>
              View project <ArrowRight />
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}