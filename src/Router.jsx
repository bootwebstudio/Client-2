import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import Manali from "./pages/packages/Manali";
import Goa from "./pages/packages/Goa";
import Nainital from "./pages/packages/Nainital";
import ShimlaManali from "./pages/packages/ShimlaManali";
import Shimla from "./pages/packages/Shimla";
import Kashmir from "./pages/packages/Kashmir";
import Uttarakhand from "./pages/packages/Uttarakhand";
import HaridwarRishikesh from "./pages/packages/HaridwarRishikesh";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policies" element={<PrivacyPolicies />} />
        <Route path="/packages/manali" element={<Manali />} />
        <Route path="/packages/goa" element={<Goa />} />
        <Route path="/packages/nainital" element={<Nainital />} />
        <Route path="/packages/shimla-manali" element={<ShimlaManali />} />
        <Route path="/packages/shimla" element={<Shimla />} />
        <Route path="/packages/kashmir" element={<Kashmir />} />
        <Route path="/packages/uttarakhand" element={<Uttarakhand />} />
        <Route
          path="/packages/haridwar-rishikesh"
          element={<HaridwarRishikesh />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return <BrowserRouter>{loading ? <Loader /> : <AppRoutes />}</BrowserRouter>;
};

export default AppRouter;
