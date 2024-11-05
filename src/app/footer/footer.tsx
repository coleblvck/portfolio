import "./footer-globals.css";
import { info } from "../config/about";

export default function Footer() {
    return (
        <footer>&copy; {new Date().getFullYear()}, <a href={info.footerLink} target="_blank">{info.name}</a>.    
        </footer>
    )
}