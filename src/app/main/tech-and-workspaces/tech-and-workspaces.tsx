import "./tech-workspaces-global.css";
import stack from "@/app/config/stack";
import workspaces from "@/app/config/workspaces";
import Image from "next/image";

export default function TechAndWorkspaces() {
    return (
        <div className="grid-item" id="tech-and-workspaces">
            <div id="tech">
                <h2 className="header-colors">TECH STACK</h2>
                <div id="tech-icons">
                    {Object.values(stack).map((stackItem) => (
                        <Image
                        key={stackItem.name}
                        className="tech-icon"
                        alt={stackItem.name}
                        src={stackItem.icon}
                        width={48}
                        height={48}
                        />
                    ))}
                </div>
                <hr className="horizontal-line" />
            </div>
            <div id="workspaces">
                <h2 className="header-colors">WORKSPACES</h2>
                <div id="workspace-list">
                    {workspaces.map((workspace) => (
                        <a key={workspace.name} className="workspace" href={workspace.link} target="_blank">{workspace.name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}