import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import Hero from "./components/Hero";
import KeyStages from "./components/KeyStages";
import Displays from "./components/Displays";
import Footer from "./components/Footer";
import ComplaintForm from "./components/ComplaintForm";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="lg:p-8">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
        <KeyStages />
        <Displays />
        <Faq />
        <ComplaintForm />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
