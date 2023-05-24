import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import EducationInput from "./components/Dashboard/EducationInput";
import ExperienceInput from "./components/Dashboard/ExperienceInput";
import PersonalInput from "./components/Dashboard/PersonalInput";
import SkillsInput from "./components/Dashboard/SkillsInput";
import Steps from "./components/Dashboard/Steps";
import PreviewPage from "./pages/DashboardPages/PreviewPage";
import ResumeCreate from "./pages/DashboardPages/ResumeCreate";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ResumePage from "./pages/ResumePage";
import SignUpPage from "./pages/SignUpPage";
import Template0 from "./templates/Template0";
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-templates" element={<ResumePage />} />

        <Route path="/registration" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Template0" element={<Template0 />} />
        <Route path="/dashboard" element={<ResumeCreate />} />
        <Route path="/dashboard/:type" element={<PreviewPage />} />
        <Route path="/dashboard/skills" element={<SkillsInput />} />
        <Route path="/dashboard/personal-info" element={<PersonalInput />} />
        <Route path="/dashboard/education" element={<EducationInput />} />
        <Route path="/dashboard/experience" element={<ExperienceInput />} />
        <Route path="/dashboard/resume/create" element={<Steps />} />

        {/* UnknownRoutes */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
