/**
 * PageLoadWrapper Component
 *
 * Wraps the entire application and shows a retro terminal loading
 * animation on initial page load before revealing the main content.
 * Creates an authentic Windows 98 boot experience.
 */

"use client";

import { useState, useEffect } from "react";
import RetroLoading from "./RetroLoading";

interface PageLoadWrapperProps {
  children: React.ReactNode;
}

export default function PageLoadWrapper({ children }: PageLoadWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a longer loading time for authentic feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // 8 seconds total loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="page-load-container">
        <div className="cloud-scene">
          <div className="cloud-layer" data-depth="0.2">
            <div className="cloud"></div>
          </div>
          <div className="cloud-layer" data-depth="0.5">
            <div className="cloud-two"></div>
          </div>
          <div className="cloud-layer" data-depth="0.4">
            <div className="cloud-three"></div>
          </div>
          <div className="cloud-layer" data-depth="0.2">
            <div className="cloud-four"></div>
          </div>
        </div>
        <div className="w-full max-w-2xl px-8 relative z-10">
          <RetroLoading
            messages={[
              '<span class="terminal-prompt">$</span> <span class="terminal-command">sudo init robotOS</span>',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Kernel</span> loaded successfully',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Memory allocation</span>: <span class="terminal-memory">640K</span>',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Loading</span> system modules {{dots}}',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Pixel drivers</span> initialized',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Bypassing</span> <span class="terminal-process">modern standards</span> {{dots}}',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Nostalgia modules</span> installed',
              "",
              "            __              __    _____   ____       ",
              "           /\\ \\            /\\ \\__/\\  __`\\/\\  _`\\     ",
              " _ __   ___\\ \\ \\____    ___\\ \\ ,_\\ \\ \\/\\ \\ \\,\\L\\_\\   ",
              "/\\`'__\\/ __`\\ \\ '__`\\  / __`\\ \\ \\/\\ \\ \\ \\ \\/_\\__ \\   ",
              "\\ \\ \\//\\ \\L\\ \\ \\ \\L\\ \\/\\ \\L\\ \\ \\ \\_\\ \\ \\_\\ \\/\\ \\L\\ \\ ",
              " \\ \\_\\\\ \\____/\\ \\_,__/\\ \\____/\\ \\__\\\\ \\_____\\ `\\____\\",
              "  \\/_/ \\/___/  \\/___/  \\/___/  \\/__/ \\/_____/\\/_____/",
              "                                                     ",
              "                                                     ",
              "                                                     ",
              "",
              "    ┌─┐",
              "    │R│  robotOS Terminal",
              "    └─┘  Ready for commands {{dots}}",
              "",
              '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'Loading retro vibes\'</span>',
              '<span class="terminal-string">Loading retro vibes</span> {{dots}}',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">cat</span> <span class="terminal-path">/dev/nostalgia</span>',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Found</span> <span class="terminal-number">98%</span> pure nostalgia',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">sudo apt-get install</span> <span class="terminal-string">pixelart</span>',
              '<span class="terminal-process">Installing</span> <span class="terminal-string">pixelart</span> <span class="spinning-indicator" data-char="/"></span>',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Pixel art drivers</span> installed',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">systemctl start</span> <span class="terminal-service">robotos.service</span>',
              '<span class="terminal-process">Starting</span> <span class="terminal-service">robotos.service</span> {{dots}}',
              '<span class="terminal-bracket">[</span><span class="terminal-status">ACTIVE</span><span class="terminal-bracket">]</span> robotOS service started',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">whoami</span>',
              '<span class="terminal-prompt"><span class="terminal-user">robot</span>@<span class="terminal-host">robotos</span>:~$</span> {{dots}}',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">ls</span> <span class="terminal-path">/home/robot/</span>',
              '<span class="terminal-process">Scanning directory</span> <span class="spinning-indicator" data-char="|"></span>',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Found</span>: <span class="terminal-string">memories</span>, <span class="terminal-string">dreams</span>, and <span class="terminal-string">pixelart</span>',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'Welcome to the matrix\'</span>',
              '<span class="terminal-string">Welcome to the matrix {{dots}}',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">sudo chmod +x</span> <span class="terminal-path">/usr/bin/retro</span>',
              '<span class="terminal-process">Setting</span> <span class="terminal-permission">permissions</span> <span class="spinning-indicator" data-char="-"></span>',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Retro permissions</span> granted',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">ping</span> <span class="terminal-ip">127.0.0.1</span> <span class="terminal-flag">-c</span> <span class="terminal-number">1</span>',
              '<span class="terminal-info">PING</span> <span class="terminal-ip">127.0.0.1</span> (<span class="terminal-ip">127.0.0.1</span>) <span class="terminal-number">56(84)</span> bytes of data.',
              '<span class="terminal-number">64</span> bytes from <span class="terminal-ip">127.0.0.1</span>: icmp_seq=<span class="terminal-number">1</span> time=<span class="terminal-number">0.001</span> ms',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'System is alive!\'</span>',
              '<span class="terminal-string">System is alive!</span> {{dots}}',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">brew install</span> <span class="terminal-string">robotos</span>',
              '<span class="terminal-process">Installing</span> robotOS... <span class="progress-bar"></span>',
              '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> robotOS installed successfully',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">zsh --version</span>',
              '<span class="terminal-process">Checking zsh version</span> <span class="spinning-indicator" data-char="\\"></span>',
              '<span class="terminal-string">zsh</span> <span class="terminal-version">5.8</span> (<span class="terminal-architecture">x86_64-apple-darwin20.0</span>)',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'🤖 Initializing robot consciousness\'</span>',
              "🤖 Initializing robot consciousness {{dots}}",
              '<span class="terminal-prompt">$</span> <span class="terminal-command">systemctl status</span> <span class="terminal-service">robotos</span>',
              '<span class="terminal-process">Checking service status</span> <span class="spinning-indicator" data-char="|"></span>',
              '<span class="terminal-bracket">[</span><span class="terminal-status">ACTIVE</span><span class="terminal-bracket">]</span> robotOS is running <span class="spinning-indicator" data-char="|"></span>',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">systemctl status</span> <span class="terminal-service">robotOS</span>',
              '<span class="terminal-bracket">[</span><span class="terminal-status">ACTIVE</span><span class="terminal-bracket">]</span> robotOS is running',
              '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'<span class="retro-robot">🤖</span> System initialized successfully! <span class="retro-robot">🤖</span>\'</span>',
              "🤖 System initialized successfully! 🤖",
              '<span class="terminal-prompt">$</span> <span class="terminal-command">whoami</span>',
              '<span class="terminal-prompt"><span class="terminal-user">robot</span>@<span class="terminal-host">robotos</span>:~$</span> {{dots}}',
            ]}
            duration={8000}
          />
        </div>
      </div>
    );
  }

  return <div className="page-fade-in">{children}</div>;
}
