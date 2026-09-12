"use client";

import dynamic from "next/dynamic";
import { InlineLoading } from "@carbon/react";
import styles from "@/app/chat/page.module.scss";

const CarbonAiChatClient = dynamic(
  () =>
    import("@/components/chat/CarbonAiChatClient").then(
      (mod) => mod.CarbonAiChatClient,
    ),
  {
    ssr: false,
    loading: () => (
      <div className={styles.loadingState}>
        <InlineLoading description="Loading AI chat template" status="active" />
      </div>
    ),
  },
);

export function CarbonAiChatIsland() {
  return <CarbonAiChatClient />;
}
