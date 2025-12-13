"use client";

import {
    Grid,
    Column,
    Heading,
    Section,
    UnorderedList,
    OrderedList,
    ListItem,
    CodeSnippet,
    Link as CarbonLink,
} from "@carbon/react";
import styles from "./page.module.scss";

export default function About() {
    return (
        <Grid className={styles.aboutPage} fullWidth>
            <Column lg={16} md={8} sm={4} className={styles.aboutHeader}>
                <Section level={1}>
                    <Heading className={styles.pageTitle}>About This Template</Heading>
                </Section>
            </Column>

            <Column lg={12} md={8} sm={4} className={styles.aboutContent}>
                <Section level={2} className={styles.section}>
                    <Heading className={styles.sectionHeading}>What is this?</Heading>
                    <p className={styles.paragraph}>
                        This is a modern starter template combining the power of <strong>Next.js</strong> with
                        IBM&rsquo;s <strong>Carbon Design System</strong>. It provides a solid foundation for building
                        rapid, accessible, and performant web applications with enterprise-grade UI components.
                    </p>
                </Section>

                <Section level={2} className={styles.section}>
                    <Heading className={styles.sectionHeading}>Features</Heading>
                    <UnorderedList className={styles.featureList}>
                        <ListItem className={styles.listItem}>
                            <strong>Carbon Design System</strong> - IBM&rsquo;s open-source design system with 50+ React components
                        </ListItem>
                        <ListItem className={styles.listItem}>
                            <strong>Next.js</strong> - React framework with App Router and Turbopack
                        </ListItem>
                        <ListItem className={styles.listItem}>
                            <strong>TypeScript</strong> - Type-safe development experience
                        </ListItem>
                        <ListItem className={styles.listItem}>
                            <strong>SCSS Support</strong> - Advanced styling with Sass
                        </ListItem>
                        <ListItem className={styles.listItem}>
                            <strong>Theme Toggle</strong> - Switch between light (g10) and dark (g100) themes
                        </ListItem>
                        <ListItem className={styles.listItem}>
                            <strong>Responsive Navigation</strong> - Hamburger menu with side navigation
                        </ListItem>
                        <ListItem className={styles.listItem}>
                            <strong>Accessibility First</strong> - WCAG 2.1 compliant Carbon components
                        </ListItem>
                    </UnorderedList>
                </Section>

                <Section level={2} className={styles.section}>
                    <Heading className={styles.sectionHeading}>Key Components</Heading>
                    <p className={styles.paragraph}>This template includes several pre-configured components:</p>
                    <UnorderedList className={styles.componentList}>
                        <ListItem><strong>Header</strong> - Global navigation with theme toggle and hamburger menu</ListItem>
                        <ListItem><strong>SideNav</strong> - Collapsible side navigation with resource links</ListItem>
                        <ListItem><strong>ThemeToggle</strong> - Component for switching between Carbon themes</ListItem>
                        <ListItem><strong>Landing Page</strong> - Example page with Grid layout and Tiles</ListItem>
                    </UnorderedList>
                </Section>

                <Section level={2} className={styles.section}>
                    <Heading className={styles.sectionHeading}>Getting Started</Heading>
                    <p className={styles.paragraph}>To use this template:</p>
                    <OrderedList className={styles.stepsList}>
                        <ListItem>Clone the repository</ListItem>
                        <ListItem>
                            Install dependencies:
                            <CodeSnippet type="single" className={styles.codeBlock}>
                                npm install
                            </CodeSnippet>
                        </ListItem>
                        <ListItem>
                            Start the development server:
                            <CodeSnippet type="single" className={styles.codeBlock}>
                                npm run dev
                            </CodeSnippet>
                        </ListItem>
                        <ListItem>
                            Open your browser to:
                            <CodeSnippet type="single" className={styles.codeBlock}>
                                http://localhost:3000
                            </CodeSnippet>
                        </ListItem>
                    </OrderedList>
                </Section>

                <Section level={2} className={styles.section}>
                    <Heading className={styles.sectionHeading}>Resources</Heading>
                    <UnorderedList className={styles.resourceList}>
                        <ListItem>
                            <CarbonLink href="https://carbondesignsystem.com" target="_blank" rel="noopener noreferrer">
                                Carbon Design System
                            </CarbonLink>
                        </ListItem>
                        <ListItem>
                            <CarbonLink href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                                Next.js Documentation
                            </CarbonLink>
                        </ListItem>
                        <ListItem>
                            <CarbonLink href="https://react.carbondesignsystem.com" target="_blank" rel="noopener noreferrer">
                                Carbon React Components
                            </CarbonLink>
                        </ListItem>
                    </UnorderedList>
                </Section>
            </Column>
        </Grid>
    );
}
