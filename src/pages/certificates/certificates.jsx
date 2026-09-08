import React, { useState } from "react";

import javaScript from "../../assets/certificates/image.png";
import Data from "../../assets/certificates/Data.jpg";
import java from "../../assets/certificates/Java.jpg";
import Nebosh from "../../assets/certificates/Nebosh_Certificate_page-0001.jpg";
import IOSHMS from "../../assets/certificates/IOSH_Certificate_page-0001.jpg";
import TofelFrontPage from "../../assets/certificates/TofelFront.jpg";
import TofelBackPage from "../../assets/certificates/TofelBack.jpg";
import python from "../../assets/certificates/Python.jpg";
import SQL from "../../assets/certificates/SQL.jpg";
import Network from "../../assets/certificates/Network.jpg";
import AWS from "../../assets/certificates/AWS.jpg";


const Certificates = () => {
  // State to store the image URL that is currently clicked and open in the modal
  const [selectedImage, setSelectedImage] = useState(null);

  const techCertificates = [
    { id: 1, title: "Java Backend with SpringBoot Certification", issuer: "GeeksforGeeks", images: [java] },
    { id: 2, title: "Data Analysis", issuer: "Meta", images: [Data] },
    { id: 3, title: "JavaScript Certification", issuer: "Udemy", images: [javaScript] },
    { id: 4, title: "Python Certification", issuer: "Infosys Springboard", images: [python] },
    { id: 5, title: "Sql Certification", issuer: "Infosys Springboard", images: [SQL] },
    { id: 6, title: "Fundumental of Network Communication", issuer: "Coursera", images: [Network] },
    { id: 7, title: "Cloud Practitinor ", issuer: "AWS", images: [AWS] },
  ];

  const safetyCertificates = [
    { id: 1, title: "Nebosh certificate", issuer: "Nebosh UK", images: [Nebosh] },
    { id: 2, title: "IOSH Certificate", issuer: "IOSH", images: [IOSHMS] },
  ];

  const englishProficiency = [
    { id: 1, title: "TOEFL iBT", issuer: "ETS", images: [TofelFrontPage, TofelBackPage] },
  ];

  // Reusable card element
  const CertificateCard = ({ cert }) => (
    <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-700 bg-[#1c1c1c] transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
      {/* Clickable Image Container */}
      <div
        className={`grid aspect-video overflow-hidden bg-slate-900 ${
          cert.images.length > 1 ? "grid-cols-2 gap-1" : "grid-cols-1"
        }`}
      >
        {cert.images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${cert.title} page ${index + 1}`}
            onClick={() => setSelectedImage(imgSrc)} // Opens the clicked image in the modal
            className="h-full w-full object-cover cursor-zoom-in transition duration-300 hover:scale-105"
          />
        ))}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{cert.title}</h3>
        <p className="mt-2 text-sm text-slate-400">Issued by: {cert.issuer}</p>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white relative">
      <h1 className="mb-16 text-center text-4xl font-bold tracking-tight">
        Certifications & Qualifications
      </h1>

      <div className="mx-auto max-w-6xl space-y-16">
        {/* SECTION 1: SOFTWARE DEVELOPMENT */}
        <div>
          <h2 className="mb-6 border-b border-slate-800 pb-2 text-2xl font-bold text-cyan-400">
            Software Development
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techCertificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>

        {/* SECTION 2: HEALTH & SAFETY */}
        <div>
          <h2 className="mb-6 border-b border-slate-800 pb-2 text-2xl font-bold text-emerald-400">
            Health & Safety
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safetyCertificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>

        {/* SECTION 3: ENGLISH PROFICIENCY */}
        <div>
          <h2 className="mb-6 border-b border-slate-800 pb-2 text-2xl font-bold text-amber-400">
            Language Proficiency
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {englishProficiency.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL OVERLAY */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)} // Closes modal when clicking anywhere on the dark background
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-slate-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          
          {/* Main Full-Size Image */}
          <img 
            src={selectedImage} 
            alt="Enlarged certificate view" 
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
