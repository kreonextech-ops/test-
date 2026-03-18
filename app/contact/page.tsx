import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Urban Saajh by Tej",
  description: "Get in touch with Urban Saajh by Tej to begin your luxury interior design journey.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </>
  );
}
