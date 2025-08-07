"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import useApiAuth from "@/app/components/useApiAuth";
import axios from "axios";
import ReuseContact from "@/app/components/ReuseContact";

export default function blogsDetail() {
  const { id } = useParams();
  const blogId = Array.isArray(id) ? id[0] : id;

  const router = useRouter();
  const { getData } = useApiAuth();
  const [blogs, setblogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!blogId) return;
    getData(
      `/api/blogs/${blogId}`,
      (res) => {
        const blogsObj = res?.data?.data || res?.data || res;
        setblogs(blogsObj);
        setLoading(false);
      },
      (err) => {
        console.log(" ~ useEffect ~ err:", err);
        setLoading(false);
      }
    );
  }, [blogId]);

  if (loading)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <span className="loader" />
      </Container>
    );

  if (!blogs)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          blogs not found
        </Typography>
        <Button onClick={() => router.back()}>Back</Button>
      </Container>
    );

  return (
    <>
      {/* <div
      style={{
              backgroundImage: `url(${blogs.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              overflow: "visible",
              position: "relative",
              }}
     >
    </div> */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "400px", md: "500px" },
          backgroundImage: `url(https://admin.eazisols.com/${blogs.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          px: 2,
        }}
      >
        <Box
          // sx={{
          //   maxWidth: "900px",
          //   width: "100%",
          //   // background: "rgba(0,0,0,0.5)",
          //   background: "#418ED6",
          //   padding: { xs: 3, md: 5 },
          //   borderRadius: 2,
          // }}
          className="about-overlay-box"
          style={{
            position: "absolute",
            top: "280px",
            left: "110px",
            width: "600px",
            height: "270px",
            background: "rgba(65, 142, 214, 0.85)",
            borderRadius: "10px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            zIndex: 2,
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            {blogs.title}
          </Typography>

          <Typography variant="body1" sx={{ color: "#eee", mb: 3 }}>
            Unlock sales potential with Salesforce implementation. Streamline
            processes, boost efficiency, and enhance customer satisfaction.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              fontSize: "14px",
              color: "#ccc",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#fff",
              }}
            >
              {/* <img
          src="/logo/Solutionsloft.png"
          alt="SolutionsLoft"
          style={{ width: 28, height: 28, borderRadius: "50%" }}
        /> */}
              <Typography>Eazisols</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#fff",
              }}
            >
              <span>⏱</span>
              <span>8 mins read</span>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#fff",
              }}
            >
              <span>📅</span>
              <span>
                {new Date(blogs.created_at).toISOString().split("T")[0]}
              </span>
            </Box>
          </Box>
        </Box>
      </Box>

      <Container className="mt-5" style={{ marginTop: "76px" }}>
        {/* {blogs.thumbnail && (
          <img
            src={`https://admin.eazisols.com/${blogs.thumbnail}`}
            alt={blogs.title}
            style={{
              width: "100%",
              marginTop: "10px",
              height: "500px",
              borderRadius: "6px",
              marginBottom: "20px",
              objectFit: "cover",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          />
        )} */}

        {blogs.description && (
          <Box
            mb={4}
            mt={4}
            p={3}
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Description
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: blogs.description }}
              style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
            />
          </Box>
        )}
      </Container>
      <ReuseContact />
    </>
  );
}
