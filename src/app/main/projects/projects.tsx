import "./projects-globals.css";
import projects from "@/app/config/projects";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="projects">
            <div id="projects-header">
                <h2>PROJECTS</h2>
                <p>Highlights from My Creative Journey</p>
            </div>
            <div className="projects-display">

                {projects.filter((project) => project.title != "").map((project) => (
                    <div key={project.title} className={`${project.designDirection}-project-grid-item project-grid-item`}>
                        {project.previewImage !== ""
                            ? (
                                <div
                                    key={project.title + "-previewImage"}
                                    className="project-preview-image"
                                >
                                    <Image
                                        className="project-preview-image-bg"
                                        alt={project.title + " image"}
                                        src={project.previewImage}
                                        fill
                                    />
                                </div>
                            ) : (<></>)}
                        <h3>{project.title}</h3>
                        <p>{project.content}</p>
                        {project.stack.length !== 0 ? (
                            <div className="project-stack">
                                <h3>Toolset:</h3>
                                {project.stack.map((stackItem) => (
                                    <Image
                                        key={stackItem.name}
                                        className="project-stack-icon"
                                        alt={stackItem.name}
                                        src={stackItem.icon}
                                        width={32}
                                        height={32}
                                    />
                                ))}
                            </div>
                        ) : <></>}
                    </div>
                ))}

            </div>
        </div>
    )
}