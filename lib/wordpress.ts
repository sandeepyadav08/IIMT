// WordPress API configuration and fetch functions

const WORDPRESS_API_URL = 'http://192.168.29.241/wordpress/wp-json/wp/v2';

export interface WordPressPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
}

/**
 * Fetch a WordPress page by slug
 * @param slug - The page slug
 * @returns The page data or null if not found
 */
export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/pages?slug=${slug}`,
      {
        cache: 'no-store' // Always fetch fresh data
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`);
    }

    const pages: WordPressPage[] = await response.json();
    
    if (pages.length === 0) {
      return null;
    }

    return pages[0];
  } catch (error) {
    console.error('Error fetching WordPress page:', error);
    return null;
  }
}

/**
 * Fetch all WordPress pages (useful for generating static paths)
 * @returns Array of all pages
 */
export async function getAllPages(): Promise<WordPressPage[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/pages?per_page=100`,
      {
        cache: 'no-store' // Always fetch fresh data
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress pages:', error);
    return [];
  }
}
/**
 * Fetch the WordPress homepage (tries multiple approaches)
 * @returns The homepage data or null if not found
 */
export async function getHomePage(): Promise<WordPressPage | null> {
  // Try different common homepage slugs
  const homePageSlugs = ['home', 'homepage', 'front-page', 'index'];
  
  for (const slug of homePageSlugs) {
    const page = await getPageBySlug(slug);
    if (page) {
      return page;
    }
  }

  // If no specific home page found, try to get the first published page
  try {
    const pages = await getAllPages();
    const publishedPages = pages.filter(page => page.status === 'publish');
    
    if (publishedPages.length > 0) {
      return publishedPages[0];
    }
  } catch (error) {
    console.error('Error fetching homepage:', error);
  }

  return null;
}

/**
 * Debug function to list all available pages
 * @returns Array of page slugs and titles
 */
export async function debugPages(): Promise<{slug: string, title: string, id: number}[]> {
  try {
    const pages = await getAllPages();
    return pages.map(page => ({
      slug: page.slug,
      title: page.title.rendered,
      id: page.id
    }));
  } catch (error) {
    console.error('Error debugging pages:', error);
    return [];
  }
}


