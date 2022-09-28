import Head from "next/head";
import Contact from "../components/Contact";
import Intro from "../components/intro";
import ProjectList from "../components/ProjectList";
import Skills from "../components/skills";

function Home() {
  return (
    <div className="App">
      <Head>
        <title>My Portfolio Website</title>
        <meta name="description"  content="Portfolio Web site created using create next app" />
      </Head>
      <Intro />
      <Skills />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default Home;
