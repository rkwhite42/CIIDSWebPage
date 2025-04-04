import * as React from "react";
import { Typography } from "@mui/material";

export default function Carousel() {
  return (
    <div
      style={{
        backgroundColor: "#0f2938",
        marginRight: "10px",
        marginLeft: "10px",
        height: "30px",
        width: "100%",
      }}
    >
      <Typography
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          color: "#ffffff",
          textAlign: "left",
          marginLeft: "10px",
          paddingLeft: "10px",
        }}
      >
        CI&amp;IDS NEWS
      </Typography>
    </div>
  );
}
