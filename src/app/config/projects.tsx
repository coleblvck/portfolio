import stack from "./stack";

const projects = [
    {
        title: "",
        content: <></>,
        previewImage: "",
        stack: [],
        designDirection: "straight",
    },
    {
        title: "Pip Compass",
        content: <><a className="project-link" href="https://pipcompass.artatura.com" target="_blank">A currency pair live analysis tool</a> built with Python. This application uses yfinance for real-time currency pair data. It features an interactive interface with Streamlit and employs Pandas and NumPy for data manipulation. Dynamic visualizations, including 3D scatter plots, effectively showcase both live and historical data.</>,
        previewImage: "/assets/project-previews/pip-compass.png",
        stack: [stack.python, stack.vscode, stack.git],
        designDirection: "left",
    },
    {
        title: "AntiiQ",
        content: <><a className="project-link" href="https://github.com/coleblvck/AntiiQ" target="_blank">AntiiQ is an open-source music player</a> developed using Flutter, designed to efficiently manage large music libraries without compromising performance while offering extensive user customization options. <a className="project-link" href="https://apt.izzysoft.de/fdroid/index/apk/com.coleblvck.antiiq" target="_blank">Get it from the IzzyonDroid F-Droid repo.</a></>,
        previewImage: "/assets/project-previews/antiiq.png",
        stack: [stack.dart, stack.flutter, stack.vscode, stack.android, stack.git],
        designDirection: "straight",
    },
    {
        title: "Float",
        content: <>A 3D interplanetary space simulator developed with Godot engine.
        <br />
        <br />
        <b>Features include:</b> Exploring various planets and celestial bodies, interactive gameplay elements.
        <br />
        <br />
        <b>Planned Features:</b> Multiplayer; allowing realtime exploration with friends, a bunch of other features.
        <br />
        <br />
        <a className="project-link" href="https://vimeo.com/1020402007" target="_blank">Unprofessional and laggy video preview...</a></>,
        previewImage: "/assets/project-previews/float.png",
        stack: [stack.godot, stack.vscode, stack.git],
        designDirection: "right",
    },
    {
        title: "Shelf/Shelf Slim",
        content: <><a className="project-link" href="https://github.com/coleblvck/shelf" target="_blank">A straightforward Android app launcher</a> that utilizes intuitive gestures and includes productivity features, allowing for subtle customization by users. This project has two variants: one developed using Flutter and the other utilizing <a className="project-link" href="https://github.com/coleblvck/Shelf-Slim" target="_blank">Kotlin with Jetpack Compose</a>.</>,
        previewImage: "/assets/project-previews/shelf.png",
        stack: [stack.dart, stack.flutter, stack.kotlin, stack.android, stack.androidStudio, stack.git],
        designDirection: "straight",
    },
    {
        title: "Paragraph Web",
        content: <><a className="project-link" href="https://gitlab.com/writing-and-texting/Paragraph" target="_blank">Real-time texting</a> built with Python (Django), Graphql, Fetch-api, and styled with some vanilla HTML and CSS.</>,
        previewImage: "",
        stack: [stack.python, stack.django, stack.graphql, stack.dart, stack.javascript],
        designDirection: "left",
    },
    {
        title: "Paragraph for Android",
        content: <><a className="project-link" href="https://github.com/coleblvck/paragraph-for-android" target="_blank">Android app for Paragraph</a>, designed and developed with Flutter.</>,
        previewImage: "/assets/project-previews/paragraph-android.png",
        stack: [stack.dart, stack.flutter],
        designDirection: "straight",
    },
    {
        title: "Tribute (CSS Timelines)",
        content: <>A <a className="project-link" href="https://codepen.io/coleblvck/full/vYLKbLV" target="_blank">nice showcase of vertical CSS timelines</a>, designed with accessibility in mind.</>,
        previewImage: "/assets/project-previews/tribute-timelines.png",
        stack: [stack.html, stack.css, stack.javascript],
        designDirection: "right",
    },
    {
        title: "JavaScript Drum Kit",
        content: <><a className="project-link" href="https://coleblvck.github.io/Javascript-Drum-Kit" target="_blank">A Javascript desktop drum kit.</a> Developed for desktop and can be played with keys: A - L.</>,
        previewImage: "",
        stack: [stack.html, stack.css, stack.javascript],
        designDirection: "straight",
    },
    {
        title: "New Project",
        content: <>You can <a className="project-link" href="mailto:cole@artatura.com" target="_blank">contact me here</a> so we can append a cool project to this page.</>,
        previewImage: "",
        stack: [],
        designDirection: "left",
    }
];

export default projects;