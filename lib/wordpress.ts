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
        next: { revalidate: 60 } // Revalidate every 60 seconds
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
        next: { revalidate: 3600 } // Revalidate every hour
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


