"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";

const steps = [
  {
    n: "01",
    title: "Request the zip",
    desc: "In Instagram settings, open Account Center and choose Export your information to request your data zip.",
  },
  {
    n: "02",
    title: "Download it",
    desc: "Save the zip to your device when it ready.",
  },
  {
    n: "03",
    title: "Upload and view",
    desc: "Upload that zip here to see unfollowers, people who don't follow back, and your mutuals.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How it <span className="text-ig">works</span>
        </h2>

        <div className="mt-12">
          <Timeline
            position="right"
            sx={{
              px: { xs: 0, sm: 2 },
              "& .MuiTimelineItem-root": {
                minHeight: "120px",
              },
              "& .MuiTimelineItem-missingOppositeContent:before": {
                display: "none",
              },
            }}
          >
            {steps.map((step, idx) => (
              <TimelineItem key={step.n}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "linear-gradient(120deg, var(--ig-orange), var(--ig-pink), var(--ig-purple))",
                      boxShadow: "none",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.n}
                  </TimelineDot>
                  {idx < steps.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: "var(--border)",
                        minHeight: { xs: 36, sm: 48 },
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: 2, pl: { xs: 2, sm: 3 } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: "var(--card)",
                      color: "var(--foreground)",
                      border: "1px solid var(--border)",
                      borderRadius: "16px",
                      padding: { xs: "14px", sm: "18px" },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "var(--muted-foreground)", fontWeight: 600, letterSpacing: 0.2 }}
                    >
                      Step {step.n}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mt: 0.5 }}>
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--muted-foreground)", mt: 0.75, lineHeight: 1.6 }}
                    >
                      {step.desc}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
