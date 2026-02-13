import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Asha.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null); // Step 1: New state for page count

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Step 2: Callback function for when PDF is loaded
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* Add onLoadSuccess prop here */}
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="d-flex flex-column align-items-center">
            {/* Step 3: Map through all pages */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                scale={width > 786 ? 1.7 : 0.6} 
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
