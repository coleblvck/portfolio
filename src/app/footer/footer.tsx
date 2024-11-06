import "./footer-globals.css";
import { info } from "../config/about";

export default function Footer() {
    return (
        <footer>
            <div>&copy; {new Date().getFullYear()}, <a className="footer-link" href={info.footerLink} target="_blank">{info.name}</a>.
            </div>
            <div>Designed by <a className="footer-link" id="designer-attribution" href="https://dayo.codes" target="_blank">dayo.codes</a>.
            </div>    
        </footer>
    )
}