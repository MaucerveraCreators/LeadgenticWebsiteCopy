import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "@/app/components/Header";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { Home } from "@/app/pages/Home";
import { SeoService } from "@/app/pages/SeoService";
import { CrmAutomation } from "@/app/pages/CrmAutomation";
import { WebDesign } from "@/app/pages/WebDesign";
import { PaidAds } from "@/app/pages/PaidAds";
import { BookGrowth } from "@/app/pages/BookGrowth";
import { AutoGlass } from "@/app/pages/AutoGlass";
import { AutoStyling } from "@/app/pages/AutoStyling";
import { Dentists } from "@/app/pages/Dentists";
import { HomeServices } from "@/app/pages/HomeServices";
import { IVTherapy } from "@/app/pages/IVTherapy";
import { Mechanics } from "@/app/pages/Mechanics";
import { Niches } from "@/app/pages/Niches";
import { CaseStudies } from "@/app/pages/CaseStudies";
import { BiofuseCaseStudy } from "@/app/pages/BiofuseCaseStudy";
import { EuroluxeCaseStudy } from "@/app/pages/EuroluxeCaseStudy";
import { CarsRenewedCaseStudy } from "@/app/pages/CarsRenewedCaseStudy";
import { AutoClinicCaseStudy } from "@/app/pages/AutoClinicCaseStudy";
import { DMETuningCaseStudy } from "@/app/pages/DMETuningCaseStudy";
import { EyeKandyCaseStudy } from "@/app/pages/EyeKandyCaseStudy";
import { HappyCasaCaseStudy } from "@/app/pages/HappyCasaCaseStudy";
import { HonoluluExoticsCaseStudy } from "@/app/pages/HonoluluExoticsCaseStudy";
import { NaplesCeramicCaseStudy } from "@/app/pages/NaplesCeramicCaseStudy";
import { NunezCustomsCaseStudy } from "@/app/pages/NunezCustomsCaseStudy";
import { PhoneAnimalCaseStudy } from "@/app/pages/PhoneAnimalCaseStudy";
import { RoyalAutoFinishesCaseStudy } from "@/app/pages/RoyalAutoFinishesCaseStudy";
import { TermsAndConditions } from "@/app/pages/TermsAndConditions";
import { PrivacyPolicy } from "@/app/pages/PrivacyPolicy";
import { About } from "@/app/pages/About";
import { NotFound } from "@/app/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <style>{`
          body {
            overflow-x: hidden;
          }
        `}</style>
        
        <ScrollToTop />
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seo" element={<SeoService />} />
          <Route path="/crm-automation" element={<CrmAutomation />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/paid-ads" element={<PaidAds />} />
          <Route path="/book-growth" element={<BookGrowth />} />
          <Route path="/auto-glass" element={<AutoGlass />} />
          <Route path="/auto-styling" element={<AutoStyling />} />
          <Route path="/dentists" element={<Dentists />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/iv-therapy" element={<IVTherapy />} />
          <Route path="/mechanics" element={<Mechanics />} />
          <Route path="/niches" element={<Niches />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/biofuse-case-study" element={<BiofuseCaseStudy />} />
          <Route path="/euroluxe-case-study" element={<EuroluxeCaseStudy />} />
          <Route path="/cars-renewed-case-study" element={<CarsRenewedCaseStudy />} />
          <Route path="/auto-clinic-case-study" element={<AutoClinicCaseStudy />} />
          <Route path="/dme-tuning-case-study" element={<DMETuningCaseStudy />} />
          <Route path="/eye-kandy-case-study" element={<EyeKandyCaseStudy />} />
          <Route path="/happy-casa-case-study" element={<HappyCasaCaseStudy />} />
          <Route path="/honolulu-exotics-case-study" element={<HonoluluExoticsCaseStudy />} />
          <Route path="/naples-ceramic-case-study" element={<NaplesCeramicCaseStudy />} />
          <Route path="/nunez-customs-case-study" element={<NunezCustomsCaseStudy />} />
          <Route path="/phone-animal-case-study" element={<PhoneAnimalCaseStudy />} />
          <Route path="/royal-auto-finishes-case-study" element={<RoyalAutoFinishesCaseStudy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          {/* 404 Catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}