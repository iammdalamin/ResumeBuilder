import html2pdf from "html2pdf.js";
import React, { useEffect, useRef } from "react";
import Template0 from "../templates/Template0";
import Template1 from "../templates/Template1";

function convertHtmlToPdf() {
  const element = document.getElementById("htmlContent");

  html2pdf().from(element).save("output.pdf");
}

function PDFFile() {
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

  return (
    <div>
      <button onClick={convertHtmlToPdf}>Convert to PDF</button>
      <div id="htmlContent" className="" ref={htmlContentRef}>
        <Template0 />
        {/* Add your HTML content with proper styling and structure */}
      </div>
    </div>
  );
}

export default PDFFile;
