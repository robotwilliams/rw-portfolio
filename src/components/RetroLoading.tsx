// Terminal loading animation with retro console messages
import { useEffect, useRef, useState } from "react";

import { RetroLoadingProps } from "@/types";

export default function RetroLoading({
  messages = [
    "> Initializing retro interface {{dots}}",
    "> Loading RobotOS nostalgia {{dots}}",
    "> Bypassing modern web standards {{dots}}",
    "> Installing pixel art drivers {{dots}}",
    "> System ready. Welcome to RobotOS!",
  ],
  onComplete,
  duration = 2000,
}: RetroLoadingProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [spinnerChar, setSpinnerChar] = useState(0);
  const [dotCounts, setDotCounts] = useState<{ [index: number]: number }>({});
  const textRef = useRef<HTMLDivElement>(null);
  const spinnerChars = ["|", "/", "-", "\\"];

  // Store random max dots for each message to create variety
  const maxDotsPerMessage = useRef<{ [index: number]: number }>({});

  function getMaxDots(index: number) {
    if (!maxDotsPerMessage.current[index]) {
      // Random between 3 and 7 for variety
      maxDotsPerMessage.current[index] = Math.floor(Math.random() * 5) + 3;
    }
    return maxDotsPerMessage.current[index];
  }

  // Main message progression timer
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(messageInterval);
          setTimeout(() => {
            setIsComplete(true);
            onComplete?.();
          }, 1000);
          return prev;
        }
      });
    }, duration / messages.length);

    return () => clearInterval(messageInterval);
  }, [messages, duration, onComplete]);

  // Spinner animation for visual feedback
  useEffect(() => {
    const spinnerInterval = setInterval(() => {
      setSpinnerChar((prev) => (prev + 1) % spinnerChars.length);
    }, 300);
    return () => clearInterval(spinnerInterval);
  }, [spinnerChars.length]);

  // Animated dots that appear gradually for each message
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDotCounts((prev) => {
        const newCounts = { ...prev };

        // For each visible message with dots
        for (let i = 0; i <= currentMessageIndex; i++) {
          if (messages[i].includes("{{dots}}")) {
            const currentCount = newCounts[i] || 0;
            const maxDots = getMaxDots(i);

            // Add one dot if not at max yet
            if (currentCount < maxDots) {
              newCounts[i] = currentCount + 1;
            }
          }
        }

        return newCounts;
      });
    }, 60); // Slower dot animation

    return () => clearInterval(dotsInterval);
  }, [currentMessageIndex, messages]);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight;
    }
  }, [currentMessageIndex]);

  if (isComplete) {
    return null;
  }

  // Helper to render message with animated dots
  function renderMessage(message: string, index: number) {
    // Replace spinner
    const html = message.replace(
      /<span class="spinning-indicator"[^>]*><\/span>/g,
      spinnerChars[spinnerChar]
    );
    // Split on {{dots}} token
    const parts = html.split("{{dots}}");
    if (parts.length === 1) {
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return (
      <>
        <span dangerouslySetInnerHTML={{ __html: parts[0] }} />
        <span
          className="loading-dots-plain"
          style={{ color: "var(--text-primary)", textShadow: "none" }}
        >
          {".".repeat(dotCounts[index] || 0)}
        </span>
        <span dangerouslySetInnerHTML={{ __html: parts[1] }} />
      </>
    );
  }

  return (
    <div className="retro-window">
      {/* Window Title Bar */}
      <div className="window-titlebar">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">robotOS.ini startup</span>
        </div>
      </div>

      {/* Window Content */}
      <div
        className="window-content"
        style={{
          height: "400px",
          padding: "6px",
          paddingTop: "16px",
          paddingBottom: "6px"
        }}
      >
        <div className="retro-loading-text" ref={textRef}>
          {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
            <div key={index} className="terminal-message">
              {renderMessage(message, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
