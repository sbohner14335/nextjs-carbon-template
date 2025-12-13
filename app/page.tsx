"use client";

import {
  Grid,
  Column,
  Tile,
  ClickableTile,
  Button,
} from "@carbon/react";
import { ArrowRight, LogoGithub, Carbon } from "@carbon/icons-react";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Grid className={styles.landingPage} fullWidth>
      <Column lg={16} md={8} sm={4} className={styles.landingPageBanner}>
        <h1 className={styles.landingPageHeading}>
          Welcome to Carbon + Next.js
        </h1>
        <p className={styles.landingPageSubheading}>
          A starter template for building rapid, accessible, and performant web applications with the Carbon Design System.
        </p>
        <Button href="https://github.com/sbohner14335/nextjs-carbon-template?tab=readme-ov-file#getting-started" renderIcon={ArrowRight} size="lg">
          <LogoGithub />
          &emsp;Get Started
        </Button>
      </Column>

      <Column lg={16} md={8} sm={4} className={styles.landingPageContent}>
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <ClickableTile href="https://carbondesignsystem.com">
              <div className={styles.tileContent}>
                <Carbon size={32} />
                <h3>Carbon Design System</h3>
                <p>Open source design system by IBM.</p>
                <ArrowRight className={styles.tileIcon} />
              </div>
            </ClickableTile>
          </Column>
          <Column md={4} lg={4} sm={4}>
            <ClickableTile href="https://nextjs.org">
              <div className={styles.tileContent}>
                <Image src="/next.svg" alt="Next.js" width={32} height={32} />
                <h3>Next.js Framework</h3>
                <p>The React Framework for the Web.</p>
                <ArrowRight className={styles.tileIcon} />
              </div>
            </ClickableTile>
          </Column>
          <Column md={4} lg={4} sm={4}>
            <ClickableTile href="https://github.com/carbon-design-system/carbon">
              <div className={styles.tileContent}>
                <LogoGithub size={32} />
                <h3>Carbon GitHub</h3>
                <p>Contribute to the design system.</p>
                <ArrowRight className={styles.tileIcon} />
              </div>
            </ClickableTile>
          </Column>
          <Column md={4} lg={4} sm={4}>
            <Tile>
              <div className={styles.tileContent}>
                <h3>Resources</h3>
                <ul className={styles.resourceList}>
                  <li><a href="https://react.carbondesignsystem.com">Carbon React Docs</a></li>
                  <li><a href="https://carbondesignsystem.com/elements/2x-grid/overview/">2x Grid System</a></li>
                </ul>
              </div>
            </Tile>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}
