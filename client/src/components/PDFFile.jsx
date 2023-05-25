import html2pdf from "html2pdf.js";
import React, { useEffect, useRef } from "react";
import { useUpdateResumeMutation } from "../feature/api";
import Template0 from "../templates/Template0";
import Template1 from "../templates/Template1";

function convertHtmlToPdf() {
  const element = document.getElementById("htmlContent");

  html2pdf().from(element).save("output.pdf");
}

function PDFFile({ resume, type }) {
  const htmlContentRef = useRef(null);

  useEffect(() => {
    const images = htmlContentRef.current.querySelectorAll("img");
    const imageLoadPromises = Array.from(images).map((img) => {
      return new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imageLoadPromises)
      .then(() => {
        // All images are loaded, now convert to PDF
        convertHtmlToPdf();
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, [convertHtmlToPdf]);

  return (
    <div>
      <div className="text-center">
        <button
          className="px-4 py-2 bg-indigo-700 text-white mb-5 "
          onClick={() => convertHtmlToPdf()}
        >
          Download
        </button>
      </div>

      <div id="htmlContent" className="" ref={htmlContentRef}>
        {type === "Creative" ? (
          <Template0 resume={resume} />
        ) : type === "Basic" ? (
          <Template1 resume={resume} />
        ) : (
          "NotFound"
        )}
      </div>
    </div>
  );
}

export default PDFFile;
