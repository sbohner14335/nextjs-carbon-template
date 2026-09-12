import { Grid, Column } from "@carbon/react";
import { CarbonAiChatIsland } from "@/components/chat/CarbonAiChatIsland";
import styles from "./page.module.scss";

export default function ChatPage() {
  return (
    <Grid className={styles.chatPage} fullWidth>
      <Column lg={16} md={8} sm={4} className={styles.chatHeader}>
        <h1 className={styles.pageTitle}>AI Chat Template</h1>
        <p className={styles.pageDescription}>
          This is a Carbon AI Chat starter interface with a local mock responder.
          Use it to validate layout, theming, and interaction flow before wiring a
          real backend.
        </p>
      </Column>

      <Column lg={16} md={8} sm={4} className={styles.chatContent}>
        <CarbonAiChatIsland />
      </Column>
    </Grid>
  );
}
