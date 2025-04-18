import * as React from "react";
import { Grid } from "@mui/material";
import AppButtons from "./AppButtons";
import Resources from "./Resources";
import Carousel from "./Carousel";
import building from "../assets/ciidsBuilding.jpg";
import ciidsstyles from "./CIIDSStyles.module.scss";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const CiidsStartPage = () => {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      {/* BODY DIV */}

      <div className={ciidsstyles.flexmain}>
        <div className={ciidsstyles.flexleft}>
          <div className={ciidsstyles.flexinnerleft}>
            <AppButtons />
          </div>
          <div className={ciidsstyles.flexmid}>
            <div>
              <img
                src={building}
                className={ciidsstyles.heroImage}
                title="CI&IDS Main Building"
              />
            </div>
          </div>
          <div className={ciidsstyles.flexcarousel}>
            <Carousel />
          </div>
        </div>
        <div className={ciidsstyles.flexright}>
          <Resources />
        </div>
      </div>

      <Grid container size={12} className={ciidsstyles.fixedBottomBar}>
        <Grid direction="row" spacing={10} container size={10}>
          <Grid size={4}>
            <p className={ciidsstyles.CIIDSBlurbHeader}>IDENTIFICATION</p>
            <p className={ciidsstyles.CIIDSBlurb}>
              National and international, civil and military coordination for
              interoperability for IFF and ATC solutions.
            </p>
          </Grid>
          <Grid size={4}>
            <p className={ciidsstyles.CIIDSBlurbHeader}>INTEGRATION</p>
            <p className={ciidsstyles.CIIDSBlurb}>
              Production, testing, installation, training and certification of
              multiple systems and products for diverse air, ship and ground
              platforms.
            </p>
          </Grid>
          <Grid size={4}>
            <p className={ciidsstyles.CIIDSBlurbHeader}>INNOVATION</p>
            <p className={ciidsstyles.CIIDSBlurb}>
              Developing competitive, advanced engineering and technical
              solutions to meet current and future demands.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </FullScreen>
  );
};

export default CiidsStartPage;
