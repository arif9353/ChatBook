import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import TextPage from "./pages/TextPage";
import AudioPage from "./pages/AudioPage";
import Navbar from "./components/Navbar";
import VivaPage from "./pages/VivaPage";
import SummaryPage from "./pages/SummaryPage";
import AuthenticatedWrapper from "./AuthenticatedWrapper"; // adjust the import path as needed
import PreMain from "./pages/PreMain";
import Audiopage2 from "./pages/Audiopage2";
import Home2 from "./pages/Home2";
import McqPage from "./pages/McqPage";
import UrlPage from "./pages/UrlPage";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/main" element={<AuthenticatedWrapper>
                <MainPage />
              </AuthenticatedWrapper>} />
          <Route path="/" element={<Home2 />} />
          <Route path="/text" element={<AuthenticatedWrapper><TextPage /></AuthenticatedWrapper>} />
          <Route path="/audio" element={<AuthenticatedWrapper><AudioPage /></AuthenticatedWrapper>} />
          <Route path="/viva" element={<AuthenticatedWrapper><VivaPage /></AuthenticatedWrapper> } />
          <Route path="/summary" element={<AuthenticatedWrapper><SummaryPage/></AuthenticatedWrapper> } />
          <Route path="/premain" element={<AuthenticatedWrapper><PreMain /></AuthenticatedWrapper> } />
          <Route path="/audio2" element={<AuthenticatedWrapper><Audiopage2 /></AuthenticatedWrapper> } />
          <Route path="/home2" element={<AuthenticatedWrapper><Home2 /></AuthenticatedWrapper> } />
          <Route path="/mcq" element={<AuthenticatedWrapper><McqPage /></AuthenticatedWrapper> } />
          <Route path="/url" element={<AuthenticatedWrapper><UrlPage/> </AuthenticatedWrapper> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;