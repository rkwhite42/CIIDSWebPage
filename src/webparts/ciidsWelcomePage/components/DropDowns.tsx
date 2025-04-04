import * as React from "react";
import ciidsstyles from "./CIIDSStyles.module.scss";

export default function DropDowns() {
  return (
    <div>
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
  );
}
