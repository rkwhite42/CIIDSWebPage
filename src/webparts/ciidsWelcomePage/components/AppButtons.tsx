import * as React from "react";
import { Typography, Box } from "@mui/material";
import ciidsstyles from "./CIIDSStyles.module.scss";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PersonIcon from "@mui/icons-material/Person";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LuggageIcon from "@mui/icons-material/Luggage";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function AppButtons() {
  return (
    <div>
      <div className={ciidsstyles.mainBackground}>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "#ffffff",
            textAlign: "center",
            width: "100%",
          }}
        >
          DIVISION WORKFLOWS
        </Typography>
      </div>
      <div className={ciidsstyles.flexappbuttons}>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <HeadsetMicIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            SharePoint Help Desk
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <PersonIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            Check In / Check Out
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <PendingActionsIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            OT / CT
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <DesignServicesIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            Graphics Request
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <LuggageIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            Travel Request
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <MapsHomeWorkIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            Facilities Request
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <FormatListNumberedRtlIcon
            style={{ color: "white", fontSize: "30px" }}
          />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            Purchase Request
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <RequestQuoteIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            Funding Identification
          </Typography>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "70px",
            margin: "3px",
            backgroundColor: "#0f2938",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <VerifiedIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            QMS Report
          </Typography>
        </Box>
      </div>
    </div>
  );
}
