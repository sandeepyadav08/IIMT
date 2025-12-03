/**
 * Process WordPress content to fix URLs and ensure proper rendering
 */

const WORDPRESS_BASE_URL = 'http://192.168.29.241/wordpress';

/**
 * Process WordPress HTML content to fix relative URLs
 * @param content - Raw HTML content from WordPress
 * @returns Processed HTML with absolute URLs
 */
export function processWordPressContent(content: string): string {
  if (!content) return '';

  let processedContent = content;

  // Fix relative image URLs
  processedContent = processedContent.replace(
    /src="\/wp-content\//g,
    `src="${WORDPRESS_BASE_URL}/wp-content/`
  );

  // Fix relative URLs in href attributes
  processedContent = processedContent.replace(
    /href="\/wp-content\//g,
    `href="${WORDPRESS_BASE_URL}/wp-content/`
  );

  // Fix srcset attributes for responsive images
  processedContent = processedContent.replace(
    /srcset="([^"]*)"/g,
    (_match, srcset) => {
      const fixedSrcset = srcset.replace(
        /\/wp-content\//g,
        `${WORDPRESS_BASE_URL}/wp-content/`
      );
      return `srcset="${fixedSrcset}"`;
    }
  );

  // Fix background images in style attributes
  processedContent = processedContent.replace(
    /url\(\/wp-content\//g,
    `url(${WORDPRESS_BASE_URL}/wp-content/`
  );

  // Fix any other relative WordPress URLs
  processedContent = processedContent.replace(
    /src="\/wordpress\//g,
    `src="${WORDPRESS_BASE_URL}/`
  );

  processedContent = processedContent.replace(
    /href="\/wordpress\//g,
    `href="${WORDPRESS_BASE_URL}/`
  );

  return processedContent;
}

/**
 * Extract inline styles from WordPress content
 * @param content - HTML content
 * @returns Array of style tags content
 */
export function extractInlineStyles(content: string): string[] {
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const styles: string[] = [];
  let match;

  while ((match = styleRegex.exec(content)) !== null) {
    styles.push(match[1]);
  }

  return styles;
}

/**
 * Remove style tags from content (they'll be added to head instead)
 * @param content - HTML content
 * @returns Content without style tags
 */
export function removeStyleTags(content: string): string {
  return content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
}
