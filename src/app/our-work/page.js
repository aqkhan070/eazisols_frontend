"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CTASection from "../components/CTASection";
import "../globals.css";
import {
  FaUsers,
  FaPaperPlane,
  FaPhoneAlt,
  FaHandshake,
} from "react-icons/fa";
const joinSteps = [
  {
    icon: FaPaperPlane,
    title: "Earthco",
    description:
      "Explore open roles that match your skills and ambitions — then send us your application.",
  },
  {
    icon: FaPhoneAlt,
    title: "IVest",
    description:
      "If there's a match, we'll connect through a quick call or task to understand your potential better.",
  },
  {
    icon: FaUsers,
    title: "Initio",
    description:
      "Join us for a conversation where we learn more about you — and you learn about life at Eazisols.",
  },
  {
    icon: FaHandshake,
    title: "MFG",
    description:
      "Once selected, we'll guide you through a smooth onboarding experience so you can hit the ground running.",
  },
];
export default function about() {
  return (
    <>
      <div
        className="hero-background py-5"
        style={{
          // backgroundImage: `url(${aboutus.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          marginTop: "-80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="container "
          style={{
            paddingTop: "80px",
            color: "white",
          }}
        >
        <h1 className="main-heading text-white">Our Work in Action</h1>
          
          <p
            className="lead text-white mt-3"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
            See how we've helped clients transform their vision into results
          </p>
        </div>
      </div>
<section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">Case Study</h2>
          <Row className="g-4">
            {joinSteps.map((step, idx) => (
              <Col key={idx} xs={12} sm={6} lg={3}>
                <div
                  className="tech-card bg-white rounded-4 shadow-sm p-4 h-100"
                  style={{
                    border: "1px solid #eee",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      color: "#2563eb",
                      marginBottom: "16px",
                    }}
                  >
                    <step.icon />
                  </div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                    {step.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <CTASection
        description1="Let's build something impactful together"
        description2="Quote Generator"
      />
    </>
  );
}
