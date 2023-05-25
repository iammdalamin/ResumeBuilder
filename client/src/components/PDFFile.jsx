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
  const [registration, result] = useUpdateResumeMutation();

  const htmlContentRef = useRef(null);

  useEffect(() => {
    // Perform any necessary setup or modifications before converting to PDF

    // Example: Wait for images to load
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
  }, []);
  const submitHandle = async (resume) => {
    console.log(resume);
    await registration(resume);
  };
  console.log(result);
  return (
    <div>
      <button
        className="px-4 py-2 bg-gray-700"
        onClick={() => submitHandle(resume)}
      >
        Save
      </button>
      <button
        className="px-4 py-2 bg-gray-700"
        onClick={() => convertHtmlToPdf()}
      >
        Download
      </button>
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
