
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/project details/ScrollToTop";


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}