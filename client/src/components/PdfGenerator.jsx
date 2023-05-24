import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Template0 from "../templates/Template0";
import Template1 from "../templates/Template1";
import PDFFile from "./PDFFile";

const PdfGenerator = ({ children }) => {
  const { type } = useParams();

  const generatePdfRef = useRef(null);
  const element = document.getElementById("template1");
  //   const resumeHtml = `
  //   <html>
  //     <head>
  //       <title>My Resume</title>
  //     </head>
  //     <body>
  //       <h1>My Name</h1>
  //       <p>My Address</p>
  //       <p>My Phone Number</p>
  //       <p>My Email Address</p>
  //       <p>My Skills</p>
  //       <p>My Experience</p>
  //     </body>
  //   </html>
  // `;

  // const generatePdf = async () => {
  //   console.log(generatePdfRef.current);
  //   const opt = {
  //     margin: [1, 0, 0, 0],
  //   };
  //   html2pdf().set(opt).from(generatePdfRef.current).save();

  //   const pdf = new jspdf();
  //   pdf.write(resumeHtml);
  //   pdf.save("my-resume.pdf");
  // };
  const resumeHtml = `
    <html>
      <head>
        <title>My Resume</title>
      </head>
      <body>
        <h1>My Name</h1>
        <p>My Address</p>
        <p>My Phone Number</p>
        <p>My Email Address</p>
        <p>My Skills</p>
        <p>My Experience</p>
      </body>
    </html>
  `;

  // const pdf = new jsPDF();
  // pdf.write(resumeHtml);
  // pdf.save("my-resume.pdf");
  return (
    <div>
      <PDFFile />
      <div>
        <a href="my-resume.pdf">Download PDF</a>
      </div>

      <div>
        {/* {children} */}
        {/* {type === "Creative" ? (
          <Template0 generatePdfRef={generatePdfRef} />
        ) : type === "Basic" ? (
          <Template1 generatePdfRef={generatePdfRef} />
        ) : (
          "NotFound"
        )} */}
      </div>
    </div>
  );
};

export default PdfGenerator;
