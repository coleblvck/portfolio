import Image from "next/image";
import "./intro-globals.css"
import { intro } from "@/app/config/about";

export default function Intro() {
    return (
        <div id="intro">
            <div id="intro-avatar-div">
                <Image
                    id="intro-avatar"
                    src={intro.avatar}
                    alt="Next.js logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    priority
                />
            </div>
            <hr className="vertical-line" />
            <div id="intro-description">
                <h2 id="intro-description-header">{intro.descriptionHeader}</h2>
                <p id="intro-description-body">{intro.descriptionBody}</p>
            </div>
        </div>
    )
}