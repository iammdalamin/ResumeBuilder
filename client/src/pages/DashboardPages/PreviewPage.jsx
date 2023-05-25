import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import PdfGenerator from "../../components/PdfGenerator";
import { useCreateResumeMutation } from "../../feature/api";
import Template0 from "../../templates/Template0";
import Template1 from "../../templates/Template1";

const PreviewPage = ({ resume }) => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [createResume, { data, isLoading }] = useCreateResumeMutation();
  console.log(resume);
  useEffect(() => {
    createResume(type);
  }, []);

  if (data?.data.length > 0) {
    navigate(`/dashboard/${type}`);
  }
  console.log(data);
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
