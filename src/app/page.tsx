import Nav from "./nav/nav";
import Main from "./main/main";

export default function Home() {
  return (
    <>
    <Nav />
    {Main()}
    </>
  );
}
