import React from "react";
import style from "./Footer.module.css";
import colors from "./../../Mainstyles/ThemeColors.module.css"


export default function Footer() {
  return (
    <>
      <div className={`${style.footer}`}>
        <div className="container">
          <div className={`row ${style.footerRow}`}>
            <div className="col-3">
              <div className="">
                <img src="./images/Group 732.svg" alt="" />
              </div>
            </div>

            <div className="col-3">
              <div className="">
                <img src="./images/Group 729.svg" alt="" />
              </div>
            </div>

            <div className="col-3">
              <div className="">
                <img src="./images/Group 730.svg" alt="" />
              </div>
            </div>

            <div className="col-3 ">
              <div className="">
                <img src="./images/Group 731.svg" alt="" />
              </div>
            </div>
          </div>

          <div className={`${style.copyRight} ${colors.textWhite} `}>
            <p>Copyright © 2022 - All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
