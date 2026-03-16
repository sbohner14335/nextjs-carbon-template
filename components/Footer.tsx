"use client";

import { Grid, Column, Link } from "@carbon/react";
import { LogoGithub, LogoLinkedin, LogoTwitter } from "@carbon/icons-react";
import styles from "./Footer.module.scss";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Grid>
                <Column sm={4} md={8} lg={5} className={styles.leftColumn}>
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Carbon Next.js Starter</h4>
                        <p className={styles.footerText}>
                            A starter template for building Next.js applications with IBM Carbon Design System.
                        </p>
                    </div>
                </Column>

                <Column sm={4} md={8} lg={6} className={styles.centerColumn}>
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Resources</h4>
                        <ul className={styles.footerLinks}>
                            <li>
                                <Link href="https://carbondesignsystem.com" target="_blank" rel="noopener noreferrer">
                                    Carbon Design System
                                </Link>
                            </li>
                            <li>
                                <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                                    Next.js
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Column>

                <Column sm={4} md={8} lg={5} className={styles.rightColumn}>
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Connect</h4>
                        <div className={styles.socialLinks}>
                            <Link
                                href="https://github.com/carbon-design-system/carbon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub"
                            >
                                <LogoGithub size={20} />
                            </Link>
                            <Link
                                href="https://twitter.com/_carbondesign"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Twitter"
                            >
                                <LogoTwitter size={20} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/ibm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                            >
                                <LogoLinkedin size={20} />
                            </Link>
                        </div>
                    </div>
                </Column>
            </Grid>

            <Grid>
                <Column sm={4} md={8} lg={16}>
                    <div className={styles.footerBottom}>
                        <p className={styles.copyright}>
                            © {currentYear} IBM Carbon. Built with Carbon Design System.
                        </p>
                        <svg className={styles.ibmLogo} width="43" height="17" viewBox="0 0 43 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IBM logo"><path d="M0 15.7709H8.3446V16.9556H0V15.7709ZM0 14.7047H8.3446V13.52H0V14.7047ZM2.37776 12.4538H5.95189V11.2692H2.37776V12.4538ZM2.37776 10.203H5.95189V9.01829H2.37776V10.203ZM2.37776 7.95209H5.95189V6.76742H2.37776V7.95209ZM5.95189 4.51655H2.37776V5.70122H5.95189V4.51655ZM0 3.45035H8.3446V2.26568H0L0 3.45035ZM0 1.18467H8.3446V0H0V1.18467ZM9.54096 14.7047H22.2523C22.4616 14.3345 22.6261 13.9495 22.7308 13.52H9.54096V14.7047ZM21.2653 9.01829H11.9337V10.203H22.2672C21.998 9.75871 21.6691 9.35889 21.2802 9.01829H21.2653ZM11.9337 6.76742V7.95209H21.2653C21.6541 7.62631 21.998 7.22648 22.2523 6.76742H11.9187H11.9337ZM22.2672 2.26568H9.54096V3.45035H22.7308C22.6261 3.03571 22.4616 2.63589 22.2523 2.26568H22.2672ZM18.3342 0.0148084H9.55592V1.19948H21.3999C20.5923 0.473868 19.5156 0.0148084 18.3342 0.0148084ZM11.9486 5.70122H15.5228V4.51655H11.9486V5.70122ZM18.8875 5.70122H22.7308C22.8355 5.33101 22.8953 4.93118 22.8953 4.51655H18.8875V5.70122ZM11.9486 12.4538H15.5228V11.2692H11.9486V12.4538ZM18.8875 11.2692V12.4538H22.8953C22.8953 12.0392 22.8355 11.6542 22.7308 11.2692H18.8875ZM9.57087 16.9556H18.3492C19.5455 16.9556 20.6073 16.5113 21.4148 15.7709H9.57087V16.9556ZM33.4083 16.9556L33.827 15.7709H33.0046L33.4233 16.9556H33.4083ZM32.6157 14.7047H34.2009L34.6196 13.52H32.197L32.6157 14.7047ZM31.8231 12.4538H35.0084L35.4272 11.2692H31.4044L31.8231 12.4538ZM31.0306 10.203H35.816L36.2347 9.01829H30.6118L31.0306 10.203ZM26.275 5.70122H32.7204L32.3017 4.51655H26.275V5.70122ZM34.9337 3.45035H42.9642V2.26568H35.3524L34.9337 3.45035ZM36.145 0.0148084L35.7263 1.19948H42.9642V0.0148084H36.145ZM23.8973 16.9704H29.8492V15.7857H23.8973V16.9704ZM23.8973 14.7195H29.8492V13.5348H23.8973V14.7195ZM26.275 12.4686H29.8492V11.284H26.275V12.4686ZM26.275 10.2178H29.8492V9.0331H26.275V10.2178ZM40.5715 4.53136H34.5449L34.1261 5.71603H40.5715V4.53136ZM36.9974 7.9669H40.5715V6.78223H33.7523L33.4233 7.72997L33.0943 6.78223H26.275V7.9669H29.8492V6.88589L30.238 7.9669H36.6235L37.0124 6.88589V7.9669H36.9974ZM40.5715 9.0331H36.9974V10.2178H40.5715V9.0331ZM36.9974 12.4686H40.5715V11.284H36.9974V12.4686ZM36.9974 14.7195H42.9493V13.5348H36.9974V14.7195ZM36.9974 16.9704H42.9493V15.7857H36.9974V16.9704ZM31.9129 3.45035L31.4941 2.26568H23.8823V3.45035H31.9129ZM31.1203 1.19948L30.7016 0.0148084H23.8823V1.19948H31.1203Z" fill="currentColor"></path></svg>
                        <ul className={styles.legalLinks}>
                            <li>
                                <Link href="https://carbondesignsystem.com/help/contact-us/" target="_blank" rel="noopener noreferrer">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.ibm.com/privacy" target="_blank" rel="noopener noreferrer">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.ibm.com/legal" target="_blank" rel="noopener noreferrer">
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.ibm.com/able" target="_blank" rel="noopener noreferrer">
                                    Accessibility
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Column>
            </Grid>
        </footer>
    );
}