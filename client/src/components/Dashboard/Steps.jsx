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

const Steps = () => {
  const page = useSelector((e) => e.page.value);
  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PersonalInput />;
      case 1:
        return <EducationInput />;
      case 2:
        return <ExperienceInput />;
      case 3:
        return <SkillsInput />;
      case 4:
        return (
          <PDFViewer>
            <MyDocument />
          </PDFViewer>
        );
    }
  };
  return (
    <DashboardLayout>
      <section className="p-10">
        <div className="container w-full h-auto mx-auto flex flex-col justify-center  items-center">
          {PageDisplay()}
          {page != 4 && <NavigationButtons />}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Steps;
