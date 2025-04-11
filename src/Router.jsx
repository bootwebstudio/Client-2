import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

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
import Haridwar from "./pages/packages/Haridwar";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policies" element={<PrivacyPolicies />} />

        {/* Tour Package Routes */}
        <Route path="/packages/manali" element={<Manali />} />
        <Route path="/packages/goa" element={<Goa />} />
        <Route path="/packages/nainital" element={<Nainital />} />
        <Route path="/packages/shimla-manali" element={<ShimlaManali />} />
        <Route path="/packages/shimla" element={<Shimla />} />
        <Route path="/packages/kashmir" element={<Kashmir />} />
        <Route path="/packages/uttarakhand" element={<Uttarakhand />} />
        <Route path="/packages/haridwar" element={<Haridwar />} />

        {/* Catch-All Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
