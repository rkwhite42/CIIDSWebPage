import * as React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div>
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
      <div>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 2,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          <div style={{ width: 500, height: 300, background: "#ff80ed" }}>
            slide 0
          </div>
          <div style={{ width: 500, height: 300, background: "#065535" }}>
            slide 1
          </div>
          <div style={{ width: 500, height: 300, background: "#000000" }}>
            slide 2
          </div>
          <div style={{ width: 500, height: 300, background: "#133337" }}>
            slide 3
          </div>
        </ReactSimplyCarousel>
      </div>
    </div>
  );
}
