import React from "react";
import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerDiv}>
      <p className={styles.footerParagraph}>
        Copyright &copy; Mika Bibas, 2022
      </p>
    </div>
  );
}

export default Footer;
