import React from "react";

import classes from "./AuraFonts.module.scss";

function AuraFonts(props) {
  return (
    <div className={classes["aura-fonts"]}>
      <div className={classes["aura-fonts-large"]}>
        <h4>30px</h4>
        <div className={classes["gotham-black"]}>Gotham Black </div>
        <div className={classes["gotham-bold"]}>Gotham Bold </div>
        <div className={classes["gotham-book"]}>Gotham Book </div>
        <div className={classes["gotham-light"]}>Gotham Light </div>
        <div className={classes["gotham-medium"]}>Gotham Medium </div>
        <div className={classes["gotham-thin"]}>Gotham Thin </div>
        <div className={classes["gotham-ultra"]}>Gotham Ultra </div>
        <div className={classes["gotham-xlight"]}>Gotham Ultra </div>
      </div>

      <div className={classes["aura-fonts-medium"]}>
        <h4>18px</h4>

        <div className={classes["gotham-black"]}>Gotham Black </div>
        <div className={classes["gotham-bold"]}>Gotham Bold </div>
        <div className={classes["gotham-book"]}>Gotham Book </div>
        <div className={classes["gotham-light"]}>Gotham Light </div>
        <div className={classes["gotham-medium"]}>Gotham Medium </div>
        <div className={classes["gotham-thin"]}>Gotham Thin </div>
        <div className={classes["gotham-ultra"]}>Gotham Ultra </div>
        <div className={classes["gotham-xlight"]}>Gotham Ultra </div>
      </div>

      <div className={classes["aura-fonts-small"]}>
        <h4>12px</h4>

        <div className={classes["gotham-black"]}>Gotham Black </div>
        <div className={classes["gotham-bold"]}>Gotham Bold </div>
        <div className={classes["gotham-book"]}>Gotham Book </div>
        <div className={classes["gotham-light"]}>Gotham Light </div>
        <div className={classes["gotham-medium"]}>Gotham Medium </div>
        <div className={classes["gotham-thin"]}>Gotham Thin </div>
        <div className={classes["gotham-ultra"]}>Gotham Ultra </div>
        <div className={classes["gotham-xlight"]}>Gotham Ultra </div>
      </div>
    </div>
  );
}

export default AuraFonts;
