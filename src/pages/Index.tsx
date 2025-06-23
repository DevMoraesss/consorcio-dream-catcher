
import Hero from "../components/Hero";
import WhatIsConsortium from "../components/WhatIsConsortium";
import Simulator from "../components/Simulator";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import LocationContact from "../components/LocationContact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhatIsConsortium />
      <Simulator />
      <Partners />
      <Testimonials />
      <HowItWorks />
      <LocationContact />
      <Footer />
    </div>
  );
};

export default Index;
