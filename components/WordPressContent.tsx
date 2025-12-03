"use client";

import { useEffect } from "react";
import { processWordPressContent, extractInlineStyles } from "@/lib/processWordPressContent";

interface WordPressContentProps {
  content: string;
  className?: string;
}

/**
 * Component to render WordPress content with proper URL handling and inline styles
 */
export default function WordPressContent({ content, className = "" }: WordPressContentProps) {
  // Process content to fix URLs
  const processedContent = processWordPressContent(content);
  
  // Extract and inject inline styles
  useEffect(() => {
    const inlineStyles = extractInlineStyles(content);
    const styleElements: HTMLStyleElement[] = [];

    inlineStyles.forEach((styleContent, index) => {
      const styleElement = document.createElement("style");
      styleElement.setAttribute("data-wp-inline-style", `wp-style-${index}`);
      styleElement.textContent = styleContent;
      document.head.appendChild(styleElement);
      styleElements.push(styleElement);
    });

    // Cleanup
    return () => {
      styleElements.forEach((styleElement) => {
        if (styleElement.parentNode) {
          styleElement.parentNode.removeChild(styleElement);
        }
      });
    };
  }, [content]);

  return (
    <div
      className={`wordpress-content ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
