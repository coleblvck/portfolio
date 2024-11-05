import Intro from "./intro/intro";
import TechAndWorkspaces from "./tech-and-workspaces/tech-and-workspaces";
import Projects from "./projects/projects";
import "./main-globals.css";

export default function Main() {
    return (
        <main id="main">
            { Intro() }
            <div className="main-content">
                { TechAndWorkspaces() }
                { Projects() }
            </div>
        </main>
    )
}