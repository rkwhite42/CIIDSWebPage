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
        <a
          href="https://play.apps.appsplatform.us/play/e/2673995b-5cbb-42ae-8088-9f08fe0019bd/a/c855698c-f101-4108-9b21-865c77181323?tenantId=e3333e00-c877-4b87-b6ad-45e942de1750&hint=fcda5aec-b202-4dde-84e8-1079bcff25ec&sourcetime=1745001453487?hidenavbar=true"
          target="_new"
          title="SharePoint Help Desk"
        >
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
        </a>
        <a
          href="https://play.apps.appsplatform.us/play/e/2673995b-5cbb-42ae-8088-9f08fe0019bd/a/1490e53c-4cea-46de-bce3-3be076c2b334?tenantId=e3333e00-c877-4b87-b6ad-45e942de1750&amp;hint=3b66a9b3-7db2-4efa-a43a-85d215937b46&amp;sourcetime=1716553967058?hidenavbar=true"
          target="_new"
          title="Check In / Check Out"
        >
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
        </a>
        <a
          href="https://flankspeed.sharepoint-mil.us/sites/NAVAIR_NAWCAD_WOLF_TW12/Lists/OTCTRequest/AllItems.aspx"
          target="_new"
          title="Over Time / Comp Time"
        >
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
        </a>
        <a
          href="https://flankspeed.sharepoint-mil.us/sites/NAVAIR_NAWCAD_WOLF_TW12/Lists/GraphicsRequest/AllItems.aspx"
          target="_new"
          title="Graphics Request"
        >
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
        </a>
        <a
          href="https://flankspeed.sharepoint-mil.us/sites/NAVAIR_NAWCAD_WOLF_TW12/SitePages/CI&IDS-Travel-Team.aspx"
          target="_new"
          title="Travel Apps"
        >
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
        </a>
        <a
          href="https://nserc.navy.mil/navair/ci_ids/SitePages/Facilities.aspx"
          target="_new"
          title="Facilities Request"
        >
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
        </a>
        <a
          href="https://play.apps.appsplatform.us/play/e/2673995b-5cbb-42ae-8088-9f08fe0019bd/a/c63f93fa-baf7-4408-a89a-f7ff2c992f08?tenantId=e3333e00-c877-4b87-b6ad-45e942de1750&amp;hint=7480211c-fadf-40d4-a1b5-7df49623e5fd&amp;sourcetime=1727106096214?hidenavbar=true"
          target="_new"
          title="Purchase Request"
        >
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
        </a>
        <a
          href="https://nserc.navy.mil/navair/ci_ids/SitePages/FIF/Home.aspx"
          target="_new"
          title="Funding Identification Tool"
        >
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
        </a>
        <a
          href="https://nserc.navy.mil/navair/ci_ids/Policies%20and%20Procedures/Lists/QMSProblemReports/Open%20PRs.aspx"
          target="_new"
          title="QMS Reports"
        >
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
        </a>
      </div>
    </div>
  );
}
