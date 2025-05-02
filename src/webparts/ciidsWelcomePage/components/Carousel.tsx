import * as React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import ciidsstyles from "./CIIDSStyles.module.scss";
import carousel01 from "./../assets/Carousel01.png";
import carousel02 from "./../assets/carousel02.png";
import carousel03 from "./../assets/carousel03.png";

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
      <div className={ciidsstyles.carousel}>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                margin: 10,
              },
            },
            activeItemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "#0f2938",
                margin: 10,
              },
            },
          }}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "#0f2938",
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
              background: "#0f2938",
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
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 500,
            },
          ]}
          containerProps={{
            width: 500,
            overflowX: "hidden",
          }}
          speed={500}
          easing="linear"
          centerMode="true"
          autoplay="true"
          autoplayDelay={10000}
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          <div
            style={{
              width: 500,
              height: 350,
              background: "#D3E0E7",
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={carousel01} title="Brown Bag Discussions" />
          </div>
          <div
            style={{
              width: 500,
              height: 350,
              background: "#D3E0E7",
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>
              <img src={carousel02} title="Memorial Day All-Hands Meeting" />
            </div>
          </div>
          <div
            style={{
              width: 500,
              height: 350,
              background: "#D3E0E7",
              margin: "10px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div>
              <img src={carousel03} title="Happy Hour" />
            </div>
          </div>
        </ReactSimplyCarousel>
      </div>
    </div>
  );
}
