"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import bg5 from "@/app/assets/bg5.jpg";
import { useRouter } from "next/navigation";
import CostCalculateModal from "./CostCalculator";
import proo from "@/app/assets/proo.jpg";


export default function CTASection({ description1, description2 }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CostCalculateModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Dynamic Modal Title"
      > </CostCalculateModal>
      <Box
        sx={{
          marginTop: "40px",
          position: "relative",
          width: "100%",
          height: "200px",
          backgroundImage: `url(${proo.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            // zIndex: 1,
          }}
        />
        <Box
          // className="d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start gap-3 px-3 px-md-4"
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Typography
            sx={{
              fontFamily: `'Segoe UI', 'Helvetica Neue', Arial, sans-serif`,
              fontWeight: 800,
              fontSize: { xs: "24px", md: "36px" },
              color: "white",
              lineHeight: 1.2,
              marginBottom: 2,
            }}
          >
            {description1}
          </Typography>

          <Button
            // variant="primary"
            size="lg"
            style={{
              backgroundColor: "#418ED6",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              color: "#fff",
              padding: "12px 20px",
            }}
            // onClick={() => router.push("/quote")}
            onClick={() => setOpenModal(true)}
          >
            {description2}
          </Button>
        </Box>
      </Box>
    </>
  );
}
