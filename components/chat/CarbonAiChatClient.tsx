"use client";

import {
  BusEventType,
  ChatCustomElement,
  MessageResponseTypes,
  type ChatInstance,
  type CustomSendMessageOptions,
  type MessageRequest,
  type MessageResponse,
} from "@carbon/ai-chat";
import { useCallback, useMemo, useRef } from "react";
import styles from "./CarbonAiChatClient.module.scss";

const welcomeText =
  "Hi, I am your template assistant. Ask me anything to validate this Carbon AI chat interface.";

function waitFor(delayMs: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new Error("Message request aborted."));
      return;
    }

    const cleanup = (timeoutId: number) => {
      window.clearTimeout(timeoutId);
      signal.removeEventListener("abort", onAbort);
    };

    const onAbort = () => {
      cleanup(timeoutId);
      reject(new Error("Message request aborted."));
    };

    const timeoutId = window.setTimeout(() => {
      cleanup(timeoutId);
      resolve();
    }, delayMs);

    signal.addEventListener("abort", onAbort, { once: true });
  });
}

async function addTextMessage(
  instance: ChatInstance,
  text: string,
  requestId?: string,
): Promise<void> {
  const message: MessageResponse = {
    request_id: requestId,
    output: {
      generic: [
        {
          response_type: MessageResponseTypes.TEXT,
          text,
        },
      ],
    },
  };

  await instance.messaging.addMessage(message);
}

async function addInlineError(
  instance: ChatInstance,
  error: unknown,
  requestId?: string,
): Promise<void> {
  const debugText = error instanceof Error ? error.message : "Unknown error.";

  const errorMessage: MessageResponse = {
    request_id: requestId,
    output: {
      generic: [
        {
          response_type: MessageResponseTypes.INLINE_ERROR,
          text: "The template responder hit an issue. Please try again.",
          debug: {
            text: debugText,
          },
        },
      ],
    },
  };

  await instance.messaging.addMessage(errorMessage);
}

export function CarbonAiChatClient() {
  const initializedRef = useRef(false);
  const restartListenerRegisteredRef = useRef(false);

  const handleAfterRender = useCallback(async (instance: ChatInstance) => {
    if (!restartListenerRegisteredRef.current) {
      instance.on({
        type: BusEventType.RESTART_CONVERSATION,
        handler: async (_event, currentInstance) => {
          await addTextMessage(currentInstance, welcomeText);
        },
      });

      restartListenerRegisteredRef.current = true;
    }

    if (initializedRef.current) {
      return;
    }

    initializedRef.current = true;
    await addTextMessage(instance, welcomeText);
  }, []);

  const handleCustomSendMessage = useCallback(
    async (
      request: MessageRequest,
      requestOptions: CustomSendMessageOptions,
      instance: ChatInstance,
    ) => {
      try {
        await waitFor(450, requestOptions.signal);

        const userText =
          typeof request.input.text === "string" ? request.input.text.trim() : "";

        if (!userText) {
          await addTextMessage(
            instance,
            "Please enter a message so I can show the template response behavior.",
            request.id,
          );
          return;
        }

        const templateReply = [
          `Template response for: "${userText}"`,
          "",
          "This chat UI is wired with `customSendMessage` for local mock behavior.",
          "Next steps:",
          "1. Replace this function with your real backend call.",
          "2. Add streaming chunks for token-by-token output.",
          "3. Persist conversation history if needed.",
        ].join("\n");

        await addTextMessage(instance, templateReply, request.id);
      } catch (error) {
        if (requestOptions.signal.aborted) {
          return;
        }

        await addInlineError(instance, error, request.id);
      }
    },
    [],
  );

  const headerConfig = useMemo(
    () => ({
      title: "AI",
      name: "Chat Title",
      hideMinimizeButton: true,
      showRestartButton: true,
    }),
    [],
  );

  const launcherConfig = useMemo(
    () => ({
      isOn: false,
    }),
    [],
  );

  const messagingConfig = useMemo(
    () => ({
      skipWelcome: true,
      messageTimeoutSecs: 30,
      customSendMessage: handleCustomSendMessage,
    }),
    [handleCustomSendMessage],
  );

  return (
    <div className={styles.chatRoot}>
      <ChatCustomElement
        className={styles.chatContainer}
        aiEnabled={true}
        openChatByDefault={true}
        header={headerConfig}
        launcher={launcherConfig}
        messaging={messagingConfig}
        onAfterRender={handleAfterRender}
      />
    </div>
  );
}
