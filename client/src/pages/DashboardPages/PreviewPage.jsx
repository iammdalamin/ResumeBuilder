import React from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import PdfGenerator from "../../components/PdfGenerator";
import Template0 from "../../templates/Template0";
import Template1 from "../../templates/Template1";

const PreviewPage = () => {
  const { type } = useParams();
  return (
    <DashboardLayout>
      <PdfGenerator>
        {type === "Creative" ? (
          <Template0 />
        ) : type === "Basic" ? (
          <Template1 />
        ) : (
          "NotFound"
        )}
      </PdfGenerator>
    </DashboardLayout>
  );
};

export default PreviewPage;
