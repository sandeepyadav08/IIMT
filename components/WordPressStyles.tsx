"use client";

import { useEffect } from "react";

/**
 * Component to dynamically load WordPress theme styles
 * This ensures content looks exactly like it does in WordPress
 */
export default function WordPressStyles() {
  useEffect(() => {
    const WORDPRESS_BASE_URL = "http://192.168.29.241/wordpress";

    // List of WordPress stylesheets to load
    const stylesheets = [
      // WordPress core block styles
      `${WORDPRESS_BASE_URL}/wp-includes/css/dist/block-library/style.min.css`,
      
      // WordPress block theme styles
      `${WORDPRESS_BASE_URL}/wp-includes/css/dist/block-library/theme.min.css`,
      
      // Add your active theme stylesheet here
      // Example for Twenty Twenty-Four theme:
      // `${WORDPRESS_BASE_URL}/wp-content/themes/twentytwentyfour/style.css`,
      
      // If you're using a custom theme, replace with your theme name:
      // `${WORDPRESS_BASE_URL}/wp-content/themes/YOUR-THEME-NAME/style.css`,
    ];

    // Load each stylesheet
    const linkElements: HTMLLinkElement[] = [];
    
    stylesheets.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.type = "text/css";
      document.head.appendChild(link);
      linkElements.push(link);
    });

    // Cleanup function to remove stylesheets when component unmounts
    return () => {
      linkElements.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return null;
}
