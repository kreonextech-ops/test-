import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import ProjectsPageContent from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects — Urban Saaj",
  description: "Completed and ongoing luxury interior design projects by Urban Saaj.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsPageContent />
      <Footer />
    </>
  );
}
