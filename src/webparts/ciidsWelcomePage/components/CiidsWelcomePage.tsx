import * as React from "react";
import { Grid } from "@mui/material";
import AppButtons from "./AppButtons";
import Resources from "./Resources";
import Carousel from "./Carousel";
// import DropDowns from "./DropDowns";
import building from "../assets/ciidsBuilding.jpg";
import ciidsstyles from "./CIIDSStyles.module.scss";
import logo from "../assets/ciidslogowhite.png";

const CiidsStartPage = () => {
  return (
    /* PAGE CONTAINER DIV */
    <div className={ciidsstyles.flexcontainer}>
      {/* GOLD BAR AND LOGO BAR */}
      <div className={ciidsstyles.cuiline}>
        <div className={ciidsstyles.navairLine}>NAVAIR NAWCAD WOLF TW12</div>
        <div className={ciidsstyles.cuitext}>CUI (General) \ CUI</div>
      </div>
      {/* ACCENT BAR DIV */}
      <div className={ciidsstyles.accentBar}>&nbsp;</div>
      {/* LOGO AND DROPDOWNS DIV */}
      <div className={ciidsstyles.imgContainer}>
        <img src={logo} alt="CIIDS Logo" className={ciidsstyles.imgBox} />
        <div className={ciidsstyles.dropdown}>
          <button className={ciidsstyles.dropbtn}>Branch Sites</button>
          <div className={ciidsstyles.dropdowncontent}>
            <a href="#">TW12100</a>
            <a href="#">TW12200</a>
            <a href="#">TW12300</a>
            <a href="#">TW12400</a>
          </div>
        </div>
        <div className={ciidsstyles.dropdown}>
          <button className={ciidsstyles.dropbtn}>Division Sites</button>
          <div className={ciidsstyles.dropdowncontent}>
            <a href="#">Correspondence</a>
            <a href="#">Deliverables</a>
            <a href="#">Engineering</a>
            <a href="#">External Customers</a>
            <a href="#">Information</a>
            <a href="#">Inventory Management</a>
            <a href="#">Logistics</a>
            <a href="#">Operations-Facilities</a>
            <a href="#">PMR and PSR</a>
            <a href="#">Quality Assurance</a>
            <a href="#">Security</a>
            <a href="#">Travel</a>
            <a href="#">Sandbox</a>
          </div>
        </div>
        <div className={ciidsstyles.dropdown}>
          <button className={ciidsstyles.dropbtn}>Helpful Links</button>
          <div className={ciidsstyles.dropdowncontent}>
            <a href="#">DAU</a>
            <a href="#">DTS</a>
            <a href="#">eDACM</a>
            <a href="#">ESAMS</a>
            <a href="#">ISEE RIO</a>
            <a href="#">NAVAIRU</a>
            <a href="#">NAVY ERP</a>
            <a href="#">NFAAS</a>
            <a href="#">STRL</a>
            <a href="#">SWAT</a>
            <a href="#">TWMS</a>
            <a href="#">WOLF PROJECT</a>
            <a href="#">DATABASE</a>
          </div>
        </div>
      </div>

      {/* CONTAINER DiV */}
      <div className={ciidsstyles.flexbodycontent}>
        {/* PAGE TITLE */}
        <div className={ciidsstyles.headerBackground}>
          <div className={ciidsstyles.headerBar}>
            <p className={ciidsstyles.headerText}>
              Welcome to NAWCAD WOLF Combat Integration and Identification
              Systems
            </p>
          </div>
        </div>

        {/* BODY DIV */}

        <div className={ciidsstyles.flexmain}>
          <div className={ciidsstyles.flexleft}>
            <div className={ciidsstyles.flexinnerleft}>
              <AppButtons />
            </div>
            <div className={ciidsstyles.flexmid}>
              <div>
                <img src={building} className={ciidsstyles.heroImage} />
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
    </div>
  );
};

export default CiidsStartPage;
