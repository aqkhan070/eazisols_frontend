"use client";
import React, { forwardRef, useState } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Box,
  Button,
  LinearProgress,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import useAPiAuth from "../components/useApiAuth";
import { useSnackbar } from "../components/Snakbar";
import PhoneInput from "react-phone-input-2";
import {
  FaGlobe,
  FaMobileAlt,
  FaCode,
  FaRobot,
  FaShoppingCart,
  FaPaintBrush,
  FaShieldAlt,
  FaQuestionCircle,
  FaHeartbeat,
  FaGraduationCap,
  FaTruck,
  FaUniversity,
  FaBriefcase,
  FaLightbulb,
  FaDraftingCompass,
  FaGlobeAmericas,
  FaChartLine,
  FaBolt,
  FaClock,
  FaCalendarAlt,
  FaRegEdit,
  FaMoneyBillWave,
  FaMoneyCheck,
  FaWallet,
  FaPuzzlePiece,
  FaPiggyBank,
} from "react-icons/fa";
import eazistransbg from "@/app/assets/eazistransbg.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const servicesList = [
  { id: 1, label: "Website", icon: <FaGlobe size={32} /> },
  { id: 2, label: "Mobile App", icon: <FaMobileAlt size={32} /> },
  { id: 3, label: "Custom Software", icon: <FaCode size={32} /> },
  { id: 4, label: "Automation", icon: <FaRobot size={32} /> },
  { id: 5, label: "E-commerce", icon: <FaShoppingCart size={32} /> },
  { id: 6, label: "Design (UI/UX)", icon: <FaPaintBrush size={32} /> },
  { id: 7, label: "QA / DevOps", icon: <FaShieldAlt size={32} /> },
  { id: 8, label: "Not Sure Yet", icon: <FaQuestionCircle size={32} /> },
];
const industryList = [
  { id: 1, label: "Healthcare", icon: <FaHeartbeat size={32} /> },
  { id: 2, label: "E-commerce", icon: <FaShoppingCart size={32} /> },
  { id: 3, label: "Fintech", icon: <FaUniversity size={32} /> },
  { id: 4, label: "Education", icon: <FaGraduationCap size={32} /> },
  { id: 5, label: "Logistics", icon: <FaTruck size={32} /> },
  { id: 6, label: "SaaS", icon: <FaBriefcase size={32} /> },
  { id: 7, label: "Other", icon: <FaPuzzlePiece size={32} /> },
];
const CostCalculateModal = ({
  open,
  onClose,
  title = "Cost Calculation",
  children,
}) => {
  const [step, setStep] = useState(0);
  const { postData, getData } = useAPiAuth();
  const { handleSnackbarOpen } = useSnackbar();
  const [formData, setFormData] = useState({
    services: [],
    industry: [],
    otherIndustry: "",
    stage: "",
    timeline: "",
    budget: "",
    description: "",
    fullName: "",
    email: "",
    company: "",
    phone: "",
    file: null,
  });
  console.log(formData);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    services: "",
    industry: "",
    stage: "",
    timeline: "",
    budget: "",
    description: "",
    fullName: "",
    email: "",
    file: "",
  });
  const handleNext = () => {
    let newErrors = {};
    let hasError = false;

    if (step === 0 && formData.services.length === 0) {
      newErrors.services = "Please select at least one service.";
      hasError = true;
    }
    if (step === 1 && formData.industry.length === 0) {
      newErrors.industry = "Please select your industry.";
      hasError = true;
    }

    if (step === 2 && !formData.stage) {
      newErrors.stage = "Please select your project stage.";
      hasError = true;
    }

    if (step === 3 && !formData.timeline) {
      newErrors.timeline = "Please select a timeline.";
      hasError = true;
    }

    if (step === 4 && !formData.budget) {
      newErrors.budget = "Please select a budget.";
      hasError = true;
    }

    if (step === 5 && !formData.description.trim()) {
      newErrors.description = "Please enter a project description.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      handleSnackbarOpen("Please complete the required fields.", "error");
      return;
    }

    setErrors({});
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleSubmit = async () => {
    const newErrors = {
      fullName: "",
      email: "",
      file: "",
    };

    let hasError = false;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address.";
        hasError = true;
      }
    }
    if (!formData.file) {
      newErrors.file = "File upload is required.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      handleSnackbarOpen("Please fill the required fields.", "error");
      return;
    }
    setErrors({});

    const form = new FormData();
    form.append("otherIndustry", formData.otherIndustry);
    form.append("stage", formData.stage);
    form.append("timeline", formData.timeline);
    form.append("budget", formData.budget);
    form.append("description", formData.description);
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("company", formData.company);
    form.append("phone", formData.phone);
    form.append("services", JSON.stringify(formData.services));
    form.append("industry", JSON.stringify(formData.industry));
    // form.append("services", formData.services);
    // form.append("industry", formData.industry);

    form.append("file", formData.file);

    postData(
      "/cost-calculator",
      form,
      (data) => {
        console.log("API Success:", data);
        handleSnackbarOpen("Form submitted successfully!", "success");
        setStep(step + 1);
      },
      (error) => {
        console.error("Api error:", error);
        handleSnackbarOpen("Something went wrong", "error");
      }
    );
    console.log(formData);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={eazistransbg.src}
          alt="Eazisols Logo"
          style={{
            height: "100px",
            width: "auto",
            display: "block",
            maxHeight: "80px",
          }}
        />
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <MdClose size={24} />
        </IconButton>
      </Toolbar>

      <Container fluid="md" style={{ maxWidth: "55%" }}>

        {/* 1st step */}
        {step === 0 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              What can we help you build?
            </h2>
            <p className="text-center text-muted mb-4">Select one service</p>

            <Row className="g-4 justify-content-center">
              {servicesList.map((item, idx) => {
                const isSelected = formData.services.includes(item.label);
                return (
                  <Col key={idx} xs={3} sm={4} md={3} lg={3}>
                    {/* <Col key={idx} xs={6} sm={6} md={3} lg={3}> */}
                    <div
                      className={` rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border" : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: isSelected ? "#d2e4f5" : "#ffffff",
                        
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          services: [item.label],
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </>
        )}

        {/* step 2 */}
        {step === 1 && (
          <>
            {/* ✅ New Step 2 Added */}
            <h2 className="text-center fw-bold mb-4">
              What industry are you in?
            </h2>
            <p className="text-center text-muted mb-4">Choose your industry</p>

            <Row className="g-4 justify-content-center">
              {industryList.map((item, idx) => {
                const isSelected = formData.industry.includes(item.label);
                return (
                  <Col key={idx} xs={6} sm={4} md={3} lg={3}>
                    <div
                      className={` rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border " : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: isSelected ? "#d2e4f5" : "#ffffff",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          industry: [item.label],
                          otherIndustry: "",
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>
            {formData.industry === "Other" && (
              <div className="mt-4 text-center">
                <input
                  type="text"
                  placeholder="Please specify your industry"
                  value={formData.otherIndustry}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherIndustry: e.target.value,
                    }))
                  }
                  className="form-control mx-auto"
                  style={{ maxWidth: 400 }}
                />
              </div>
            )}
          </>
        )}
        {/* 3rd step */}
        {step === 2 && (
          <>
            <h2 className="text-center fw-bold mb-4">What stage are you at?</h2>
            <p className="text-center text-muted mb-4">
              Choose the current state of your project
            </p>

            <Row className="g-4 justify-content-center">
              {[
                { label: "I have an idea", icon: <FaLightbulb size={32} /> },
                {
                  label: "I have wireframes / mockups",
                  icon: <FaDraftingCompass size={32} />,
                },
                {
                  label: "I have a live app / website",
                  icon: <FaGlobeAmericas size={32} />,
                },
                {
                  label: "I want to scale / improve an existing product",
                  icon: <FaChartLine size={32} />,
                },
              ].map((item, idx) => {
                const isSelected = formData.stage === item.label;
                return (
                  <Col key={idx} xs={6} sm={6} md={3} lg={3}>
                    <div
                      className={` rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border" : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: isSelected ? "#d2e4f5" : "#ffffff",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          stage: item.label,
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
        {/* 4th step */}
        {step === 3 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              What's your ideal timeline?
            </h2>
            <p className="text-center text-muted mb-4">
              Select an estimated project timeline
            </p>

            <Row className="g-4 justify-content-center">
              {[
                { label: "ASAP", icon: <FaBolt size={32} /> },
                { label: "1-2 months", icon: <FaClock size={32} /> },
                { label: "3-6 months", icon: <FaCalendarAlt size={32} /> },
                {
                  label: "Flexible / Not sure",
                  icon: <FaQuestionCircle size={32} />,
                },
              ].map((item, idx) => {
                const isSelected = formData.timeline === item.label;
                return (
                  <Col key={idx} xs={6} sm={6} md={3} lg={3}>
                    <div
                      className={` rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border " : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: isSelected ? "#d2e4f5" : "#ffffff",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          timeline: item.label,
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
        {/* 5th step */}
        {step === 4 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              What's your estimated budget?
            </h2>
            <p className="text-center text-muted mb-4">
              Select your approximate project budget
            </p>

            <Row className="g-4 justify-content-center">
              {[
                { label: "<$5K", icon: <FaMoneyBillWave size={32} /> },
                { label: "$5K-15K", icon: <FaMoneyCheck size={32} /> },
                { label: "$15K-30K", icon: <FaWallet size={32} /> },
                { label: "$30K+", icon: <FaPiggyBank size={32} /> },
                {
                  label: "I'm not sure yet",
                  icon: <FaQuestionCircle size={32} />,
                },
              ].map((item, idx) => {
                const isSelected = formData.budget === item.label;
                return (
                  <Col key={idx} xs={6} sm={6} md={3} lg={3}>
                    <div
                      className={` rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border " : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: isSelected ? "#d2e4f5" : "#ffffff",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          budget: item.label,
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
        {/* step 6 */}
        {step === 5 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              Tell us about your project
            </h2>
            <p className="text-center text-muted mb-4">
              A brief description of your idea, challenge, or goal.
            </p>

            <div className="d-flex justify-content-center">
              <textarea
                className="form-control"
                rows={6}
                placeholder="Share any relevant details about your project..."
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                style={{ maxWidth: 600 }}
              />
            </div>
          </>
        )}
        {/* step 7 */}
        {step === 6 && (
          <>
            <h2 className="text-center fw-bold mb-4">Your Contact Details</h2>
            <div
              className="mx-auto bg-white p-4 rounded-4 shadow-sm "
              style={{ maxWidth: 500, border: "1px solid 	#808080" }}
            >
              {/* Full Name */}
              <div className=" d-flex align-items-center border-bottom">
                <i className="bi bi-person-fill text-muted me-2"></i>
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Full Name"
                  value={formData.fullName || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              {errors.fullName && (
                <div className="text-danger small mb-2 ms-4">
                  {errors.fullName}
                </div>
              )}

              {/* Email */}
              <div className="mt-3 d-flex align-items-center border-bottom">
                <i className="bi bi-envelope-fill text-muted me-2"></i>
                <input
                  type="email"
                  className="form-control border-0 shadow-none"
                  placeholder="Email Address"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              {errors.email && (
                <div className="text-danger small mb-2 ms-4">
                  {errors.email}
                </div>
              )}

              {/* Company */}
              <div className="mt-3 d-flex align-items-center border-bottom">
                <i className="bi bi-building text-muted me-2"></i>
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Company (optional)"
                  value={formData.company || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Phone */}
              <div className="mt-3 d-flex align-items-center border-bottom ">
                <i className="bi bi-telephone-fill text-muted me-2"></i>
                <PhoneInput
                  country={"us"}
                  value={formData.phone || ""}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone }))
                  }
                  inputClass="custom-phone-input"
                  containerClass="custom-phone-container"
                  buttonClass="custom-phone-button"
                />
              </div>

              {/* File Upload */}
              <div className="mt-3 d-flex align-items-center border-bottom">
                <i className="bi bi-paperclip text-muted me-2"></i>
                <input
                  type="file"
                  className="form-control border-0 shadow-none"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      file: e.target.files[0],
                    }))
                  }
                />
              </div>
            </div>
          </>
        )}
        {/* Step 8 */}
        {step === 7 && (
          <div className="text-center py-5">
            <h1 className="fw-bold mb-3 pt-5">Thanks!</h1>
            <p className="text-muted mb-4 ">
              We'll get back to you within 1 business day <br />
              with a response tailored to your project.
            </p>
          </div>
        )}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            px: 3,
            pt: 2,
            pb: 3,
            zIndex: 1300,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={(step / 7) * 100}
            sx={{ height: 10, borderRadius: 5, mb: 2 }}
          />
          <Box className="d-flex justify-content-between mt-3">
            {step == 0 ? (
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{ paddingX: 4, paddingY: 1.5 }}
                startIcon={<IoIosArrowBack />}
              >
                Back
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ paddingX: 4, paddingY: 1.5 }}
                startIcon={<IoIosArrowBack />}
              >
                Back
              </Button>
            )}
            {step == 6 ? (
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                sx={{ px: 4, py: 1.5 }}
              >
                Submit
              </Button>
            ) : step == 7 ? (
              <Button
                variant="contained"
                // href="/about-us"
                onClick={onClose}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Explore Our Work
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ paddingX: 4, paddingY: 1.5 }}
                endIcon={<IoIosArrowForward />}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Dialog>
  );
};

export default CostCalculateModal;
