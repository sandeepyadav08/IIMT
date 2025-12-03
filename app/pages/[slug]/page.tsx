import { notFound } from "next/navigation";
import { getPageBySlug, getAllPages } from "@/lib/wordpress";
import WordPressContent from "@/components/WordPressContent";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.title.rendered,
    description: page.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

// Generate static paths for all WordPress pages (optional - for static generation)
export async function generateStaticParams() {
  const pages = await getAllPages();
  
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function WordPressPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  // If page not found, show 404
  if (!page) {
    notFound();
  }

  return (
    <div className="wordpress-page-wrapper">
      <div className="container">
        <div className="wordpress-page-content">
          {/* WordPress Page Content */}
          <WordPressContent content={page.content.rendered} />
        </div>
      </div>
    </div>
  );
}
