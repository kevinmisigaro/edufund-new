import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/loaders/Loader";
import About from "../sections/About";
import Articles from "../sections/Articles";
import { Faqs } from "../sections/Faqs";
import Footer from "../sections/Footer";
import Gallery from "../sections/Gallery";
import PieChartFunctional from "../sections/Stats";
import Testimonials from "../sections/Testimonials";
import { TestimonialCard2 } from "../components/TestimonialCard";
import CustomCursor from "../components/CustomCursor";
import Team from "../sections/Team";
import ProfileCard from "../components/ProfileCard";
import Partners from "../components/Partners";
import VideoWidget from "../components/VideoWidget";
import { HowWeAreShapingEducation } from "../sections/HowWeAreShapingEducation";
import Banner from "../components/Banner";
function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3 * 1000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="bg-pattern-bricks text-white px-2">
          <Navbar />
          <About />
          <PieChartFunctional />
          <HowWeAreShapingEducation />
          <Articles />
          {/* <TestimonialCard2
            initialStars={3}
            name="Melissa Smith"
            message="I've been using XYZ for over a year now and their customer service is excellent! Whenever I have a question, the team is always available and willing to help. Highly recommend!"
            image="https://randomuser.me/api/portraits/women/2.jpg"
            position="Marketing Manager"
          /> */}
          <Team />
          {/* <ProfileCard/> */}
          {/* <Testimonials /> */}
          {/* <Gallery /> */}
          {/* <Form /> */}
          {/* <Form2 /> */}
          {/* <Partners /> */}
          {/* <Faqs /> */}
          {/* <DrawerDemo/> */}
          <Footer />
          <Banner/>
          <Toaster />
          <CustomCursor />
        </div>
      )}
    </>
  );
}

export default Home;
