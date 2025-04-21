import * as React from "react";
import { Typography, Box, Tooltip } from "@mui/material";
import ciidsstyles from "./CIIDSStyles.module.scss";
import bear_sq from "../assets/bear_sq.jpg";
import jonathan_sq from "../assets/jonathan_sq.jpg";
import sara_sq from "../assets/SaraButcher_sq.jpg";
import allen_sq from "../assets/AllenFrere_sq.png";
import brooke_sq from "../assets/BrookeHiggsTurner_sq.jpg";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SchemaIcon from "@mui/icons-material/Schema";
import ArticleIcon from "@mui/icons-material/Article";

export default function AppButtons() {
  return (
    <Box
      className={ciidsstyles.lightBackground}
      sx={{
        borderRadius: 3,
        margin: 2,
        padding: 2,
        width: "100vw",
      }}
    >
      <Typography
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#0f2938",
          textAlign: "left",
        }}
      >
        RESOURCES
      </Typography>

      <div className={ciidsstyles.flexcontainerresources}>
        <a
          href="https://nserc.navy.mil/navair/ci_ids/Policies%20and%20Procedures/default.aspx"
          target="_new"
          title="Policies and Procedures"
        >
          <LibraryBooksIcon style={{ color: "#0f2938", fontSize: "40px" }} />
        </a>
        <Typography
          style={{
            color: "#0f2938",
            textAlign: "left",
            fontSize: "14px",
            fontWeight: "bold",
            textWrap: "wrap",
            paddingLeft: "5px",
          }}
        >
          Policies and Procedures
        </Typography>
      </div>

      <div className={ciidsstyles.flexcontainerresources}>
        <SchemaIcon
          style={{
            color: "#0f2938",
            fontSize: "40px",
            rotate: "270deg",
          }}
        />
        <Typography
          style={{
            color: "#0f2938",
            textAlign: "left",
            fontSize: "14px",
            fontWeight: "bold",
            textWrap: "wrap",
            paddingLeft: "5px",
          }}
        >
          Organization charts
        </Typography>
      </div>

      <div className={ciidsstyles.flexcontainerresources}>
        <ArticleIcon
          style={{
            color: "#0f2938",
            fontSize: "40px",
          }}
        />
        <Typography
          style={{
            color: "#0f2938",
            textAlign: "left",
            fontSize: "14px",
            fontWeight: "bold",
            textWrap: "wrap",
            paddingLeft: "5px",
          }}
        >
          Code of Conduct
        </Typography>
      </div>

      <Typography
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: "#0f2938",
          textAlign: "left",
          paddingTop: "10px",
        }}
      >
        DIVISION POINTS OF CONTACT
      </Typography>
      <div className={ciidsstyles.flexcontainerresources}>
        {/* OPEN DIVISION DIRECTOR */}
        <div className={ciidsstyles.flexPOCs}>
          <Typography
            style={{
              color: "#0f2938",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              textWrap: "nowrap",
            }}
          >
            Division Director
          </Typography>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <Tooltip
              title="jonathan.a.wilt.civ@us.navy.mil"
              placement="top-start"
            >
              <Box
                sx={{
                  width: "60px",
                  margin: "3px",
                  paddingRight: "10px",
                  borderRadius: "3px",
                }}
              >
                <img className={ciidsstyles.imgContainer} src={jonathan_sq} />
              </Box>
            </Tooltip>
            <Typography
              style={{
                color: "#000000",
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              Jonathan Wilt <br />
              301-995-8865
            </Typography>
          </div>
        </div>
        {/* CLOSE DIVISION DIRECTOR */}
        {/* OPEN CHENG */}
        <div className={ciidsstyles.flexPOCs}>
          <Typography
            style={{
              color: "#0f2938",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              textWrap: "nowrap",
            }}
          >
            CHENG
          </Typography>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <Tooltip
              title="robert.l.sidell2.civ@us.navy.mil"
              placement="top-start"
            >
              <Box
                sx={{
                  width: "60px",
                  margin: "3px",
                  paddingRight: "10px",
                  borderRadius: "3px",
                }}
              >
                <img className={ciidsstyles.imgContainer} src={bear_sq} />
              </Box>
            </Tooltip>
            <Typography
              style={{
                color: "#000000",
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              Robert &quot;Bear&quot; Sidell <br />
              240-587-1402
            </Typography>
          </div>
        </div>
        {/* CLOSE CHENG */}
        {/* OPEN ACQUISITION MANAGER */}
        <div className={ciidsstyles.flexPOCs}>
          <Typography
            style={{
              color: "#0f2938",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              textWrap: "nowrap",
            }}
          >
            Acquisition Manager
          </Typography>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <Tooltip
              title="sara.e.butcher3.civ@us.navy.mil"
              placement="top-start"
            >
              <Box
                sx={{
                  width: "60px",
                  margin: "3px",
                  paddingRight: "10px",
                  borderRadius: "3px",
                }}
              >
                <img className={ciidsstyles.imgContainer} src={sara_sq} />
              </Box>
            </Tooltip>
            <Typography
              style={{
                color: "#000000",
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              Sara Butcher <br />
              301-995-8804
            </Typography>
          </div>
        </div>
        {/* CLOSE ACQUISITION MANAGER */}
        {/* OPEN BUSINESS FINANCIAL MANAGER */}
        <div className={ciidsstyles.flexPOCs}>
          <Typography
            style={{
              color: "#0f2938",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              textWrap: "nowrap",
            }}
          >
            Business Financial Manager
          </Typography>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <Tooltip
              title="brooke.n.shegogue.civ@us.navy.mil"
              placement="top-start"
            >
              <Box
                sx={{
                  width: "60px",
                  margin: "3px",
                  paddingRight: "10px",
                  borderRadius: "3px",
                }}
              >
                <img className={ciidsstyles.imgContainer} src={brooke_sq} />
              </Box>
            </Tooltip>
            <Typography
              style={{
                color: "#000000",
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              Brooke Shegogue <br />
              410-474-7223
            </Typography>
          </div>
        </div>
        {/* CLOSE BUSINESS FINANCIAL MANAGER */}
        {/* OPEN DIVISION OPERATIONS MANAGER */}
        <div className={ciidsstyles.flexPOCs}>
          <Typography
            style={{
              color: "#0f2938",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              textWrap: "nowrap",
            }}
          >
            Division Operations Manager
          </Typography>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <Tooltip
              title="allen.c.frere.civ@us.navy.mil"
              placement="top-start"
            >
              <Box
                sx={{
                  width: "60px",
                  margin: "3px",
                  paddingRight: "10px",
                  borderRadius: "3px",
                }}
              >
                <img className={ciidsstyles.imgContainer} src={allen_sq} />
              </Box>
            </Tooltip>
            <Typography
              style={{
                color: "#000000",
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              Allen Frere <br />
              301-995-6567
            </Typography>
          </div>
        </div>
        {/* CLOSE DIVISION OPERATIONS MANAGER */}
        {/* CLOSE FLEX CONTAINER RESOURCES */}
      </div>
    </Box>
  );
}
