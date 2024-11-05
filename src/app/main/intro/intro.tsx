import Image from "next/image";
import "./intro-globals.css"
import { info } from "@/app/config/about";

export default function Intro() {
    return (
        <div id="intro">
            <div id="intro-avatar-div">
                <Image
                    id="intro-avatar"
                    src={info.avatar}
                    alt="Cole's Avatar"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    priority
                />
            </div>
            <hr className="vertical-line" />
            <div id="intro-description">
                <h2 id="intro-description-header">{info.descriptionHeader}</h2>
                <p id="intro-description-body">{info.descriptionBody}</p>
            </div>
        </div>
    )
}