"use client";

import {
    Header as CarbonHeader,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavLink,
} from "@carbon/react";
import { Notification, UserAvatar, Switcher } from "@carbon/icons-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <>
                    <CarbonHeader aria-label="Carbon Next.js Starter">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href="/" prefix="Carbon" as={Link}>Next.js Starter</HeaderName>
                        <HeaderNavigation aria-label="Carbon Next.js Starter">
                            <HeaderMenuItem href="/" isCurrentPage={pathname === "/"} as={Link}>
                                Home
                            </HeaderMenuItem>
                            <HeaderMenuItem href="/repositories" isCurrentPage={pathname === "/repositories"} as={Link}>
                                Repositories
                            </HeaderMenuItem>
                        </HeaderNavigation>
                        <HeaderGlobalBar>
                            <HeaderGlobalAction
                                aria-label="Notifications"
                                tooltipAlignment="end"
                            >
                                <Notification size={20} />
                            </HeaderGlobalAction>
                            <ThemeToggle />
                            <HeaderGlobalAction
                                aria-label="App Switcher"
                                tooltipAlignment="end"
                            >
                                <Switcher size={20} />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction
                                aria-label="User Profile"
                                tooltipAlignment="end"
                            >
                                <UserAvatar size={20} />
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                    </CarbonHeader>
                    <SideNav
                        aria-label="Resources"
                        isChildOfHeader={true}
                        isPersistent={false}
                        isRail={true}
                        expanded={isSideNavExpanded}
                        onOverlayClick={onClickSideNavExpand}
                    >
                        <SideNavItems>
                            <SideNavLink href="https://carbondesignsystem.com">
                                Carbon Design System
                            </SideNavLink>
                            <SideNavLink href="https://nextjs.org">
                                Next.js Framework
                            </SideNavLink>
                            <SideNavLink href="https://github.com/carbon-design-system/carbon">
                                Carbon GitHub
                            </SideNavLink>
                            <SideNavLink href="https://react.carbondesignsystem.com">
                                Carbon React Docs
                            </SideNavLink>
                            <SideNavLink href="https://www.carbondesignsystem.com/guidelines/2x-grid/overview">
                                2x Grid System
                            </SideNavLink>
                        </SideNavItems>
                    </SideNav>
                </>
            )}
        />
    );
}
