import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — Urban Saajh by Tej",
  description: "Explore the full spectrum of Urban Saajh by Tej luxury interior design services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </>
  );
}
