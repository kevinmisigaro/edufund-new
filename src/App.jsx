import { Route, Routes } from "react-router-dom";
import Home from "../src/app/pages/Home";
import ApplyForScholarship from "./app/pages/ApplyForScholarship";
import Eligibility from "./app/pages/Eligibility";
import Scholarships from "./app/pages/Scholarships";
import Stories from "./app/pages/Stories";
import NotFound from "./app/pages/NotFound";
import { useEffect } from "react";
import Fundraiser from "./app/pages/Fundraiser";
import CustomCursor from "./app/components/CustomCursor";
import About from "./app/pages/About";
import Donation from "./app/pages/Donation";
import Reports from "./app/pages/Reports";
function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Routes className="bg-pattern">
        <Route path="/" element={<Home />} />
        <Route path="/Apply" element={<ApplyForScholarship />} />
        <Route path="/About" element={<About />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
      </Routes>
      <CustomCursor />
    </>
  );
}

export default App;
