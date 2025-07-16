"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nabout from "@/app/assets/nabout.png";
import CTASection from "../components/CTASection";
import "../globals.css";
import {
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineUsers,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import ReuseContact from "../components/ReuseContact";
import AboutTd from "../components/AboutTd";
import CultureSection from "../components/CultureSection";
import VisionSection from "../components/VisionSection";

const awards = [
  {
    icon: HiOutlineShieldCheck,
    title: "Integrity & Trust",
    description:
      "Recognized for consistently upholding strong ethical values and fostering a trustworthy environment where students, families, and staff feel safe, respected, and supported at every step of the educational journey.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Transparency",
    description:
      "Awarded for maintaining open lines of communication and accountability throughout our programs, policies, and decision-making processes, ensuring clarity and confidence among all stakeholders.",
  },
  {
    icon: HiOutlineUsers,
    title: "Teamwork",
    description:
      "Celebrated for building a culture of collaboration and mutual respect among educators, families, and community members, driving shared success and a supportive learning environment for every child.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation",
    description:
      "Honored for our forward-thinking approach in integrating modern tools, interactive methods, and creative curricula that elevate student engagement and foster adaptive thinking skills.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Accountability",
    description:
      "Recognized for our commitment to measurable outcomes, professional responsibility, and consistent follow-through that aligns with our mission and ensures long-term success for all learners.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Continuous Learning",
    description:
      "Presented for our dedication to lifelong learning, encouraging educators and students alike to pursue growth, embrace curiosity, and stay ahead in an ever-evolving educational landscape.",
  },
];

export default function about() {
  return (
    <>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${nabout.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="container "
          style={{
            // paddingTop: "80px",
            color: "white",
          }}
        >
          <h1 className="main-heading text-white">About Us</h1>

          <p
            className="lead text-white mt-2"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
            Driving startup growth with smart digital tools
            {/* <br />
            <span className="text-white">
              digital solutions tailored to accelerate their growth
            </span> */}
            {/* <br />
            <span className="text-white">
              We combine modern tech with human creativity
            </span>
            <br />
            <span className="text-white">
              to deliver solutions that drive real results
            </span> */}
          </p>
        </div>
      </div>
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div className="text-center mb-5">
            <div
              className="py-1 px-3 rounded-pill border d-inline-block mb-2"
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              Our Achievements
            </div>
            <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
              Our Awards and Recognitions
            </h2>
            <p
              className="text-muted"
              style={{ maxWidth: 800, margin: "0 auto" }}
            >
              Eazisols is a digital software house helping businesses build
              scalable, efficient, and user-first products. We combine modern
              tech with human creativity to deliver solutions that drive real
              results
            </p>
          </div>

          <Row className="gy-4">
            {awards.map((service, idx) => (
              <Col key={idx} md={3} lg={4}>
                <div
                  className="bg-white border rounded-4 shadow-sm p-4 w-100 h-100 d-flex flex-column align-items-start"
                  style={{
                    minHeight: 220,
                    borderColor: "#f0f0f0",
                    boxShadow: "0 2px 12px 0 rgba(16,30,54,.04)",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 28px 0 rgba(16,30,54,.15)";
                    e.currentTarget.style.borderColor = "#2563eb";
                    const icon = e.currentTarget.querySelector(".service-icon");
                    if (icon) {
                      icon.style.transform = "scale(1.1) rotate(5deg)";
                      icon.style.color = "#1d4ed8";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px 0 rgba(16,30,54,.04)";
                    e.currentTarget.style.borderColor = "#f0f0f0";
                    const icon = e.currentTarget.querySelector(".service-icon");
                    if (icon) {
                      icon.style.transform = "scale(1) rotate(0)";
                      icon.style.color = "#2563eb";
                    }
                  }}
                >
                  <div
                    className="mb-3 service-icon"
                    style={{ transition: "all 0.3s ease-in-out" }}
                  >
                    <service.icon size={44} color="#2563eb" />
                  </div>
                  <div>
                    <div
                      className="fw-bold mb-2"
                      style={{
                        fontSize: 22,
                        color: "#23223a",
                        transition: "background-position 0.3s ease-in-out",
                        padding: "4px 8px",
                        margin: "-4px -8px",
                      }}
                    >
                      {service.title}
                    </div>
                    <div
                      className="text-muted"
                      style={{
                        fontSize: 16,
                        lineHeight: 1.6,
                        marginTop: "8px",
                      }}
                    >
                      {service.description}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* <VisionSection />
      <CultureSection />
      <AboutTd /> */}
      <ReuseContact />
      <CTASection
        description1="Let's build something impactful together"
        description2="Quote Generator"
      />
    </>
  );
}
