import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Image from "next/image";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";


 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#EFEFE9]   ">
      <NavBar />
      <div className='container mt-24  mx-auto px-12 py-4'>
        <HomePage />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>

    </main>
  );
}


