import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import Stars from "@site/static/img/stars-footer.svg";
import useDocumentationPath from "@site/src/hooks/useDocumentationPath";

export default function FooterLayout({ style, links, logo, copyright }) {
  const { isDocumentation } = useDocumentationPath();

  return (
    <footer
      className={clsx("footer", !isDocumentation && styles.footerLanding, {
        "footer--dark": style === "dark",
      })}
    >
      {!isDocumentation && (
        <div className={styles.sponsorsBackground}>
          <div className={styles.sponsorsBackgroundStars}>
            <Stars />
          </div>
        </div>
      )}
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
