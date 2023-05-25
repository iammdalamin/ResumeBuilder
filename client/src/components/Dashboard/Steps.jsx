import React from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import PdfGenerator from "../PdfGenerator";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import NavigationButtons from "./NavigationButtons";
import PersonalInput from "./PersonalInput";
import SkillsInput from "./SkillsInput";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import { useUpdateResumeMutation } from "../../feature/api";
import { useParams } from "react-router-dom";
import PreviewPage from "../../pages/DashboardPages/PreviewPage";
import Template0 from "../../templates/Template0";
import Template1 from "../../templates/Template1";
import LanguageInput from "./LanguageInput";
import PDFFile from "../PDFFile";

const Steps = () => {
  const resume = useSelector((state) => state.resume.value);

  const { type } = useParams();
  const [updateResume, { data, isLoading }] = useUpdateResumeMutation();
  console.log(resume);
  const page = useSelector((e) => e.page.value);
  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PersonalInput updateResume={updateResume} type={type} />;
      case 1:
        return <EducationInput updateResume={updateResume} type={type} />;
      case 2:
        return <ExperienceInput updateResume={updateResume} type={type} />;
      case 3:
        return <SkillsInput updateResume={updateResume} />;
      case 4:
        return <LanguageInput updateResume={updateResume} />;
      case 5:
        return (
          <>
            <PDFFile resume={resume} type={type} />
          </>
        );
    }
  };
  return (
    <DashboardLayout>
      <section className="p-10">
        <div className="container w-full h-auto mx-auto flex flex-col justify-center  items-center">
          {PageDisplay()}
          {page != 5 && <NavigationButtons type={type} />}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Steps;
