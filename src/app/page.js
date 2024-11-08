import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Image from "next/image";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFD0D0]   ">
      <NavBar />
      <div className='container mt-24  mx-auto px-12 py-4'>
        <HomePage />
        <AboutSection />
        <ProjectsSection />
      </div>

    </main>
  );
}


